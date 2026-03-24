import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";

export default function PartnersCommitment() {
    return (
        // Degradado de gris a blanco para un cierre suave de la página
        <Section className="bg-gradient-to-b from-[#E5E7EB] to-white pb-40 pt-20">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
                    <div className="flex-1 space-y-10 text-left">
                        <div className="inline-block px-4 py-1 bg-primary/5 rounded-full border border-primary/10">
                            <span className="text-primary font-bold text-xs uppercase tracking-widest italic">
                                Calidad Certificada
                            </span>
                        </div>

                        {/* TÍTULO CON DOS AZULES: "Excelencia" en oscuro, el resto en claro */}
                        <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9]">
                            <span className="text-primary">Excelencia</span>
                            <span className="text-accent block mt-2 md:inline md:mt-0 md:ml-3">
                                en cada componente
                            </span>
                        </h3>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed border-l-2 border-accent pl-8">
                            <p className="italic">
                                "La energía solar es una inversión a largo plazo. Por eso, no solo elegimos productos, elegimos aliados que comparten nuestra obsesión por la durabilidad."
                            </p>
                            <p className="font-bold text-primary not-italic text-sm uppercase tracking-wider">
                                Red de proveedores auditada 2026
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        {/* Decoración de fondo sutil */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />

                        {/* Marco blanco grueso estilo "premium" */}
                        <div className="rounded-[3.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[16px] border-white bg-white ring-1 ring-black/5">
                            <img
                                src="https://res.cloudinary.com/ddiznbbma/image/upload/v1774342650/photo-1451187580459-43490279c0fa_uzd8wb.avif"
                                alt="Tecnología SolEnergéticas en Galicia"
                                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-1000"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}