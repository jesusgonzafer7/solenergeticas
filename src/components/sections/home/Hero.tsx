import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

export default function Hero() {
    return (
        <Section className="bg-linear-to-br from-green-50 to-white">
            <Container>
                <div className="flex flex-col items-center text-center gap-6 py-12">
                    <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
                        Energía solar para un{" "}
                        <span className="text-green-600">futuro sostenible</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Instalamos paneles solares de alta eficiencia para hogares y empresas.
                        Ahorra en tu factura y contribuye al medioambiente.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg">Solicitar presupuesto</Button>
                        <Button size="lg" variant="outline">
                            Conocer más
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
