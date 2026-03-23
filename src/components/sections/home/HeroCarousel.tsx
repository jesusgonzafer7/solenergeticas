"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StyledImageCard from "@/components/ui/StyledImageCard";

const slides = [
    {
        id: 1,
        tag: "EFICIENCIA ENERGÉTICA",
        image: "photo-1679580447642-25c5d0d2f4a1_nxpg4p",
        title: "¿Pagas más de lo que deberías por tu energía?",
        description: "Analizamos tu consumo actual para ofrecerte la mejor alternativa de ahorro real."
    },
    {
        id: 2,
        tag: "SOPORTE TÉCNICO",
        image: "zbynek-burival-V4ZYJZJ3W4M-unsplash_k7pmon",
        title: "Optimiza tu consumo con soluciones inteligentes",
        description: "Tecnología de vanguardia para el control total de tu instalación solar."
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000); // 8s para que dé tiempo a leer
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="container-custom mx-auto px-4">
            <div
                className="relative w-full overflow-hidden shadow-2xl border border-border bg-slate-900 group"
                style={{ height: '500px', borderRadius: '2.5rem' }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 z-10 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                    >
                        {/* Imagen con overlays reutilizando StyledImageCard */}
                        <StyledImageCard
                            publicId={slide.image}
                            alt={slide.title}
                            showGradient={true}
                            className="absolute inset-0 z-10"
                        />

                        {/* TEXTOS ANIMADOS (Estilo antiguo recuperado) */}
                        <div className="relative z-30 h-full flex items-center px-8 md:px-20 lg:px-32">
                            <div className="max-w-2xl text-left">
                                <span className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 rounded-full transition-all duration-700 delay-300 ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}>
                                    {slide.tag}
                                </span>

                                <h2 className={`text-white text-4xl md:text-6xl font-black leading-tight mb-6 transition-all duration-700 delay-500 ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}>
                                    {slide.title}
                                </h2>

                                <p className={`text-gray-200 text-lg md:text-xl max-w-lg transition-all duration-700 delay-700 ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}>
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* NAVEGACIÓN LATERAL (LUCIDE) */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/20 opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-primary"
                >
                    <ChevronLeft size={24} strokeWidth={2.5} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/20 opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-primary"
                >
                    <ChevronRight size={24} strokeWidth={2.5} />
                </button>

                {/* DOTS INFERIORES */}
                <div className="absolute bottom-10 left-8 md:left-20 flex gap-4 z-40">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-1 transition-all duration-500 rounded-full ${current === index ? "w-12 bg-accent" : "w-8 bg-white/30 hover:bg-white/60"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}