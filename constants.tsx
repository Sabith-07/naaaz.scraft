
import { Occasion, HamperProject } from './types';
import image1 from './components/assets/image1.jpeg';
import image2 from './components/assets/image2.jpeg';
import image3 from './components/assets/image3.jpeg';
import image4 from './components/assets/image4.jpeg';
import image5 from './components/assets/image5.jpeg';
import image6 from './components/assets/image6.jpeg';
import image7 from './components/assets/image7.jpeg';
import wedImage1 from './components/assets/wedimg1.jpeg';
import wedImage2 from './components/assets/wedimage2.jpeg';

export const HAMPER_PROJECTS: HamperProject[] = [
  {
    id: '1',
    title: 'chocolate hamper',
    occasion: Occasion.BIRTHDAY,
    price: 1500,
    description: 'a beautiful choclate hamper (can be customized based on your favorite chocolates).',
    images: [
      { src: image1, orientation: 'portrait' }
    ]
  },
  {
    id: '2',
    title: 'chocolate bouquet',
    occasion: Occasion.ANNIVERSARY,
    price: 1250,
    description: 'A delicate collection of mini bouquets featuring diverse floral textures.',
    images: [
      { src: image2, orientation: 'portrait' }
    ]
  },
  {
    id: '3',
    title: 'doll bouquet',
    occasion: Occasion.FOR_HIM,
    price: 750,
    description: 'a mesmerizing doll bouquet.',
    images: [
      { src: image3, orientation: 'square' }
    ]
  },
  {
    id: '4',
    title: 'Nikha booklet',
    occasion: Occasion.WEDDING,
    price: 1350,
    description: 'A beautiful booklet with a gloden or silver aesthetics for your nikah.',
    images: [
      { src: wedImage2, orientation: 'portrait' },
      { src: wedImage1, orientation: 'portrait' }
    ]
  },
  {
    id: '5',
    title: 'birthday hamper',
    occasion: Occasion.ANNIVERSARY,
    price: 2999,
    description: 'Luxury velvet box containing assorted truffles and a personalized journal.',
    images: [
      { src: image5, orientation: 'landscape' }
    ]
  },
  {
    id: '6',
    title: 'A trolley hamper',
    occasion: Occasion.EXCHANGE,
    price: 2999,
    description: 'Hand-picked selection of organic dry fruits and artisanal crisps, chocolates and a beautiful aesthetic looking flower bouquet.',
    images: [
      { src: image6, orientation: 'landscape' }
    ]
  }
];

export const CATEGORIES = Object.values(Occasion);
