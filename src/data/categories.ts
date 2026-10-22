import { Category } from '@/types/category';

export const categoriesData: Category[] = [
  {
    id: '1',
    name: 'MAKEUP',
    subcategories: 'Lip · Face · Eyes',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    slug: 'makeup',
  },
  {
    id: '2',
    name: 'SKINCARE',
    subcategories: 'Serums · Moisturizers · Cleansers',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    slug: 'skincare',
  },
  {
    id: '3',
    name: 'FASHION',
    subcategories: 'Dresses · Tops · Accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    slug: 'fashion',
  },
  {
    id: '4',
    name: 'BEAUTY TOOLS',
    subcategories: 'Brushes · Sponges · Essentials',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
    slug: 'beauty-tools',
  },
];