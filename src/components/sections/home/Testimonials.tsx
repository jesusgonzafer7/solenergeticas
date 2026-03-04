import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const testimonials = [
    {
        name: "María García",
        text: "Instalaron nuestros paneles en tiempo récord. Hemos reducido la factura un 70%.",
    },
    {
        name: "Carlos López",
        text: "Excelente servicio y atención al cliente. Muy recomendable.",
    },
    {
        name: "Ana Martínez",
        text: "El proceso fue transparente y sin sorpresas. Muy contentos con el resultado.",
    },
];

export default function Testimonials() {
    return (
        <Section>
            <Container>
                <h2 className="text-3xl font-bold text-center mb-12">
                    Lo que dicen nuestros clientes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <Card key={t.name}>
                            <p className="text-gray-600 italic">&ldquo;{t.text}&rdquo;</p>
                            <p className="mt-4 font-semibold text-gray-900">— {t.name}</p>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
