import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function PartnersGrid() {
    return (
        <Section>
            <Container>
                <h2 className="text-3xl font-bold text-center mb-12">
                    ¿Quieres colaborar?
                </h2>

                <div className="max-w mx-auto bg-surface p-6 rounded-lg shadow-sm text-center">
                    {/* Bloque de texto */}
                    <p className="text-lg text-text mb-6">
                        ¡Únete a nuestro equipo de colaboradores y forma parte de proyectos innovadores que marcan la diferencia!
                    </p>

                    {/* Botón centrado */}
                    <Link href="/nuevoColab">
                        <Button variant="primary" size="lg">Contáctanos</Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
}