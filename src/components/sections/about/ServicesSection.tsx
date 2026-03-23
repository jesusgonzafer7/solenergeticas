"use client";
import { useState } from "react";
import Container from "@/components/layout/Container";
import { FiChevronDown } from "react-icons/fi"; // Flecha como la de la imagen

const servicios = [
    {
        title: "Autoconsumo Fotovoltaico",
        description: "Instalación de paneles solares de alta eficiencia para reducir tu factura eléctrica desde el primer día.",
    },
    {
        title: "Mantenimiento Integral",
        description: "Revisiones periódicas y limpieza técnica para garantizar el máximo rendimiento de tu instalación.",
    },
    {
        title: "Eficiencia Energética",
        description: "Estudios personalizados para optimizar el consumo de tu hogar o empresa con tecnología de vanguardia.",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-[#E5E7EB] py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black text-primary text-center mb-12 uppercase tracking-wider">
                        Servicios que <span className="text-accent">ofrecemos</span>
                    </h2>

                    <div className="space-y-4 bg-white/30 p-6 md:p-10 rounded-[2.5rem] shadow-inner border border-white/20">
                        {servicios.map((s, i) => (
                            <ServiceItem key={i} title={s.title} description={s.description} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ServiceItem({ title, description }: { title: string; description: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left group"
            >
                <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {title}
                </span>
                <FiChevronDown
                    size={24}
                    className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            {isOpen && (
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-1">
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
            )}
        </div>
    );
}