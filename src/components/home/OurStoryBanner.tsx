'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function OurStoryBanner() {
  return (
    <section className="bg-[#FAF6F0] pb-12 md:pb-16 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* গ্রিড কন্টেইনার (বামপাশে ফটো, ডানপাশে টেক্সট কার্ড) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* বামপাশের ইমেজ কার্ড */}
          <div className="lg:col-span-5 relative w-full h-[240px] sm:h-[280px] lg:h-auto min-h-[260px] rounded-2xl overflow-hidden border border-[#E8E0D5]/60 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop"
              alt="Lumina Beauty Essentials"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          {/* ডানপাশের টেক্সট ইনফো কার্ড */}
          <div className="lg:col-span-7 bg-[#F5EFE6] rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col justify-center items-start border border-[#E8E0D5]/60 shadow-sm space-y-4">
            
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gray-600 block">
              OUR STORY
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-normal tracking-tight">
              Beauty Beyond The Surface
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed max-w-lg">
              Thoughtfully selected essentials for the way you live, dress and express yourself.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#581825] hover:bg-[#43121c] rounded-md transition-colors duration-200 shadow-sm group"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}