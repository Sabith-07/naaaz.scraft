
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
    description: 'Elegant white roses wrapped in premium satin silk paper with a custom greeting.',
    images: [
      { src: image1, orientation: 'portrait' },
      { src: image2, orientation: 'landscape' },
      { src: image3, orientation: 'square' }
    ]
  },
  {
    id: '2',
    title: 'chocolate bouquet',
    occasion: Occasion.ANNIVERSARY,
    price: 1250,
    description: 'A delicate collection of mini bouquets featuring diverse floral textures.',
    images: [
      { src: image2, orientation: 'portrait' },
      { src: 'https://images.unsplash.com/photo-1589123017147-3807b660233b?q=80&w=800&auto=format&fit=crop', orientation: 'landscape' }
    ]
  },
  {
    id: '3',
    title: 'doll bouquet',
    occasion: Occasion.FOR_HIM,
    price: 750,
    description: 'Artisanal coffee beans paired with a bespoke mug and leather-bound coasters.',
    images: [
      { src: image3, orientation: 'square' },
      { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop', orientation: 'landscape' }
    ]
  },
  {
    id: '4',
    title: 'Nikha booklet',
    occasion: Occasion.WEDDING,
    price: 1350,
    description: 'A single, high-grade pink rose in an architectural paper wrap.',
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
      { src: image5, orientation: 'landscape' },
      { src: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=800&auto=format&fit=crop', orientation: 'square' }
    ]
  },
  {
    id: '6',
    title: 'Gourmet Snack Exchange',
    occasion: Occasion.EXCHANGE,
    price: 1800,
    description: 'Hand-picked selection of organic dry fruits and artisanal crisps.',
    images: [
      { src: image6, orientation: 'landscape' }
    ]
  }
];

export const CATEGORIES = Object.values(Occasion);
