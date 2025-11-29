# PostHog CloudFront Distribution for reverse proxy
# Cache policy for CORS-enabled requests
resource "aws_cloudfront_cache_policy" "posthog_origin_cors" {
  provider = aws.us-east-1
  name     = "posthog-origin-cors-${random_id.id.hex}"

  default_ttl = 0
  max_ttl     = 31536000
  min_ttl     = 0

  parameters_in_cache_key_and_forwarded_to_origin {
    cookies_config {
      cookie_behavior = "none"
    }

    headers_config {
      header_behavior = "whitelist"
      headers {
        items = ["Origin", "Authorization"]
      }
    }

    query_strings_config {
      query_string_behavior = "all"
    }

    enable_accept_encoding_brotli = true
    enable_accept_encoding_gzip   = true
  }
}

# Origin request policy for static assets
resource "aws_cloudfront_origin_request_policy" "posthog_origin_request" {
  provider = aws.us-east-1
  name     = "posthog-origin-request-policy-${random_id.id.hex}"

  cookies_config {
    cookie_behavior = "none"
  }

  headers_config {
    header_behavior = "whitelist"
    headers {
      items = ["Origin"]
    }
  }

  query_strings_config {
    query_string_behavior = "all"
  }
}

# CloudFront distribution for PostHog reverse proxy
resource "aws_cloudfront_distribution" "posthog_relay" {
  provider = aws.us-east-1
  enabled  = true
  aliases  = ["relay-ph.${var.website_domain}"]

  # Primary origin for PostHog API
  origin {
    domain_name = "us.i.posthog.com"
    origin_id   = "posthog-api"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  # Secondary origin for PostHog assets
  origin {
    domain_name = "us-assets.i.posthog.com"
    origin_id   = "posthog-assets"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  # Default cache behavior for API requests
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "posthog-api"

    cache_policy_id          = aws_cloudfront_cache_policy.posthog_origin_cors.id
    origin_request_policy_id = "59781a5b-3903-41f3-afcb-af62929ccde1"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  # Ordered cache behavior for static assets
  ordered_cache_behavior {
    path_pattern     = "/static/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "posthog-assets"

    cache_policy_id          = aws_cloudfront_cache_policy.posthog_origin_cors.id
    origin_request_policy_id = aws_cloudfront_origin_request_policy.posthog_origin_request.id

    response_headers_policy_id = "eaab4381-ed33-4a86-88ca-d9558dc6cd63"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.wildcard_website.arn
    ssl_support_method  = "sni-only"
  }

  tags = {
    ManagedBy = "terraform"
    Changed   = formatdate("YYYY-MM-DD hh:mm ZZZ", timestamp())
    Purpose   = "PostHog Reverse Proxy"
  }

  lifecycle {
    ignore_changes = [tags]
  }
}

# Route 53 record for the PostHog relay domain
resource "aws_route53_record" "posthog_relay_record" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = "relay-ph.${var.website_domain}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.posthog_relay.domain_name
    zone_id                = aws_cloudfront_distribution.posthog_relay.hosted_zone_id
    evaluate_target_health = false
  }
}
