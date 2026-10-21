'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* বামপাশের টেক্সট ও কল-টু-অ্যাকশন সেকশন */}
          <div className="lg:col-span-5 z-10 space-y-6 text-center lg:text-left">
            
            {/* সাব-টাইটেল */}
            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#581825]">
              New Collection 2026
            </span>

            {/* মূল হেডিং */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.15] font-normal tracking-tight">
              YOUR BEAUTY. <br className="hidden sm:inline" />
              <span className=" font-serif">YOUR STATEMENT.</span>
            </h1>

            {/* সংক্ষিপ্ত বিবরণ */}
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
              Curated fashion and beauty essentials by <strong className="font-semibold text-gray-800">Lumina</strong>, designed for your everyday expression.
            </p>

            {/* রাউন্ডেড শেপের বাটনসমূহ */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#581825] hover:bg-[#43121c] rounded-md transition-colors duration-200 shadow-sm group"
              >
                Shop New Arrivals
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/category/beauty"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#581825] border border-[#581825]/40 hover:bg-[#581825] hover:text-white rounded-md transition-colors duration-200"
              >
                Explore Beauty
              </Link>
            </div>
          </div>

          {/* ডানপাশের প্রোডাক্ট ইমেজ */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[650px] aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/10] overflow-hidden rounded-2xl shadow-xl border border-[#E8E0D5]/50">
              
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop"
                alt="Lumina Beauty Collection Essentials"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />

              {/* ব্যাকগ্রাউন্ডের সাথে মেলানোর জন্য গ্র্যাডিয়েন্ট ওভারলে */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}