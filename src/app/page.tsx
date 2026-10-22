import CategorySection from "@/components/home/CategorySection";
import HeroSection from "@/components/home/HeroSection";
import { Cat } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
    <HeroSection />
    <CategorySection />
    </main>


  );
}
