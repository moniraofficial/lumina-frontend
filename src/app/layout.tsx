import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/Providers"; // আমরা যে আলাদা Providers কম্পোনেন্ট বানিয়েছিলাম সেটি ইমপোর্ট করা হলো
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina - Fashion & Cosmetics",
  description: "A modern single-vendor e-commerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  
        <Providers>

          <Navbar /> 
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
