import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

export default function LocationSection() {
    return (
        <Section className="bg-gray-50">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-8">Nuestra ubicación</h2>
                <div className="rounded-2xl overflow-hidden shadow-md h-80 bg-gray-200 flex items-center justify-center">
                    {/* Aquí se puede integrar Google Maps u otro mapa */}
                    <p className="text-gray-500 text-lg">Mapa de ubicación próximamente</p>
                </div>
            </Container>
        </Section>
    );
}
