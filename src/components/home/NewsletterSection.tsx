'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail('');
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F7EBE1] py-14 md:py-20 border-t border-[#E8E0D5]/60">
      
      {/* ব্যাকগ্রাউন্ডের কার্ভড লাইন প্যাটার্ন ইফেক্ট (SVG Decorative Background) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 160 C 200 300, 400 0, 800 160 C 1200 320, 1400 50, 1600 200"
            stroke="#D8B4A6"
            strokeWidth="1.5"
          />
          <path
            d="M-50 220 C 300 100, 600 320, 1000 100 C 1300 0, 1500 250, 1700 120"
            stroke="#E2C2B5"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-4">
        
        {/* হেডিং */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 font-normal tracking-tight">
          Stay in the Glow
        </h2>

        {/* সাবটাইটেল */}
        <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed max-w-md mx-auto">
          Get first access to new arrivals, beauty edits and exclusive offers.
        </p>

        {/* সাবস্ক্রিপশন ফরম */}
        <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* ইনপুট ফিল্ড */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-5 py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 bg-white/90 rounded-md border border-[#E8E0D5] focus:outline-none focus:ring-1 focus:ring-[#581825] focus:bg-white transition-all shadow-sm"
            />

            {/* JOIN US বাটন */}
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#581825] hover:bg-[#43121c] rounded-md transition-colors duration-200 shadow-sm shrink-0 group"
            >
              <span>JOIN US</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>
        </form>

      </div>
    </section>
  );
}