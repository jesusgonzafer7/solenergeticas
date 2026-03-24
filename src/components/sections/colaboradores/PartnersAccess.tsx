"use client";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function PartnersAccess() {
    return (
        // Degradado suave de blanco a gris para conectar secciones
        <Section className="bg-gradient-to-b from-white to-[#E5E7EB] pt-32 pb-16">
            <Container>
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase">
                        Alianzas Estratégicas
                    </span>
                    {/* Título AJUSTADO: Un poco más pequeño, pero EXTRA NEGRITA, ITÁLICA */}
                    <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter italic leading-none">
                        ¿Quieres colaborar?
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                        Impulsamos el cambio energético en Galicia a través de una red sólida de profesionales. Únete a SolEnergéticas y crece con nosotros.
                    </p>
                    <div className="pt-6">
                        <Link href="/nuevoColab">
                            <Button className="bg-primary hover:bg-accent text-white px-12 py-5 rounded-full shadow-2xl transition-all transform hover:scale-105 font-bold uppercase tracking-widest text-xs border-b-4 border-black/20">
                                Unirse a la red
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
}