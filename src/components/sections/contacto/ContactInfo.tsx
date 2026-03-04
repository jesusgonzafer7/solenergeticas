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
        <Section className="bg-green-50">
            <Container>
                <h2 className="text-3xl font-bold mb-8">Información de contacto</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactDetails.map((detail) => (
                        <div key={detail.label}>
                            <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                                {detail.label}
                            </p>
                            <p className="mt-1 text-gray-800 text-lg">{detail.value}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
