'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { lovedProducts } from '@/data/products';

export default function LovedSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#FAF6F0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার ও কন্ট্রোল বাটন */}
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-normal tracking-tight">
              Loved By Everyone
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
              The essentials our customers keep coming back to.
            </p>
          </div>

          {/* নেভিগেশন অ্যারো বাটন */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-2.5 rounded-full border border-gray-300 text-gray-700 bg-white/60 hover:bg-white hover:border-gray-400 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-4 h-4 stroke-[1.8]" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-2.5 rounded-full border border-gray-300 text-gray-700 bg-white/60 hover:bg-white hover:border-gray-400 transition-colors shadow-sm"
            >
              <ChevronRight className="w-4 h-4 stroke-[1.8]" />
            </button>
          </div>
        </div>

        {/* প্রোডাক্ট স্লাইডার */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {lovedProducts.map((product) => (
            <div
              key={product.id}
              className="group min-w-[230px] sm:min-w-[250px] max-w-[250px] bg-[#FDFBF7] rounded-2xl p-4 border border-[#E8E0D5]/60 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0"
            >
              <div>
                {/* ইমেজ কন্টেইনার */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-[#F5EFE6]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 230px, 250px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  <button
                    type="button"
                    aria-label="Add to Wishlist"
                    className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-md rounded-full text-gray-700 hover:text-[#581825] hover:bg-white transition-colors shadow-sm"
                  >
                    <Heart className="w-4 h-4 stroke-[1.8]" />
                  </button>
                </div>

                {/* টেক্সট ইনফো */}
                <div className="space-y-0.5 mb-1.5">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500 block">
                    {product.brand}
                  </span>
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-sm font-serif font-semibold text-gray-900 hover:text-[#581825] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                </div>

                {/* স্টার রেটিং */}
                <div className="flex items-center space-x-1 mb-2">
                  <div className="flex text-[#581825]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current stroke-none" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-light">
                    ({product.reviewsCount})
                  </span>
                </div>

                {/* প্রাইস */}
                <div>
                  <span className="text-sm font-bold text-[#581825]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}