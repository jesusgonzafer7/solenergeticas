import { faqs } from "@/data/faqs";
import Accordion from "@/components/ui/Accordion";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function FaqsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold text-center mb-12">
                Preguntas Frecuentes
            </h1>
            <div className="w-full max-w-3xl">
                {faqs.map((faq, index) => (
                    <Accordion key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>

            <Section>
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">
                        ¿No encuentras tu respuesta?
                    </h2>

                    <div className="max-w mx-auto bg-surface p-6 rounded-lg shadow-sm text-center">
                        {/* Bloque de texto */}
                        <p className="text-lg text-text mb-6">
                            Envíanos tu factura y analizamos tu caso particular.
                        </p>

                        {/* Botón centrado */}
                        <Link href="/contacto">
                            <Button variant="primary" size="lg">Contáctanos</Button>
                        </Link>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
