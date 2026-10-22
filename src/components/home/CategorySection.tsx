'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { categoriesData } from '@/data/categories';

export default function CategorySection() {
  return (
    <section className="bg-[#FAF6F0] py-12 md:py-16 border-t border-[#E8E0D5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-normal tracking-tight">
            Find Your Signature
          </h2>
        </div>

        {/* ক্যাটাগরি গ্রিড (৪টি কার্ড) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group bg-[#F5EFE6] rounded-2xl p-4 transition-all duration-300 hover:shadow-lg border border-[#E8E0D5]/50 flex flex-col justify-between"
            >
              {/* ইমেজ কন্টেইনার */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-200">
                <Image
                  src={category.image}
                  alt={`Lumina ${category.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* টেক্সট কন্টেন্ট */}
              <div className="space-y-1">
                <h3 className="text-base font-serif font-semibold text-gray-900 tracking-wider">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 font-light">
                  {category.subcategories}
                </p>
              </div>

              {/* এক্সপ্লোর বাটন লিংক */}
              <div className="pt-4 flex items-center text-xs font-semibold uppercase tracking-widest text-gray-800 group-hover:text-[#581825] transition-colors">
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}