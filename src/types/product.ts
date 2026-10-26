// export interface Product {
//   id: string;
//   brand: string;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice?: number;
//   rating: number;
//   reviewsCount: number;
//   image: string;
//   slug: string;
// }
export interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  slug: string;
  badge?: string; // e.g. "-25%", "NEW"
  isNew?: boolean;
  inStock?: boolean;
}