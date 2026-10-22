'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="bg-[#FAF6F0] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* মেইন লাক্সারি বারগন্ডি ব্যানার কন্টেইনার */}
        <div className="bg-[#581825] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-md relative border border-[#581825]">
          
          {/* বামপাশের টেক্সট সেকশন */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-5 text-left z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF6F0] font-normal tracking-wide leading-tight">
              A LITTLE LUXURY <br />
              FOR EVERY DAY
            </h2>

            <p className="text-xs sm:text-sm text-[#E8E0D5] font-light leading-relaxed max-w-md">
              Curated beauty and fashion essentials for your everyday rituals.
            </p>

            <div className="pt-3">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#581825] bg-[#FAF6F0] hover:bg-[#F5EFE6] rounded-md transition-colors duration-200 shadow-sm group"
              >
                <span>SHOP THE COLLECTION</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ডানপাশের প্রোডাক্ট ইমেজ সেকশন */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[340px] lg:h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop"
              alt="Lumina Luxury Beauty & Fashion Essentials"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* ডার্ক স্মুথ ব্লেন্ডিং গ্র্যাডিয়েন্ট */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#581825] via-transparent to-transparent opacity-80 lg:opacity-100 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}