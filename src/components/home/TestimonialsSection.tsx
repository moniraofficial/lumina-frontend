'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FAF6F0] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-normal tracking-tight">
            What They're Saying
          </h2>
        </div>

        {/* ৩টি রিভিউ কার্ডের গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 border border-[#E8E0D5]/60 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* স্টার রেটিং (গোল্ডেন/অরেঞ্জ স্টার) */}
                <div className="flex text-[#D97706] space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                  ))}
                </div>

                {/* রিভিউ টেক্সট */}
                <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed italic">
                  {review.comment}
                </p>
              </div>

              {/* কাস্টমার ইনফো */}
              <div className="space-y-0.5 pt-2 border-t border-[#E8E0D5]/40">
                <h3 className="text-xs font-semibold text-gray-900 tracking-wide">
                  {review.name}
                </h3>
                {review.verified && (
                  <span className="text-[10px] text-gray-400 font-light block">
                    Verified Purchase
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}