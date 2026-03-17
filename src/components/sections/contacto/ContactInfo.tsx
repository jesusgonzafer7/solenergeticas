import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

const contactDetails = [
    { label: "Teléfono", value: "+34 600 000 000" },
    { label: "Email", value: "info@solenergéticas.es" },
    { label: "Dirección", value: "Calle Ejemplo 123, Madrid, España" },
    { label: "Horario", value: "Lun–Vie: 9:00 – 18:00" },
];

export default function ContactInfo() {
    return (
        <Section className="bg-background">
            <Container>
                <h2 className="text-3xl font-bold mb-8 text-primary">Información de contacto</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Columna izquierda: Información de contacto */}
                    <div className="space-y-6">
                        {contactDetails.map((detail) => (
                            <div
                                key={detail.label}
                                className="p-6 bg-surface rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                                    {detail.label}
                                </p>
                                <p className="mt-2 text-lg text-text">{detail.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Columna derecha: Mapa */}
                    <div className="w-full h-80 lg:h-full rounded-lg overflow-hidden shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.123456!2d-3.70379068460521!3d40.41677597936315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288b0d0d0d0d%3A0x123456789abcdef!2sCalle+Ejemplo+123%2C+Madrid!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses"
                            width="100%"
                            height="100%"
                            className="border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </Container>
        </Section>
    );
}