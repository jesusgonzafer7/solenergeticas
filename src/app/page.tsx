import Hero from "@/components/sections/home/Hero";
import HeroCarousel from "@/components/sections/home/HeroCarousel";
import LocationSection from "@/components/sections/home/LocationSection";
import Metrics from "@/components/sections/home/Metrics";
import Testimonials from "@/components/sections/home/Testimonials";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            {/* 1. Título y Bienvenida */}
            <Hero />

            {/* 2. Bloque del Carrusel */}
            <div className="relative w-full">
                <HeroCarousel />
            </div>

            {/* 3. Bloque de Botones */}
            <div className="py-10 bg-white">
                <Container>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Button size="lg" className="px-12 w-full sm:w-auto shadow-xl">
                            Solicitar presupuesto
                        </Button>
                        <Button size="lg" variant="outline" className="px-12 w-full sm:w-auto">
                            Conocer más
                        </Button>
                    </div>
                </Container>
            </div>

            {/* 4. Resto de secciones */}
            <Testimonials />
            <Metrics />
            <LocationSection />
        </main>
    );
}