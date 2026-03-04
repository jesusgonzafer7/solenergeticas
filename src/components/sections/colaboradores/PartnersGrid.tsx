import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import { collaborators } from "@/data/collaborators";

export default function PartnersGrid() {
    return (
        <Section>
            <Container>
                <h2 className="text-3xl font-bold text-center mb-12">
                    Nuestros colaboradores
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {collaborators.map((partner) => (
                        <Card key={partner.id} className="text-center">
                            <p className="text-xl font-bold text-gray-900">{partner.name}</p>
                            <p className="mt-2 text-gray-500 text-sm">{partner.description}</p>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
