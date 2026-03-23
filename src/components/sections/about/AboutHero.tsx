"use client";

import Container from "@/components/layout/Container";
import StyledImageCard from "@/components/ui/StyledImageCard";

export default function AboutHero() {
    return (
        <section className="pt-24 pb-16 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Bloque de texto descriptivo */}
                    <div className="flex-1 bg-gray-100 p-8 md:p-12 rounded-sm shadow-sm border-l-4 border-accent">
                        <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-tight">
                            Nuestra Misión
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg italic">
                            "En SolEnergéticas, transformamos la energía del sol en ahorro real para tu hogar o empresa. Nuestra misión es liderar el cambio hacia un modelo energético sostenible, eliminando las barreras técnicas y económicas para que el autoconsumo sea una realidad accesible para todos en Galicia."
                        </p>
                    </div>

                    {/* Imagen con el componente de Cloudinary */}
                    <div className="flex-1 w-full flex justify-center">
                        <StyledImageCard
                            publicId="photo-1529310399831-ed472b81d589_h3l6p6"
                            alt="Instalación de paneles solares y energía limpia"
                            className="w-full h-[400px] md:h-[450px]"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}