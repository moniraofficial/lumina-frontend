'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="bg-[#FAF6F0] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* মেইন ব্যানার কন্টেইনার */}
        <div className="bg-[#F5EFE6] rounded-2xl overflow-hidden border border-[#E8E0D5]/60 grid grid-cols-1 lg:grid-cols-12 items-center shadow-sm">
          
          {/* বামপাশের ইমেজ সেকশন */}
          <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[320px] lg:h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop"
              alt="Lumina Luxury Skincare Collection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* ডানপাশের টেক্সট ও বাটন সেকশন */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-4 text-left">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gray-600 block">
              JUST IN
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-normal tracking-tight">
              New, Noticed, Yours.
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed max-w-md">
              Discover the latest additions to our carefully curated collection designed for your everyday glow.
            </p>

            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#581825] hover:bg-[#43121c] rounded-md transition-colors duration-200 shadow-sm group"
              >
                <span>SHOP NEW ARRIVALS</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}