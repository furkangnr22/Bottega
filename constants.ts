import { CakeFlavor, CakeShape, FrostingType, Topping } from "./types";

export const CAKE_SHAPES: { id: CakeShape; priceMultiplier: number }[] = [
  { id: 'round', priceMultiplier: 1 },
  { id: 'square', priceMultiplier: 1.1 },
  { id: 'heart', priceMultiplier: 1.2 },
  { id: 'tiered', priceMultiplier: 2.0 },
];

export const FLAVORS: { id: CakeFlavor }[] = [
  { id: 'vanilla' },
  { id: 'chocolate' },
  { id: 'red_velvet' },
  { id: 'lemon' },
  { id: 'carrot' },
];

export const FROSTINGS: { id: FrostingType }[] = [
  { id: 'buttercream' },
  { id: 'fondant' },
  { id: 'ganache' },
  { id: 'naked' },
];

export const TOPPINGS: { id: string; price: number; category: 'fruit' | 'sprinkles' | 'decor' | 'candy' }[] = [
  { id: 'berries', price: 5, category: 'fruit' },
  { id: 'macarons', price: 8, category: 'decor' },
  { id: 'gold_leaf', price: 12, category: 'decor' },
  { id: 'sprinkles_rainbow', price: 2, category: 'sprinkles' },
  { id: 'sprinkles_pearl', price: 4, category: 'sprinkles' },
  { id: 'flowers', price: 10, category: 'decor' },
  { id: 'drip', price: 5, category: 'decor' },
];
