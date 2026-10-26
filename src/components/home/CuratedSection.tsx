// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Heart, Star, ShoppingBag, ArrowRight } from 'lucide-react';
// import { curatedProducts } from '@/data/products';

// export default function CuratedSection() {
//   return (
//     <section className="bg-[#FAF6F0] py-12 md:py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* হেডার ও ভিউ অল বাটন */}
//         <div className="flex items-center justify-between mb-8 md:mb-10">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-normal tracking-tight">
//             Curated For You
//           </h2>
//           <Link 
//             href="/shop" 
//             className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gray-700 hover:text-[#581825] transition-colors group"
//           >
//             <span>VIEW ALL</span>
//             <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>
//         </div>

//         {/* ৪টি প্রোডাক্ট গ্রিড */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {curatedProducts.map((product) => (
//             <div
//               key={product.id}
//               className="group bg-[#FDFBF7] rounded-2xl p-4 border border-[#E8E0D5]/60 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               <div>
//                 {/* প্রোডাক্ট ইমেজ ও উইশলিস্ট বাটন */}
//                 <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-[#F5EFE6]">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                     className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
//                   />
                  
//                   {/* হার্ট/উইশলিস্ট আইকন */}
//                   <button
//                     type="button"
//                     aria-label="Add to Wishlist"
//                     className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-md rounded-full text-gray-700 hover:text-[#581825] hover:bg-white transition-colors shadow-sm"
//                   >
//                     <Heart className="w-4 h-4 stroke-[1.8]" />
//                   </button>
//                 </div>

//                 {/* ব্র্যান্ড ও প্রোডাক্টের নাম */}
//                 <div className="space-y-1 mb-2">
//                   <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500 block">
//                     {product.brand}
//                   </span>
//                   <Link href={`/product/${product.slug}`}>
//                     <h3 className="text-sm font-serif font-semibold text-gray-900 hover:text-[#581825] transition-colors line-clamp-1">
//                       {product.name}
//                     </h3>
//                   </Link>
//                 </div>

//                 {/* স্টার রেটিং ও রিভিউ সংখ্যা */}
//                 <div className="flex items-center space-x-1 mb-2">
//                   <div className="flex text-[#581825]">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-3 h-3 fill-current stroke-none" />
//                     ))}
//                   </div>
//                   <span className="text-[11px] text-gray-400 font-light">
//                     ({product.reviewsCount})
//                   </span>
//                 </div>

//                 {/* প্রাইসিং */}
//                 <div className="flex items-baseline space-x-2 mb-4">
//                   <span className="text-sm font-bold text-[#581825]">
//                     ${product.price.toFixed(2)}
//                   </span>
//                   {product.originalPrice && (
//                     <span className="text-xs text-gray-400 line-through font-light">
//                       ${product.originalPrice.toFixed(2)}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* QUICK ADD বাটন */}
//               <button
//                 type="button"
//                 className="w-full bg-[#581825] hover:bg-[#43121c] text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
//               >
//                 <ShoppingBag className="w-3.5 h-3.5 stroke-[2]" />
//                 <span>QUICK ADD</span>
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Star, ShoppingBag, ArrowRight, Eye } from 'lucide-react';
import { curatedProducts } from '@/data/products';

export default function CuratedSection() {
  return (
    <section className="bg-[#FAF6F0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার ও ভিউ অল বাটন */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 font-normal tracking-tight">
            Curated For You
          </h2>
          <Link 
            href="/shop" 
            className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gray-700 hover:text-[#581825] transition-colors group"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ৪টি প্রোডাক্ট গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {curatedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FDFBF7] rounded-2xl p-4 border border-[#E8E0D5]/60 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* প্রোডাক্ট ইমেজ ও উইশলিস্ট বাটন */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-[#F5EFE6]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* হার্ট/উইশলিস্ট আইকন */}
                  <button
                    type="button"
                    aria-label="Add to Wishlist"
                    className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-md rounded-full text-gray-700 hover:text-[#581825] hover:bg-white transition-colors shadow-sm"
                  >
                    <Heart className="w-4 h-4 stroke-[1.8]" />
                  </button>
                </div>

                {/* ব্র্যান্ড ও প্রোডাক্টের নাম */}
                <div className="space-y-1 mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500 block">
                    {product.brand}
                  </span>
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-sm font-serif font-semibold text-gray-900 hover:text-[#581825] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                </div>

                {/* স্টার রেটিং ও রিভিউ সংখ্যা */}
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

                {/* প্রাইসিং */}
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-sm font-bold text-[#581825]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through font-light">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* পাশাপাশি বাটন দুটি (QUICK ADD এবং VIEW DETAILS) */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  className="w-full bg-[#581825] hover:bg-[#43121c] text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-sm"
                >
                  <ShoppingBag className="w-3 h-3 stroke-[2]" />
                  <span>ADD</span>
                </button>

                <Link
                  href={`/product/${product.slug}`}
                  className="w-full bg-transparent hover:bg-[#581825]/5 text-[#581825] border border-[#581825]/40 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1 text-center"
                >
                  <Eye className="w-3 h-3 stroke-[2]" />
                  <span>VIEW</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}