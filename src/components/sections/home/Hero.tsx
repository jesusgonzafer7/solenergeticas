// src/components/sections/home/Hero.tsx
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

export default function Hero() {
    return (
        <Section className="bg-linear-to-b from-surface to-white pt-16 pb-8 md:pt-24 md:pb-12">
            <Container>
                <div className="flex flex-col items-center text-center gap-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight whitespace-nowrap">
                        Ahorra en tu energía, <span className="text-accent">gana en tranquilidad.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-black max-w-2xl font-medium leading-relaxed">
                        Instalamos paneles solares de alta eficiencia para hogares y empresas.
                        Reduce tu factura desde el primer día con tecnología líder.
                    </p>
                </div>
            </Container>
        </Section>
    );
}