import AboutHero from "@/components/sections/about/AboutHero";
import ServicesSection from "@/components/sections/about/ServicesSection";
import LocationSection from "@/components/sections/home/LocationSection";

export default function SobreNosotrosPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Bloque 1: Texto e Imagen */}
            <AboutHero />

            {/* Bloque 2: Servicios (Fondo Gris + Desplegables) */}
            <ServicesSection />

            {/* Bloque 3: Mapa */}
            <div className="py-20">
                <LocationSection />
            </div>
        </main>
    );
}