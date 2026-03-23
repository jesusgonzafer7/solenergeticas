import Hero from "@/components/sections/home/Hero";
import HeroCarousel from "@/components/sections/home/HeroCarousel";
import LocationSection from "@/components/sections/home/LocationSection";
import Metrics from "@/components/sections/home/Metrics";
import Testimonials from "@/components/sections/home/Testimonials";
import TarifasSection from "@/components/sections/home/TarifasSection";

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