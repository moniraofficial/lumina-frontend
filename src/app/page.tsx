import BrandStorySection from "@/components/home/BrandStorySection";
import CategorySection from "@/components/home/CategorySection";
import CuratedSection from "@/components/home/CuratedSection";
import HeroSection from "@/components/home/HeroSection";
import LovedSection from "@/components/home/LovedSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import OurStoryBanner from "@/components/home/OurStoryBanner";
import PromoBanner from "@/components/home/PromoBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Cat } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
    <HeroSection />
    <CategorySection />
    <CuratedSection />
    <PromoBanner />
    <LovedSection />
    <BrandStorySection />
    <OurStoryBanner />
    <TestimonialsSection />
    <NewsletterSection />
    </main>


  );
}
