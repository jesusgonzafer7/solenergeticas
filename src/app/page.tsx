import Hero from "@/components/sections/home/Hero";
import HeroCarousel from "@/components/sections/home/HeroCarousel";
import LocationSection from "@/components/sections/home/LocationSection";
import Metrics from "@/components/sections/home/Metrics";
import Testimonials from "@/components/sections/home/Testimonials";
import TarifaComparison from "@/components/ui/TarifaGrafica"; // El bloque nuevo
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Link from "next/link";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-white">
            <Hero />
            <HeroCarousel />

            {/* Bloque de Botones */}
            <div className="py-10">
                <Container>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="px-12 w-full shadow-xl">Solicitar presupuesto</Button>
                        </Link>
                        <Link href="/sobre-nosotros" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="px-12 w-full">Conocer más</Button>
                        </Link>
                    </div>
                </Container>
            </div>

            {/* Los cuadros azules de la imagen */}
            <TarifaComparison />

            {/* Estas secciones ahora volverán a verse bien gracias al Section.tsx recuperado */}
            <Testimonials />
            <Metrics />
            <LocationSection />
        </main>
    );
}