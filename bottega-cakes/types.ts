export type CakeShape = 'round' | 'square' | 'heart' | 'tiered';
export type CakeFlavor = 'vanilla' | 'chocolate' | 'red_velvet' | 'lemon' | 'carrot';
export type FrostingType = 'buttercream' | 'fondant' | 'ganache' | 'naked';
export type FrostingColor = 'white' | 'pink' | 'chocolate' | 'blue' | 'purple' | 'gold' | 'custom';

export interface CakeOption {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface Topping extends CakeOption {
  category: 'fruit' | 'sprinkles' | 'decor' | 'candy';
}

export interface CustomCakeConfig {
  shape: CakeShape;
  size: number; // inches
  flavor: CakeFlavor;
  frosting: FrostingType;
  frostingColor: FrostingColor;
  toppings: string[]; // IDs of toppings
  message?: string;
  specialInstructions?: string;
}

export interface OrderContact {
  name: string;
  phone: string;
  date: string;
}

export interface GeneratedConcept {
  imageUrl: string;
  prompt: string;
}
