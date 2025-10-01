import React from 'react';
import Heart from './../icons/heart.png';
import Instagram from './../icons/instagram.png';
import LinkedIn from './../icons/linkedin.png';
import Twitter from './../icons/twitter.png';
import YouTube from './../icons/youtube.png';

/**
 * Configuration for a known social media icon
 */
interface IconConfig {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Properties for a social media link
 */
interface SocialLinkProps {
  /** Display label for the social link */
  label: string;
  /** URL the social link points to */
  url: string;
  /** Name of the icon to use (must match a known icon name) */
  icon: string;
}

/**
 * Properties for the SocialIcons component
 */
interface SocialIconsProps {
  /** Array of social media links to display */
  links: SocialLinkProps[];
}

// Internal mapping of known icons and their configurations
const KNOWN_ICONS: Record<string, IconConfig> = {
  linkedin: {
    name: 'linkedin',
    src: LinkedIn,
    alt: 'LinkedIn',
    width: 48,
    height: 48,
  },
  youtube: {
    name: 'youtube',
    src: YouTube,
    alt: 'YouTube',
    width: 56,
    height: 48,
  },
  instagram: {
    name: 'instagram',
    src: Instagram,
    alt: 'Instagram',
    width: 48,
    height: 48,
  },
  twitter: {
    name: 'twitter',
    src: Twitter,
    alt: 'Twitter',
    width: 48,
    height: 48,
  },
  heart: {
    name: 'heart',
    src: Heart,
    alt: 'Website',
    width: 44,
    height: 48,
  },
};

/**
 * Component that displays a list of social media icons with links
 */
const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      {links.map((link, index) => {
        const iconConfig = KNOWN_ICONS[link.icon];
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:cursor-pointer group w-full"
          >
            <div
              style={{ width: '56px', height: '48px' }}
              className="flex items-center justify-center"
            >
              <img
                src={iconConfig.src}
                alt={iconConfig.alt}
                width={iconConfig.width}
                height={iconConfig.height}
                className="object-contain"
              />
            </div>
            <span className="text-base group-hover:underline">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;

// Example configuration for social links
export const SOCIAL_LINKS: SocialLinkProps[] = [
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com',
  },
  {
    icon: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com',
  },
  {
    icon: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com',
  },
  {
    icon: 'twitter',
    label: 'Twitter',
    url: 'https://www.twitter.com',
  },
  {
    icon: 'heart',
    label: 'Website',
    url: 'https://www.pureleap.com',
  },
];
