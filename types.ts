
export enum Occasion {
  ALL = 'All',
  ANNIVERSARY = 'Anniversary Gifts',
  BABY = 'Baby',
  BIRTHDAY = 'Birthday',
  ENGAGEMENT = 'Engagement',
  EXCHANGE = 'Gift exchange',
  FOR_HER = 'Gift for Her',
  FOR_HIM = 'Gift for Him',
  GOURMET = 'Gourmet Gifts',
  WEDDING = 'Wedding'
}

export type ImageOrientation = 'landscape' | 'portrait' | 'square';

export interface ProjectImage {
  src: string;
  orientation: ImageOrientation;
}

export interface HamperProject {
  id: string;
  title: string;
  occasion: Occasion;
  price: number;
  description: string;
  images: ProjectImage[];
}

export interface RecommendationRequest {
  occasion: Occasion;
  budget: string;
  recipient: string;
  preferences: string;
}
