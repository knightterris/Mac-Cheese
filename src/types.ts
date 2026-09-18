export interface Product {
  id: string;
  name: string;
  italianName: string;
  descriptor: string;
  image: string;
  accentColor: string;
  badgeBg: string;
  textColor: string;
  headline: string;
  shortDesc: string;
  tastingNotes: string[];
  bullets: [string, string, string];
  cookTimeMinutes: number;
  weightGrams: number;
  servings: number;
  spiceLevel?: number;
}

export interface StoreLocation {
  id: string;
  name: string;
  mall: string;
  floorZone: string;
  city: string;
  launchDate: string;
  hours: string;
  status: 'Available 24 Sept 2026' | 'Grand Launch' | 'Featured Showcase';
  address: string;
  transitTip: string;
  mapCoordinates: { lat: number; lng: number };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface MarketplacePlatform {
  name: 'Lazada' | 'Shopee' | 'TikTok Shop';
  icon: string;
  badge: string;
  color: string;
  hoverColor: string;
}
