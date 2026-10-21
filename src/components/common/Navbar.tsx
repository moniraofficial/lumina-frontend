'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Shop', href: '/shop' },
    { name: 'Makeup', href: '/makeup' },
    { name: 'Skincare', href: '/skincare' },
    { name: 'Fashion', href: '/fashion' },
    { name: 'Best Sellers', href: '/best-sellers' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E8E0D5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ১. লোগো (LUMINA) */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-[#4A1525] uppercase font-semibold"
            >
              LUMINA
            </Link>
          </div>

          {/* ২. নেভিগেশন লিংকসমূহ (Desktop Navigation) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#581825] transition-colors duration-200 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#581825] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ৩. ডানপাশের অ্যাকশন আইকন ও লগইন/রেজিস্টার বাটন */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* সার্চ বাটন */}
            <button 
              type="button" 
              className="text-gray-700 hover:text-[#581825] transition-colors p-1"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* ফেভারিট / উইশলিস্ট বাটন */}
            <Link 
              href="/wishlist" 
              className="text-gray-700 hover:text-[#581825] transition-colors p-1 relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
            </Link>

            {/* কার্ট আইকন (উইথ ব্যাজ কাউন্টার) */}
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-[#581825] transition-colors p-1 relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute -top-1 -right-1 bg-[#581825] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* সেপারেটর ডিভিয়াডার */}
            <div className="h-4 w-[1px] bg-gray-300 hidden sm:block" />

            {/* ৪. লগইন ও রেজিস্টার বাটন */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="/login"
                className="text-sm font-medium text-[#581825] hover:text-[#3d101a] px-3 py-1.5 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium text-white bg-[#581825] hover:bg-[#43121c] px-4 py-2 rounded-md transition-colors shadow-sm"
              >
                Register
              </Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}