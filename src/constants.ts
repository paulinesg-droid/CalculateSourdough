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
    affiliateUrl: 'https://www.amazon.com/dp/B00063RWYI?tag=calculatesourdough-20'
  },
  {
    name: 'Banneton Proofing Basket Set',
    category: 'tools',
    region: 'both',
    emoji: '🧺',
    desc: '9" round banneton with linen liner',
    affiliateUrl: 'https://www.amazon.com/dp/B09HH4K1LZ?tag=calculatesourdough-20'
  },
  {
    name: 'OXO Good Grips Kitchen Scale',
    category: 'tools',
    region: 'us',
    emoji: '⚖️',
    desc: 'Pull-out display so large bowls never block the screen',
    affiliateUrl: 'https://www.amazon.com/dp/B079D9B82W?tag=calculatesourdough-20',
  },
  {
    name: 'Tartine Bread — Chad Robertson',
    category: 'books',
    region: 'both',
    emoji: '📖',
    desc: 'The definitive sourdough bread book',
    affiliateUrl: 'https://www.amazon.com/dp/0811870413?tag=calculatesourdough-20'
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
    affiliateUrl: 'https://www.amazon.com/dp/B00VA5HG0Q?tag=calculatesourdough-20'
  },
{
  name: 'Shipton Mill Strong White',
  category: 'flour',
  region: 'eu',
  emoji: '🌾',
  desc: 'Premium stone-ground bread flour',
  affiliateUrl: 'https://www.amazon.com/dp/B00P6EQW6G?tag=calculatesourdough-20'
},
{
  name: 'Zojirushi Home Bakery Virtuoso Plus',
  category: 'tools',
  region: 'us',
  emoji: '🍞',
  desc: 'Set-it-and-forget-it bread machine with a sourdough starter setting',
  affiliateUrl: 'https://www.amazon.com/dp/B07BQ28TQ6?tag=calculatesourdough-20',
}
]
