import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { collaborators } from "@/data/collaborators";
import { providers } from "@/data/providers";

export default function PartnersGrid() {
    // Estilo unificado para los títulos AJUSTADOS: Un poco más pequeños, pero NEGROS, ITÁLICOS
    const sectionTitle = "text-3xl md:text-4xl font-black text-primary text-center mb-16 uppercase tracking-tighter italic leading-none";
    // Clase base para las tarjetas blancas con efecto hover suave
    const cardBase = "bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-sm flex items-center justify-center border border-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden";

    return (
        <Section className="bg-[#E5E7EB] pt-0 pb-24">
            <Container>
                <div className="max-w-6xl mx-auto space-y-32">

                    {/* SECCIÓN COLABORADORES (A FULL COLOR) */}
                    <div>
                        <h2 className={sectionTitle}>Colaboradores</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {collaborators.map((partner) => (
                                <div key={partner.id} className={`${cardBase} p-12 min-h-[200px]`}>
                                    <img
                                        src={partner.logoUrl}
                                        alt={partner.name}
                                        // CORREGIDO: Eliminamos grayscale, añadimos opacidad inicial y hover effect
                                        className="max-w-full h-auto max-h-18 object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-95 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECCIÓN PROVEEDORES (A FULL COLOR) */}
                    <div>
                        <h2 className={sectionTitle}>Proveedores</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {providers.map((provider) => (
                                <div key={provider.id} className={`${cardBase} p-8 min-h-[140px]`}>
                                    {provider.logoUrl ? (
                                        <img
                                            src={provider.logoUrl}
                                            alt={provider.name}
                                            // CORREGIDO: Eliminamos grayscale, añadimos opacidad inicial y hover effect
                                            className="max-w-full h-auto max-h-14 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    ) : (
                                        // Placeholder sutil para recuadros vacíos
                                        <div className="w-full h-14 bg-gray-200/20 rounded-full animate-pulse" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}