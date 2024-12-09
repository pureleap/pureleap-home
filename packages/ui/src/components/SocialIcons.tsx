import React from 'react';

interface IconConfig {
  name: string;
  src: string;
  alt: string;
  label: string;
  width: number; // width of the icon
  height: number; // height of the icon
  url: string; // URL for the social link
}

interface SocialIconsProps {
  icons: IconConfig[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ icons }) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 hover:cursor-pointer group w-full"
        >
          <div style={{ width: '56px', height: '48px' }} className="flex items-center justify-center">
            <img
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              className="object-contain"
            />
          </div>
          <span className="text-lg font-medium group-hover:underline">{icon.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

// Example JSON configuration and usage
export const ICON_CONFIG: IconConfig[] = [
  {
    name: 'linkedin',
    src: '/_goldstack/static/img/202412/icons/linkedin.png',
    alt: 'LinkedIn',
    label: 'LinkedIn',
    width: 48,
    height: 48,
    url: 'https://www.linkedin.com',
  },
  {
    name: 'youtube',
    src: '/_goldstack/static/img/202412/icons/youtube.png',
    alt: 'YouTube',
    label: 'YouTube',
    width: 56,
    height: 48,
    url: 'https://www.youtube.com',
  },
  {
    name: 'instagram',
    src: '/_goldstack/static/img/202412/icons/instagram.png',
    alt: 'Instagram',
    label: 'Instagram',
    width: 48,
    height: 48,
    url: 'https://www.instagram.com',
  },
  {
    name: 'twitter',
    src: '/_goldstack/static/img/202412/icons/twitter.png',
    alt: 'Twitter',
    label: 'Twitter',
    width: 48,
    height: 48,
    url: 'https://www.twitter.com',
  },
  {
    name: 'heart',
    src: '/_goldstack/static/img/202412/icons/heart.png',
    alt: 'Website',
    label: 'Website',
    width: 44,
    height: 48,
    url: 'https://www.pureleap.com',
  },
];
