'use client';

import React, { useState } from 'react';
import { Search, RotateCcw, ChevronDown, ChevronUp, Star } from 'lucide-react';

export default function FilterSidebar() {
  const [openSections, setOpenSections] = useState({
    category: true,
    brand: true,
    price: true,
    availability: true,
    rating: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="w-full bg-[#FDFBF7] rounded-2xl p-5 border border-[#E8E0D5]/70 space-y-6 shadow-sm">
      
      {/* ফিল্টার হেডার & রিসেট */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E0D5]/60">
        <h2 className="text-lg font-serif font-medium text-gray-900">Filter</h2>
        <button
          type="button"
          className="inline-flex items-center text-xs text-gray-500 hover:text-[#581825] transition-colors"
        >
          <RotateCcw className="w-3 h-3 mr-1" />
          <span>Reset All</span>
        </button>
      </div>

      {/* সার্চ ইনপুট */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider font-semibold text-gray-700 block">
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border border-[#E8E0D5] focus:outline-none focus:ring-1 focus:ring-[#581825] text-gray-800 placeholder-gray-400"
          />
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* ১. ক্যাটাগরি ফিল্টার */}
      <div className="border-b border-[#E8E0D5]/60 pb-4">
        <button
          onClick={() => toggleSection('category')}
          className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-800 py-1"
        >
          <span>Category</span>
          {openSections.category ? <ChevronUp className="w-3.5 h-3.5 text-gray-500" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
        </button>
        {openSections.category && (
          <div className="mt-3 space-y-2 text-xs text-gray-600">
            {[
              { label: 'Makeup', count: 24 },
              { label: 'Skincare', count: 18 },
              { label: 'Fashion', count: 12 },
              { label: 'Beauty Tools', count: 8 },
            ].map((cat, idx) => (
              <label key={idx} className="flex items-center space-x-2.5 cursor-pointer hover:text-gray-900">
                <input type="checkbox" className="rounded border-gray-300 text-[#581825] focus:ring-[#581825]" />
                <span className="flex-1">{cat.label}</span>
                <span className="text-[10px] text-gray-400">({cat.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ২. ব্র্যান্ড ফিল্টার */}
      <div className="border-b border-[#E8E0D5]/60 pb-4">
        <button
          onClick={() => toggleSection('brand')}
          className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-800 py-1"
        >
          <span>Brand</span>
          {openSections.brand ? <ChevronUp className="w-3.5 h-3.5 text-gray-500" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
        </button>
        {openSections.brand && (
          <div className="mt-3 space-y-2 text-xs text-gray-600">
            {[
              { label: 'Lumina Beauty', count: 32 },
              { label: 'Glow Botanica', count: 15 },
              { label: 'Velvet & Rose', count: 8 },
              { label: 'Pure Aura', count: 5 },
            ].map((brand, idx) => (
              <label key={idx} className="flex items-center space-x-2.5 cursor-pointer hover:text-gray-900">
                <input type="checkbox" className="rounded border-gray-300 text-[#581825] focus:ring-[#581825]" />
                <span className="flex-1">{brand.label}</span>
                <span className="text-[10px] text-gray-400">({brand.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ৩. প্রাইস রেঞ্জ ফিল্টার */}
      <div className="border-b border-[#E8E0D5]/60 pb-4">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-800 py-1"
        >
          <span>Price Range</span>
          {openSections.price ? <ChevronUp className="w-3.5 h-3.5 text-gray-500" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
        </button>
        {openSections.price && (
          <div className="mt-3 space-y-3">
            <div className="relative pt-1">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="100"
                className="w-full accent-[#581825] bg-gray-200 h-1 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="text-[11px] text-gray-500 font-light">
              $0 — $100
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="$0"
                className="w-1/2 p-2 text-xs bg-white rounded border border-[#E8E0D5] text-center"
              />
              <span className="text-gray-400">-</span>
              <input
                type="text"
                placeholder="$100"
                className="w-1/2 p-2 text-xs bg-white rounded border border-[#E8E0D5] text-center"
              />
            </div>
          </div>
        )}
      </div>

      {/* ৪. অ্যাভেলেবিলিটি */}
      <div className="border-b border-[#E8E0D5]/60 pb-4">
        <button
          onClick={() => toggleSection('availability')}
          className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-800 py-1"
        >
          <span>Availability</span>
          {openSections.availability ? <ChevronUp className="w-3.5 h-3.5 text-gray-500" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
        </button>
        {openSections.availability && (
          <div className="mt-3 space-y-2 text-xs text-gray-600">
            <label className="flex items-center space-x-2.5 cursor-pointer hover:text-gray-900">
              <input type="checkbox" className="rounded border-gray-300 text-[#581825] focus:ring-[#581825]" defaultChecked />
              <span className="flex-1">In Stock</span>
              <span className="text-[10px] text-gray-400">(52)</span>
            </label>
            <label className="flex items-center space-x-2.5 cursor-pointer hover:text-gray-900">
              <input type="checkbox" className="rounded border-gray-300 text-[#581825] focus:ring-[#581825]" />
              <span className="flex-1">Out of Stock</span>
              <span className="text-[10px] text-gray-400">(4)</span>
            </label>
          </div>
        )}
      </div>

      {/* ৫. রেটিং ফিল্টার */}
      <div className="pb-2">
        <button
          onClick={() => toggleSection('rating')}
          className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-800 py-1"
        >
          <span>Rating</span>
          {openSections.rating ? <ChevronUp className="w-3.5 h-3.5 text-gray-500" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
        </button>
        {openSections.rating && (
          <div className="mt-3 space-y-2 text-xs text-gray-600">
            {[5, 4, 3].map((star) => (
              <label key={star} className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
                <input type="radio" name="rating" className="text-[#581825] focus:ring-[#581825]" />
                <div className="flex text-[#581825]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < star ? 'fill-current' : 'text-gray-300 stroke-current fill-none'}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-gray-600 ml-1">{star} & Up</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ফিল্টার বাটন */}
      <button
        type="button"
        className="w-full bg-[#581825] hover:bg-[#43121c] text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-lg transition-colors shadow-sm"
      >
        APPLY FILTERS
      </button>

    </aside>
  );
}