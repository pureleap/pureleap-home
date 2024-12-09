import React from 'react';

interface IconConfig {
  name: string;
  src: string;
  alt: string;
  label: string;
  width: number; // width of the icon
  height: number; // height of the icon
}

interface SocialIconsProps {
  icons: IconConfig[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ icons }) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      {icons.map((icon, index) => (
        <div key={index} className="flex items-center space-x-4">
          <img
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            className="object-contain"
          />
          <span className="text-lg font-medium">{icon.label}</span>
        </div>
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
  },
  {
    name: 'youtube',
    src: '/_goldstack/static/img/202412/icons/youtube.png',
    alt: 'YouTube',
    label: 'YouTube',
    width: 56,
    height: 48,
  },
  {
    name: 'instagram',
    src: '/_goldstack/static/img/202412/icons/instagram.png',
    alt: 'Instagram',
    label: 'Instagram',
    width: 48,
    height: 48,
  },
  {
    name: 'twitter',
    src: '/_goldstack/static/img/202412/icons/twitter.png',
    alt: 'Twitter',
    label: 'Twitter',
    width: 48,
    height: 48,
  },
  {
    name: 'heart',
    src: '/_goldstack/static/img/202412/icons/heart.png',
    alt: 'Website',
    label: 'Website',
    width: 44,
    height: 48,
  },
];
