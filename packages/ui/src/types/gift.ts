/**
 * Represents a gift item with all necessary properties.
 */
export interface Gift {
  /** The title of the gift */
  title: string;
  /** The subtitle or type of the gift */
  subtitle: string;
  /** External link to the gift */
  ctaLink: string;
  /** Description of the gift */
  description: string;
  /** Price of the gift */
  price: string;
  /** Image source for the gift */
  image: string;
  /** Array of authors with name and link */
  authors: { name: string; link: string }[];
  /** URL slug for the gift page */
  id: string;
  /** Link for learn more on index page */
  learnMoreLink: string;
}
