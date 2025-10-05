import aiAutoRelationImage from '../img/gifts/ai-auto-relation.png';
import commonplaceBookImage from '../img/gifts/commonplace-book.png';
import riverNotABucketImage from '../img/gifts/river-not-a-bucket.png';
import { Gift } from '../types/gift';

/**
 * Array of all available gifts.
 */
export const gifts: Gift[] = [
  {
    title: 'Commonplace Book',
    subtitle: 'Template',
    ctaLink: 'https://www.notion.com/templates/commonplace-book-379',
    description: 'A refuge for your thoughts inspired by ancient practices.',
    price: '$0',
    image: commonplaceBookImage,
    authors: [{ name: 'Shalveena', link: 'https://shalveena.com' }],
    id: 'commonplace-book',
    learnMoreLink: 'gifts/commonplace-book',
  },
  {
    title: 'River Not a Bucket',
    subtitle: 'Template',
    ctaLink: 'https://www.notion.com/templates/river-not-a-bucket',
    description: 'Collect what inspires without creating clutter.',
    price: '$0',
    image: riverNotABucketImage,
    authors: [{ name: 'Shalveena', link: 'https://shalveena.com' }],
    id: 'river-not-a-bucket',
    learnMoreLink: 'https://www.notion.com/templates/river-not-a-bucket',
  },
  {
    title: 'AI Auto Relation',
    subtitle: 'Integration',
    ctaLink: 'https://auto-relation.com',
    description: 'Bring order to chaos using the power of relations.',
    price: '$0',
    image: aiAutoRelationImage,
    authors: [{ name: 'Max', link: 'https://maxrohde.com' }],
    id: 'ai-auto-relation',
    learnMoreLink: 'https://auto-relation.com',
  },
];
