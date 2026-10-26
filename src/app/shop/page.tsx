'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Star, ShoppingBag, LayoutGrid, List, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { shopProducts } from '@/data/products';

export default function ShopPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* শপ পেজ হেডার & সর্টিং কন্ট্রোল */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ফিল্টার সাইডবার (৩ কলাম) */}
          <div className="lg:col-span-3">
            <FilterSidebar />
          </div>

          {/* প্রোডাক্ট গ্রিড এরিয়া (৯ কলাম) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* টপ বার: রেজাল্ট কাউন্ট, সর্ট ড্রপডাউন ও ভিউ টগল */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FDFBF7] p-4 rounded-xl border border-[#E8E0D5]/60 shadow-sm">
              <span className="text-xs text-gray-600 font-light">
                Showing <span className="font-semibold text-gray-900">1-12</span> of <span className="font-semibold text-gray-900">52</span> products
              </span>

              <div className="flex items-center space-x-4">
                {/* সর্ট ড্রপডাউন */}
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500 font-light">Sort by:</span>
                  <select className="text-xs bg-white border border-[#E8E0D5] rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#581825] text-gray-800">
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                  </select>
                </div>

                {/* ভিউ টগল আইকন */}
                <div className="flex items-center space-x-1 border-l border-[#E8E0D5] pl-3">
                  <button type="button" className="p-1.5 rounded text-[#581825] bg-[#FAF6F0]" aria-label="Grid view">
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button type="button" className="p-1.5 rounded text-gray-400 hover:text-gray-700" aria-label="List view">
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ৪-কলাম প্রোডাক্ট গ্রিড */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {shopProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-[#FDFBF7] rounded-2xl p-3.5 border border-[#E8E0D5]/60 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* প্রোডাক্ট ইমেজ, উইশলিস্ট ও ব্যাজ */}
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-[#F5EFE6]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* ব্যাজ (-25% / NEW) */}
                      {product.badge && (
                        <span
                          className={`absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white ${
                            product.badge === 'NEW' ? 'bg-[#581825]' : 'bg-[#581825]'
                          }`}
                        >
                          {product.badge}
                        </span>
                      )}

                      {/* উইশলিস্ট আইকন */}
                      <button
                        type="button"
                        aria-label="Add to Wishlist"
                        className="absolute top-2.5 right-2.5 p-1.5 bg-white/80 backdrop-blur-md rounded-full text-gray-700 hover:text-[#581825] hover:bg-white transition-colors shadow-sm"
                      >
                        <Heart className="w-3.5 h-3.5 stroke-[1.8]" />
                      </button>
                    </div>

                    {/* ব্র্যান্ড ও প্রোডাক্ট নেম */}
                    <div className="space-y-0.5 mb-1.5">
                      <span className="text-[9px] uppercase tracking-widest font-semibold text-gray-500 block">
                        {product.brand}
                      </span>
                      <Link href={`/product/${product.slug}`}>
                        <h3 className="text-xs font-serif font-semibold text-gray-900 hover:text-[#581825] transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
                    </div>

                    {/* রেটিং */}
                    <div className="flex items-center space-x-1 mb-1.5">
                      <div className="flex text-[#581825]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-current stroke-none" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 font-light">
                        ({product.reviewsCount})
                      </span>
                    </div>

                    {/* প্রাইসিং */}
                    <div className="flex items-baseline space-x-1.5 mb-3">
                      <span className="text-xs font-bold text-[#581825]">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[11px] text-gray-400 line-through font-light">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* পাশাপাশি বাটন দুটি (ADD এবং VIEW) */}
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <button
                      type="button"
                      className="w-full bg-[#581825] hover:bg-[#43121c] text-white text-[10px] font-semibold uppercase tracking-wider py-2 rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-sm"
                    >
                      <ShoppingBag className="w-3 h-3 stroke-[2]" />
                      <span>ADD</span>
                    </button>

                    <Link
                      href={`/product/${product.slug}`}
                      className="w-full bg-transparent hover:bg-[#581825]/5 text-[#581825] border border-[#581825]/40 text-[10px] font-semibold uppercase tracking-wider py-2 rounded-lg transition-colors flex items-center justify-center space-x-1 text-center"
                    >
                      <Eye className="w-3 h-3 stroke-[2]" />
                      <span>VIEW</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* পেজিনেশন (Pagination) */}
            <div className="flex items-center justify-center space-x-2 pt-6">
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-full bg-[#581825] text-white text-xs font-semibold flex items-center justify-center shadow-sm"
              >
                1
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-full text-gray-600 hover:bg-[#E8E0D5]/50 text-xs flex items-center justify-center transition-colors"
              >
                2
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-full text-gray-600 hover:bg-[#E8E0D5]/50 text-xs flex items-center justify-center transition-colors"
              >
                3
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-full text-gray-600 hover:bg-[#E8E0D5]/50 text-xs flex items-center justify-center transition-colors"
              >
                4
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-full text-gray-600 hover:bg-[#E8E0D5]/50 text-xs flex items-center justify-center transition-colors"
              >
                5
              </button>
              <button
                type="button"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}