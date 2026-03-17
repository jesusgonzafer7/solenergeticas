import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

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
                    <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors duration-300">
                        Contáctanos
                    </button>
                </div>
            </Container>
        </Section>
    );
}