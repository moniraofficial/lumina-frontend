// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { 
//   Trash2, 
//   ChevronRight, 
//   ArrowLeft, 
//   ShoppingBag, 
//   Heart, 
//   Star, 
//   Truck, 
//   RotateCcw, 
//   ShieldCheck, 
//   Check 
// } from 'lucide-react';
// import { curatedProducts } from '@/data/products';

// // কার্ট আইটেমগুলোর টাইপ ও মক ডাটা
// interface CartItem {
//   id: number;
//   name: string;
//   brand: string;
//   price: number;
//   originalPrice: number;
//   discount: string;
//   shade: string;
//   size: string;
//   image: string;
//   quantity: number;
// }

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     {
//       id: 1,
//       name: 'Velvet Matte Lip Color',
//       brand: 'LUMIÈRE BEAUTY',
//       price: 24.00,
//       originalPrice: 32.00,
//       discount: '-25%',
//       shade: 'Rosewood',
//       size: '3.5 g',
//       image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop',
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: 'Hydrating Face Cream',
//       brand: 'LUMIÈRE SKINCARE',
//       price: 28.00,
//       originalPrice: 36.00,
//       discount: '-22%',
//       shade: 'N/A',
//       size: '50 ml',
//       image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=800&auto=format&fit=crop',
//       quantity: 1,
//     },
//     {
//       id: 3,
//       name: 'Eyeshadow Palette',
//       brand: 'LUMIÈRE BEAUTY',
//       price: 36.00,
//       originalPrice: 66.00,
//       discount: '-45%',
//       shade: 'Soft Glam',
//       size: '12 g',
//       image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
//       quantity: 1,
//     },
//     {
//       id: 4,
//       name: 'Floral Eau de Parfum',
//       brand: 'LUMIÈRE FRAGRANCE',
//       price: 42.00,
//       originalPrice: 65.00,
//       discount: '-36%',
//       shade: 'N/A',
//       size: '50 ml',
//       image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop',
//       quantity: 1,
//     },
//   ]);

//   // কোয়ান্টিটি বাড়ানো বা কমানো
//   const updateQuantity = (id: number, delta: number) => {
//     setCartItems(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
//       )
//     );
//   };

//   // নির্দিষ্ট আইটেম রিমুভ করা
//   const removeItem = (id: number) => {
//     setCartItems(prev => prev.filter(item => item.id !== id));
//   };

//   // সাবটোটাল ও টোটাল ক্যালকুলেশন
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const originalTotal = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
//   const totalDiscount = originalTotal - subtotal;
//   const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5; // $50 এর বেশি হলে ফ্রি শিপিং
//   const finalTotal = subtotal; // ফিগমা ডিজাইন অনুযায়ী সাবটোটাল বা ডিসকাউন্টেড টোটাল

//   return (
//     <div className="bg-[#FAF6F0] min-h-screen py-8 md:py-12 text-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
//         {/* ১. ব্রেডক্রাম্ব ও হেডার */}
//         <div className="space-y-3">
//           <nav className="flex items-center space-x-2 text-xs text-gray-500 font-light">
//             <Link href="/" className="hover:text-[#581825] transition-colors">Home</Link>
//             <ChevronRight className="w-3 h-3 text-gray-400" />
//             <span className="text-gray-900 font-medium">Cart</span>
//           </nav>

//           <div>
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-gray-900 tracking-tight">
//               Your Cart
//             </h1>
//             <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
//               Review your items and proceed to checkout when you&apos;re ready.
//             </p>
//           </div>
//         </div>

//         {/* ২. মেইন গ্রিড (কার্ট আইটেমস ও অর্ডার সামারি) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* বাম পাশ: কার্ট আইটেম লিস্ট (৮ কলাম) */}
//           <div className="lg:col-span-8 space-y-4">
            
//             {/* সিলেক্ট অল ও রিমুভ বার */}
//             <div className="bg-[#FDFBF7] px-5 py-3.5 rounded-xl border border-[#E8E0D5]/70 flex items-center justify-between text-xs text-gray-600 shadow-sm">
//               <label className="flex items-center space-x-2.5 cursor-pointer">
//                 <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#581825] focus:ring-[#581825]" />
//                 <span className="font-semibold text-gray-800">Select All ({cartItems.length})</span>
//               </label>
//               <button 
//                 onClick={() => setCartItems([])}
//                 className="hover:text-[#581825] transition-colors font-medium text-gray-500"
//               >
//                 Remove Selected
//               </button>
//             </div>

//             {/* কার্ট আইটেম কার্ডসমূহ */}
//             {cartItems.length === 0 ? (
//               <div className="bg-[#FDFBF7] p-10 rounded-2xl border border-[#E8E0D5]/70 text-center space-y-4">
//                 <p className="text-sm text-gray-500 font-light">Your cart is currently empty.</p>
//                 <Link 
//                   href="/shop" 
//                   className="inline-block bg-[#581825] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl transition-colors hover:bg-[#43121c]"
//                 >
//                   Start Shopping
//                 </Link>
//               </div>
//             ) : (
//               cartItems.map((item) => (
//                 <div 
//                   key={item.id}
//                   className="bg-[#FDFBF7] p-4 sm:p-5 rounded-2xl border border-[#E8E0D5]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm transition-all hover:shadow-md"
//                 >
//                   <div className="flex items-center space-x-4 w-full sm:w-auto">
//                     <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#581825] focus:ring-[#581825]" />
                    
//                     <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#F5EFE6] flex-shrink-0 border border-[#E8E0D5]">
//                       <Image src={item.image} alt={item.name} fill className="object-cover object-center" />
//                       <span className="absolute top-1.5 left-1.5 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded text-white bg-[#581825]">
//                         {item.discount}
//                       </span>
//                     </div>

//                     <div className="space-y-1">
//                       <span className="text-[9px] uppercase tracking-widest font-semibold text-gray-400 block">
//                         {item.brand}
//                       </span>
//                       <h3 className="text-xs sm:text-sm font-serif font-semibold text-gray-900">
//                         {item.name}
//                       </h3>
//                       <p className="text-[11px] text-gray-500 font-light">
//                         {item.shade !== 'N/A' && `Shade: ${item.shade}  |  `}Size: {item.size}
//                       </p>
                      
//                       {/* মোবাইল ভিউ প্রাইস */}
//                       <div className="flex items-baseline space-x-2 sm:hidden pt-1">
//                         <span className="text-xs font-bold text-[#581825]">
//                           ${(item.price * item.quantity).toFixed(2)}
//                         </span>
//                         <span className="text-[10px] text-gray-400 line-through">
//                           ${(item.originalPrice * item.quantity).toFixed(2)}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* কোয়ান্টিটি ও ডেস্কটপ প্রাইস */}
//                   <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#E8E0D5]/60">
                    
//                     {/* কোয়ান্টিটি কাউন্টার */}
//                     <div className="flex items-center justify-between border border-[#E8E0D5] rounded-xl bg-white px-2.5 py-1.5 w-28 shadow-sm">
//                       <button
//                         onClick={() => updateQuantity(item.id, -1)}
//                         className="text-gray-500 hover:text-[#581825] font-bold text-xs px-1"
//                       >
//                         -
//                       </button>
//                       <span className="text-xs font-semibold text-gray-800">{item.quantity}</span>
//                       <button
//                         onClick={() => updateQuantity(item.id, 1)}
//                         className="text-gray-500 hover:text-[#581825] font-bold text-xs px-1"
//                       >
//                         +
//                       </button>
//                     </div>

//                     {/* প্রাইস (ডেস্কটপ) */}
//                     <div className="hidden sm:block text-right min-w-[70px]">
//                       <span className="text-xs sm:text-sm font-bold text-[#581825] block">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </span>
//                       <span className="text-[11px] text-gray-400 line-through font-light">
//                         ${(item.originalPrice * item.quantity).toFixed(2)}
//                       </span>
//                     </div>

//                     {/* ডিলিট বাটন */}
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="text-gray-400 hover:text-red-600 transition-colors p-1.5 rounded-lg hover:bg-red-50"
//                       title="Remove item"
//                     >
//                       <Trash2 className="w-4 h-4 stroke-[1.8]" />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             )}

//             {/* কন্টিনিউ শপিং লিংক */}
//             <div className="pt-2">
//               <Link 
//                 href="/shop" 
//                 className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gray-700 hover:text-[#581825] transition-colors group"
//               >
//                 <ArrowLeft className="w-3.5 h-3.5 mr-1.5 transition-transform duration-300 group-hover:-translate-x-1" />
//                 <span>Continue Shopping</span>
//               </Link>
//             </div>

//           </div>

//           {/* ডান পাশ: অর্ডার সামারি ও ট্রাস্ট ব্যাজ (৪ কলাম) */}
//           <div className="lg:col-span-4 space-y-6">
            
//             <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#E8E0D5]/70 shadow-sm space-y-5">
//               <h2 className="text-base font-serif font-semibold text-gray-900 border-b border-[#E8E0D5]/60 pb-3">
//                 Order Summary
//               </h2>

//               <div className="space-y-3 text-xs font-light text-gray-600">
//                 <div className="flex justify-between">
//                   <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
//                   <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-green-700">
//                   <span>Discount</span>
//                   <span className="font-semibold">-${totalDiscount.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between items-center pb-2 border-b border-[#E8E0D5]/60">
//                   <span>Shipping</span>
//                   <span className="font-semibold text-gray-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
//                 </div>
//                 <div className="flex justify-between text-sm font-bold text-gray-900 pt-1">
//                   <span>Total</span>
//                   <span className="text-[#581825] text-base">${finalTotal.toFixed(2)}</span>
//                 </div>
//                 <p className="text-[10px] text-gray-400 text-right">You save ${totalDiscount.toFixed(2)}</p>
//               </div>

//               {/* প্রসিড টু চেকআউট বাটন */}
//               <Link
//                 href="/checkout"
//                 className="w-full bg-[#581825] hover:bg-[#43121c] text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-sm text-center block"
//               >
//                 <span>Proceed to Checkout</span>
//                 <ChevronRight className="w-4 h-4 stroke-[2]" />
//               </Link>

//               {/* প্রমোকোড অ্যাকর্ডিয়ন ইনপুট */}
//               <div className="pt-2">
//                 <details className="group bg-[#FAF6F0] rounded-xl border border-[#E8E0D5] p-3">
//                   <summary className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-700 cursor-pointer list-none">
//                     <span>Have a promo code?</span>
//                     <ChevronRight className="w-3.5 h-3.5 text-gray-500 transition-transform group-open:rotate-90" />
//                   </summary>
//                   <div className="mt-3 flex gap-2 pt-2 border-t border-[#E8E0D5]/60">
//                     <input 
//                       type="text" 
//                       placeholder="Enter promo code" 
//                       className="flex-1 bg-white border border-[#E8E0D5] rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#581825]"
//                     />
//                     <button className="bg-[#581825] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#43121c] transition-colors">
//                       Apply
//                     </button>
//                   </div>
//                 </details>
//               </div>

//               {/* ট্রাস্ট ব্যাজেস */}
//               <div className="space-y-3 pt-4 border-t border-[#E8E0D5]/60 text-xs text-gray-600">
//                 <div className="flex items-center space-x-3">
//                   <Truck className="w-4 h-4 text-[#581825] flex-shrink-0" />
//                   <div>
//                     <p className="font-medium text-gray-800">Free Shipping</p>
//                     <p className="text-[10px] text-gray-400">on orders over $50</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <RotateCcw className="w-4 h-4 text-[#581825] flex-shrink-0" />
//                   <div>
//                     <p className="font-medium text-gray-800">Easy Returns</p>
//                     <p className="text-[10px] text-gray-400">within 30 days</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <ShieldCheck className="w-4 h-4 text-[#581825] flex-shrink-0" />
//                   <div>
//                     <p className="font-medium text-gray-800">Secure Payment</p>
//                     <p className="text-[10px] text-gray-400">100% protected</p>
//                   </div>
//                 </div>
//               </div>

//             </div>

//           </div>

//         </div>

//         {/* ৩. ইউ মে অলসো লাইক সেকশন */}
//         <div className="space-y-6 pt-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl sm:text-2xl font-serif font-normal text-gray-900 tracking-tight">
//               You May Also Like
//             </h2>
//             <div className="flex items-center space-x-2">
//               <button aria-label="Previous" className="p-1.5 rounded-full border border-[#E8E0D5] text-gray-500 hover:text-[#581825] hover:bg-white transition-colors">
//                 <ChevronRight className="w-4 h-4 rotate-180" />
//               </button>
//               <button aria-label="Next" className="p-1.5 rounded-full border border-[#E8E0D5] text-gray-500 hover:text-[#581825] hover:bg-white transition-colors">
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {curatedProducts.map((item) => (
//               <div
//                 key={item.id}
//                 className="group bg-[#FDFBF7] rounded-2xl p-3.5 border border-[#E8E0D5]/60 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 <div>
//                   <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-[#F5EFE6]">
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       fill
//                       sizes="(max-width: 640px) 100vw, 25vw"
//                       className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
//                     />
//                     <button
//                       type="button"
//                       aria-label="Add to Wishlist"
//                       className="absolute top-2.5 right-2.5 p-1.5 bg-white/80 backdrop-blur-md rounded-full text-gray-700 hover:text-[#581825] hover:bg-white transition-colors shadow-sm"
//                     >
//                       <Heart className="w-3.5 h-3.5 stroke-[1.8]" />
//                     </button>
//                   </div>

//                   <div className="space-y-0.5 mb-1.5">
//                     <span className="text-[9px] uppercase tracking-widest font-semibold text-gray-500 block">
//                       {item.brand}
//                     </span>
//                     <Link href={`/product/${item.slug}`}>
//                       <h3 className="text-xs font-serif font-semibold text-gray-900 hover:text-[#581825] transition-colors line-clamp-1">
//                         {item.name}
//                       </h3>
//                     </Link>
//                   </div>

//                   <div className="flex items-baseline space-x-1.5 mb-3">
//                     <span className="text-xs font-bold text-[#581825]">
//                       ${item.price.toFixed(2)}
//                     </span>
//                     {item.originalPrice && (
//                       <span className="text-[11px] text-gray-400 line-through font-light">
//                         ${item.originalPrice.toFixed(2)}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   className="w-full bg-[#581825] hover:bg-[#43121c] text-white text-[10px] font-semibold uppercase tracking-wider py-2 rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-sm"
//                 >
//                   <ShoppingBag className="w-3 h-3 stroke-[2]" />
//                   <span>Add to Cart</span>
//                 </button>
//               </div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Trash2, 
  ChevronRight, 
  ArrowLeft, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  ShoppingBag,
  Heart
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { curatedProducts } from '@/data/products';

export default function CartPage() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const originalTotal = cartItems.reduce((acc, item) => acc + (item.originalPrice || item.price) * item.quantity, 0);
  const totalDiscount = originalTotal - subtotal;
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5;
  const finalTotal = subtotal;

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-8 md:py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-3">
          <nav className="flex items-center space-x-2 text-xs text-gray-500 font-light">
            <Link href="/" className="hover:text-[#581825] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-medium">Cart</span>
          </nav>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-gray-900 tracking-tight">
              Your Cart
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
              Review your items and proceed to checkout when you&apos;re ready.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-[#FDFBF7] px-5 py-3.5 rounded-xl border border-[#E8E0D5]/70 flex items-center justify-between text-xs text-gray-600 shadow-sm">
              <span className="font-semibold text-gray-800">Items in Cart ({cartItems.length})</span>
              <button 
                onClick={clearCart}
                className="hover:text-[#581825] transition-colors font-medium text-gray-500"
              >
                Clear Cart
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="bg-[#FDFBF7] p-10 rounded-2xl border border-[#E8E0D5]/70 text-center space-y-4">
                <p className="text-sm text-gray-500 font-light">Your cart is currently empty.</p>
                <Link 
                  href="/shop" 
                  className="inline-block bg-[#581825] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl transition-colors hover:bg-[#43121c]"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-[#FDFBF7] p-4 sm:p-5 rounded-2xl border border-[#E8E0D5]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
                >
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#F5EFE6] flex-shrink-0 border border-[#E8E0D5]">
                      <Image src={item.image} alt={item.name} fill className="object-cover object-center" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest font-semibold text-gray-400 block">
                        {item.brand}
                      </span>
                      <h3 className="text-xs sm:text-sm font-serif font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-gray-500 font-light">
                        {item.shade && item.shade !== 'N/A' && `Shade: ${item.shade} | `}Size: {item.size}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#E8E0D5]/60">
                    <div className="flex items-center justify-between border border-[#E8E0D5] rounded-xl bg-white px-2.5 py-1.5 w-28 shadow-sm">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-gray-500 hover:text-[#581825] font-bold text-xs px-1"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-gray-500 hover:text-[#581825] font-bold text-xs px-1"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right min-w-[70px]">
                      <span className="text-xs sm:text-sm font-bold text-[#581825] block">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors p-1.5 rounded-lg hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4 stroke-[1.8]" />
                    </button>
                  </div>
                </div>
              ))
            )}

            <div className="pt-2">
              <Link 
                href="/shop" 
                className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gray-700 hover:text-[#581825] transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#E8E0D5]/70 shadow-sm space-y-5">
              <h2 className="text-base font-serif font-semibold text-gray-900 border-b border-[#E8E0D5]/60 pb-3">
                Order Summary
              </h2>

              <div className="space-y-3 text-xs font-light text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#E8E0D5]/60">
                  <span>Shipping</span>
                  <span className="font-semibold text-gray-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 pt-1">
                  <span>Total</span>
                  <span className="text-[#581825] text-base">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-[#581825] hover:bg-[#43121c] text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-sm text-center block"
              >
                <span>Proceed to Checkout</span>
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}