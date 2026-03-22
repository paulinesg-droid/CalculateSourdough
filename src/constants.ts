import type { ProductItem, StyleId } from './types';

export const HYDRATIONS: Record<StyleId, number> = {
  fluffy: 0.65,
  classic: 0.72,
  artisan: 0.8,
  wet: 0.88,
};

export const METRIC_PRESETS = [500, 750, 1000] as const;
export const IMPERIAL_PRESETS = [18, 26, 35] as const;

export const PRODUCTS: ProductItem[] = [
  {
    name: 'Lodge 5qt Dutch Oven',
    category: 'gear',
    region: 'both',
    emoji: '🫕',
    desc: 'Cast iron for a perfect crust every time',
  },
  {
    name: 'King Arthur Bread Flour',
    category: 'flour',
    region: 'us',
    emoji: '🌾',
    desc: 'High-protein flour loved by sourdough bakers',
  },
  {
    name: 'Shipton Mill Strong White',
    category: 'flour',
    region: 'eu',
    emoji: '🌾',
    desc: 'Premium stone-ground bread flour',
  },
  {
    name: 'Banneton Proofing Basket Set',
    category: 'tools',
    region: 'both',
    emoji: '🧺',
    desc: '9" round banneton with linen liner',
  },
  {
    name: 'Cultures for Health Starter',
    category: 'starter',
    region: 'both',
    emoji: '🫙',
    desc: 'Dried starter kit, ready in 5 days',
  },
  {
    name: 'Tartine Bread — Chad Robertson',
    category: 'books',
    region: 'both',
    emoji: '📖',
    desc: 'The definitive sourdough bread book',
  },
  {
    name: "Bob's Red Mill Artisan Flour",
    category: 'flour',
    region: 'us',
    emoji: '🌾',
    desc: 'Reliable and widely available',
  },
  {
    name: 'Le Creuset Signature Cocotte',
    category: 'gear',
    region: 'eu',
    emoji: '🫕',
    desc: 'Premium enamelled cast iron for the serious baker',
  },
];
