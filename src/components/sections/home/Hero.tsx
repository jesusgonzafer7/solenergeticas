import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

export default function Hero() {
    return (
        <Section className="bg-linear-to-b from-surface to-white py-16 md:py-24">
            <Container>
                <div className="flex flex-col items-center text-center gap-6">

                    {/* Título en una sola línea, ajustado a 2xl/4xl para garantizar espacio */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight whitespace-nowrap">
                        Ahorra en tu energía, <span className="text-accent">gana en tranquilidad.</span>
                    </h2>

                    {/* Párrafo en negro puro */}
                    <p className="text-lg md:text-xl text-black max-w-2xl font-medium leading-relaxed">
                        Instalamos paneles solares de alta eficiencia para hogares y empresas.
                        Reduce tu factura desde el primer día con tecnología líder.
                    </p>

                    {/* Botones con letra blanca y diseño corporativo */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Button size="lg" className="px-10">
                            Solicitar presupuesto
                        </Button>
                        <Button size="lg" variant="outline" className="px-10">
                            Conocer más
                        </Button>
                    </div>

                </div>
            </Container>
        </Section>
    );
}