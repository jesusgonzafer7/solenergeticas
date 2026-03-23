import Hero from "@/components/sections/home/Hero";
import HeroCarousel from "@/components/sections/home/HeroCarousel";
import LocationSection from "@/components/sections/home/LocationSection";
import Metrics from "@/components/sections/home/Metrics";
import Testimonials from "@/components/sections/home/Testimonials";
import TarifaComparison from "@/components/ui/TarifaGrafica";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-white">
            <Hero />
            <HeroCarousel />
            <TarifasSection />
            <Testimonials />
            <Metrics />
            <LocationSection />
        </main>
    );
}