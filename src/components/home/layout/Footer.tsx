'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D0A11] text-[#E8E0D5] pt-14 pb-10 border-t border-[#3B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12">
          
          {/* 1. Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-serif tracking-[0.25em] font-normal text-white uppercase">
                LUMINA
              </span>
            </Link>
            <p className="text-xs text-[#C5B8AA] font-light leading-relaxed max-w-sm">
              Fashion, beauty and everything that makes you feel like you.
            </p>
            <p className="text-[11px] text-[#A09282] font-light pt-2">
              © 2026 Lumina. All rights reserved.
            </p>
          </div>

          {/* 2. SHOP Column */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              SHOP
            </h3>
            <ul className="space-y-2 text-xs font-light text-[#C5B8AA]">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/category/makeup" className="hover:text-white transition-colors">
                  Makeup
                </Link>
              </li>
              <li>
                <Link href="/category/skincare" className="hover:text-white transition-colors">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="/category/fashion" className="hover:text-white transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=best-sellers" className="hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. HELP Column */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              HELP
            </h3>
            <ul className="space-y-2 text-xs font-light text-[#C5B8AA]">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. ABOUT Column */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              ABOUT
            </h3>
            <ul className="space-y-2 text-xs font-light text-[#C5B8AA]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. FOLLOW (Social Icons using Inline SVG) */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              FOLLOW
            </h3>
            <div className="flex items-center space-x-4 pt-1">
              
              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#C5B8AA] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#C5B8AA] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* Pinterest Icon */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#C5B8AA] hover:text-white transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}