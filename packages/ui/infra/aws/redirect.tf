
# Creates bucket for forward domain
resource "aws_s3_bucket" "website_redirect" {
  count = var.website_domain_redirect != null ? 1 : 0

  bucket = "${var.website_domain}-redirect"

  # Remove this line if you want to prevent accidential deletion of bucket
  force_destroy = true

  tags = {
    ManagedBy = "terraform"
    Changed   = formatdate("YYYY-MM-DD hh:mm ZZZ", timestamp())
  }

  lifecycle {
    ignore_changes = [tags]
  }
}

resource "aws_s3_bucket_public_access_block" "website_redirect" {
  count = var.website_domain_redirect != null ? 1 : 0

  bucket = aws_s3_bucket.website_redirect[0].id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "website_redirect" {
  count = var.website_domain_redirect != null ? 1 : 0

  bucket = aws_s3_bucket.website_redirect[0].id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_policy" "website_redirect" {
  count = var.website_domain_redirect != null ? 1 : 0

  bucket = aws_s3_bucket.website_redirect[0].id
  policy = data.aws_iam_policy_document.website_redirect[0].json
}

resource "aws_cloudfront_origin_access_control" "website_redirect" {
  count = var.website_domain_redirect != null ? 1 : 0

  name                              = "oac-${var.website_domain}-redirect"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "redirect" {
  count = var.website_domain_redirect != null ? 1 : 0

  name    = "redirect-to-${var.website_domain}"
  runtime = "cloudfront-js-1.0"
  comment = "Redirect all requests to main domain"
  publish = true
  code    = <<-EOF
    function handler(event) {
      var request = event.request;
      var newurl = 'https://${var.website_domain}' + request.uri;
      var response = {
        statusCode: 301,
        statusDescription: 'Moved Permanently',
        headers: {
          'location': { value: newurl }
        }
      };
      return response;
    }
  EOF
}

data "aws_iam_policy_document" "website_redirect" {
  count = var.website_domain_redirect != null ? 1 : 0

  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.website_redirect[0].arn}/*"
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.website_cdn_redirect[0].arn]
    }
  }
}


resource "aws_s3_bucket_object" "redirect_file" {
  count = var.website_domain_redirect != null ? 1 : 0

  key     = "index.html"
  bucket  = aws_s3_bucket.website_redirect[0].bucket
  content = "Redirect placeholder."

  content_type = "text/html"

  force_destroy = true
}

# CloudFront for redirect (to support https://)
resource "aws_cloudfront_distribution" "website_cdn_redirect" {
  count = var.website_domain_redirect != null ? 1 : 0

  depends_on = [
  ]
  enabled     = true
  price_class = "PriceClass_All" # Select the correct PriceClass depending on who the CDN is supposed to serve (https://docs.aws.amazon.com/AmazonCloudFront/ladev/DeveloperGuide/PriceClass.html)
  aliases     = [var.website_domain_redirect]
  provider    = aws.us-east-1

  origin {
    origin_id                = "origin-bucket-${aws_s3_bucket.website_redirect[0].id}"
    domain_name              = aws_s3_bucket.website_redirect[0].bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.website_redirect[0].id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "origin-bucket-${aws_s3_bucket.website_redirect[0].id}"
    min_ttl          = "0"
    default_ttl      = "0"
    max_ttl          = "0"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.redirect[0].arn
    }
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
  }

  lifecycle {
    ignore_changes = [
      tags,
      viewer_certificate,
    ]
  }
}

# Creates record to point to redirect CloudFront distribution
resource "aws_route53_record" "website_cdn_redirect_record" {
  count = var.website_domain_redirect != null ? 1 : 0

  zone_id = data.aws_route53_zone.main.zone_id
  name    = var.website_domain_redirect
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_cdn_redirect[0].domain_name
    zone_id                = aws_cloudfront_distribution.website_cdn_redirect[0].hosted_zone_id
    evaluate_target_health = false
  }
}

