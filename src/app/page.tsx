import Hero from "@/components/sections/home/Hero";
import LocationSection from "@/components/sections/home/LocationSection";
import Metrics from "@/components/sections/home/Metrics";
import Testimonials from "@/components/sections/home/Testimonials";

export default function Home() {
    return (
        <main>
            <Hero />
            <Testimonials/>
            <Metrics/>
            <LocationSection/>
        </main>
    );
}
