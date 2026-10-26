'use client';

import React, { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  Star, 
  ShoppingBag, 
  ChevronRight, 
  Truck, 
  RotateCcw, 
  Check, 
  Eye 
} from 'lucide-react';
import { shopProducts, curatedProducts } from '@/data/products';

export default function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js er rule onujayi params ke use() diye unwrap kora holo
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Slug onujayi correct product khuje ber kora
  const allProducts = [...shopProducts, ...curatedProducts];
  const product = allProducts.find((p) => p.slug === slug) || allProducts[0];

  // State management
  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Rosewood');
  const [selectedSize, setSelectedSize] = useState('3.5 g');
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'shipping'>('description');

  // Slug ba product change hole state update korar jonno useEffect
  useEffect(() => {
    setActiveImage(product.image);
    setQuantity(1);
  }, [slug, product.image]);

  const colorOptions = [
    { name: 'Rosewood', bg: 'bg-[#80313B]' },
    { name: 'Deep Burgundy', bg: 'bg-[#581825]' },
    { name: 'Warm Nude', bg: 'bg-[#C88A7D]' },
    { name: 'Soft Mauve', bg: 'bg-[#9E5B63]' },
    { name: 'Classic Red', bg: 'bg-[#A31D2A]' },
    { name: 'Berry Wine', bg: 'bg-[#4A1521]' },
  ];

  const thumbnailImages = [
    product.image,
    'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-8 md:py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-gray-500 font-light">
          <Link href="/" className="hover:text-[#581825] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <Link href="/shop" className="hover:text-[#581825] transition-colors">{product.category}</Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Gallery */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4">
            <div className="flex sm:flex-col order-2 sm:order-1 gap-3 overflow-x-auto sm:overflow-y-auto">
              {thumbnailImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-[#F5EFE6] ${
                    activeImage === img ? 'border-[#581825] shadow-md' : 'border-[#E8E0D5] hover:border-gray-400'
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill sizes="80px" className="object-cover object-center" />
                </button>
              ))}
            </div>

            <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden bg-[#FDFBF7] border border-[#E8E0D5]/70 shadow-sm order-1 sm:order-2">
              <Image src={activeImage} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />

              {product.badge && (
                <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white bg-[#581825] shadow-sm">
                  {product.badge}
                </span>
              )}

              <button
                type="button"
                aria-label="Add to Wishlist"
                className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-gray-700 hover:text-[#581825] hover:bg-white transition-colors shadow-sm"
              >
                <Heart className="w-4 h-4 stroke-[1.8]" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-6 space-y-6 bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-[#E8E0D5]/70 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 block">
                {product.brand}
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-normal text-gray-900 tracking-tight">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex text-[#581825]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-light">
                ({product.reviewsCount} reviews)
              </span>
            </div>

            <div className="flex items-center space-x-3 pt-1">
              <span className="text-2xl font-bold text-[#581825]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-gray-400 line-through font-light">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#581825]/10 text-[#581825] px-2.5 py-1 rounded-full">
                    Save 25%
                  </span>
                </>
              )}
            </div>

            <p className="text-xs text-gray-600 font-light leading-relaxed border-t border-b border-[#E8E0D5]/60 py-4">
              A long-lasting matte lipstick with a smooth, velvety finish. Enriched with nourishing ingredients to keep your lips soft, comfortable and beautifully colored all day.
            </p>

            {/* Color selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-gray-700">
                  Color: <span className="font-normal text-gray-600">{selectedColor}</span>
                </span>
              </div>
              <div className="flex items-center space-x-3 pt-1">
                {colorOptions.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-7 h-7 rounded-full ${color.bg} transition-all relative flex items-center justify-center shadow-sm ${
                      selectedColor === color.name ? 'ring-2 ring-offset-2 ring-[#581825] scale-110' : 'hover:scale-105'
                    }`}
                    title={color.name}
                  >
                    {selectedColor === color.name && <Check className="w-3 h-3 text-white stroke-[3]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 block">
                Size: <span className="font-normal text-gray-600">{selectedSize}</span>
              </span>
              <div className="inline-flex">
                <button
                  type="button"
                  className="px-4 py-1.5 text-xs font-semibold rounded-lg border border-[#581825] bg-[#581825] text-white shadow-sm"
                >
                  3.5 g
                </button>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="flex items-center justify-between border border-[#E8E0D5] rounded-xl bg-white px-3 py-2 w-32 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-500 hover:text-[#581825] transition-colors text-sm font-bold px-1"
                  >
                    -
                  </button>
                  <span className="text-xs font-semibold text-gray-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-500 hover:text-[#581825] transition-colors text-sm font-bold px-1"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="flex-1 bg-[#581825] hover:bg-[#43121c] text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4 stroke-[2]" />
                  <span>Add to Cart</span>
                </button>

                <button
                  type="button"
                  className="flex-1 bg-transparent hover:bg-[#581825]/5 text-[#581825] border border-[#581825]/50 text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-colors text-center"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E8E0D5]/60 text-center">
              <div className="flex flex-col items-center space-y-1 text-gray-600">
                <Heart className="w-4 h-4 text-[#581825]" />
                <span className="text-[10px] uppercase font-medium">Wishlist</span>
              </div>
              <div className="flex flex-col items-center space-y-1 text-gray-600 border-x border-[#E8E0D5]/60 px-2">
                <Truck className="w-4 h-4 text-[#581825]" />
                <span className="text-[10px] uppercase font-medium">Free Shipping</span>
                <span className="text-[9px] text-gray-400">on orders over $50</span>
              </div>
              <div className="flex flex-col items-center space-y-1 text-gray-600">
                <RotateCcw className="w-4 h-4 text-[#581825]" />
                <span className="text-[10px] uppercase font-medium">Easy Returns</span>
                <span className="text-[9px] text-gray-400">within 30 days</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabs section */}
        <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 border border-[#E8E0D5]/70 shadow-sm space-y-6">
          <div className="flex items-center space-x-8 border-b border-[#E8E0D5]">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors relative ${
                activeTab === 'description' ? 'text-[#581825]' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Description
              {activeTab === 'description' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#581825]" />}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors relative ${
                activeTab === 'reviews' ? 'text-[#581825]' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Reviews ({product.reviewsCount})
              {activeTab === 'reviews' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#581825]" />}
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors relative ${
                activeTab === 'shipping' ? 'text-[#581825]' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Shipping & Returns
              {activeTab === 'shipping' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#581825]" />}
            </button>
          </div>

          <div className="pt-2">
            {activeTab === 'description' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  <p>
                    Experience the perfect blend of color, comfort and care. Our Velvet Matte Lip Color is designed to give you rich, buildable coverage with a smooth, lightweight feel. The formula is infused with nourishing ingredients to keep your lips hydrated and looking healthy, all day long.
                  </p>
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#581825]" />
                      <span>Long-lasting matte finish without drying lips</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#581825]" />
                      <span>Moisturizing formula with natural plant oils</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#581825]" />
                      <span>Lightweight & comfortable daily wear</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#581825]" />
                      <span>Suitable for all skin types and tones</span>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-5 bg-[#FAF6F0] p-6 rounded-xl border border-[#E8E0D5] flex flex-col justify-center space-y-3">
                  <h3 className="font-serif text-base text-gray-900">Beauty with Purpose</h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Cruelty-free &nbsp;|&nbsp; Paraben-free &nbsp;|&nbsp; Vegan
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4 text-xs text-gray-600 font-light">
                <p className="font-semibold text-gray-900">Customer Feedback ({product.reviewsCount} reviews)</p>
                <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E8E0D5] space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-[#581825]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current stroke-none" />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-800">"Absolute favorite!"</span>
                  </div>
                  <p className="text-gray-500">Amazing texture and stays on for hours without feeling dry. Highly recommended!</p>
                  <span className="text-[10px] text-gray-400 block pt-1">— Verified Buyer</span>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-3 text-xs text-gray-600 font-light leading-relaxed">
                <p><strong className="text-gray-800">Shipping:</strong> Free standard shipping on all orders over $50. Delivered within 3-5 business days.</p>
                <p><strong className="text-gray-800">Returns:</strong> Hassle-free returns within 30 days of purchase.</p>
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 tracking-tight">
              You May Also Like
            </h2>
            <Link 
              href="/shop" 
              className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gray-700 hover:text-[#581825] transition-colors group"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {curatedProducts.map((item) => (
              <div
                key={item.id}
                className="group bg-[#FDFBF7] rounded-2xl p-3.5 border border-[#E8E0D5]/60 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-[#F5EFE6]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <button
                      type="button"
                      aria-label="Add to Wishlist"
                      className="absolute top-2.5 right-2.5 p-1.5 bg-white/80 backdrop-blur-md rounded-full text-gray-700 hover:text-[#581825] hover:bg-white transition-colors shadow-sm"
                    >
                      <Heart className="w-3.5 h-3.5 stroke-[1.8]" />
                    </button>
                  </div>

                  <div className="space-y-0.5 mb-1.5">
                    <span className="text-[9px] uppercase tracking-widest font-semibold text-gray-500 block">
                      {item.brand}
                    </span>
                    <Link href={`/product/${item.slug}`}>
                      <h3 className="text-xs font-serif font-semibold text-gray-900 hover:text-[#581825] transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="flex items-center space-x-1 mb-1.5">
                    <div className="flex text-[#581825]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-current stroke-none" />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-light">
                      ({item.reviewsCount})
                    </span>
                  </div>

                  <div className="files-baseline flex items-baseline space-x-1.5 mb-3">
                    <span className="text-xs font-bold text-[#581825]">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-[11px] text-gray-400 line-through font-light">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <button
                    type="button"
                    className="w-full bg-[#581825] hover:bg-[#43121c] text-white text-[10px] font-semibold uppercase tracking-wider py-2 rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-sm"
                  >
                    <ShoppingBag className="w-3 h-3 stroke-[2]" />
                    <span>ADD</span>
                  </button>

                  <Link
                    href={`/product/${item.slug}`}
                    className="w-full bg-transparent hover:bg-[#581825]/5 text-[#581825] border border-[#581825]/40 text-[10px] font-semibold uppercase tracking-wider py-2 rounded-lg transition-colors flex items-center justify-center space-x-1 text-center"
                  >
                    <Eye className="w-3 h-3 stroke-[2]" />
                    <span>VIEW</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}