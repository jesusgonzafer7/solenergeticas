import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "María García",
        role: "Propietaria de vivienda",
        initials: "MG",
        text: "Instalaron nuestros paneles en tiempo récord. Hemos reducido la factura un 70%. El equipo fue muy profesional y resolvió todas nuestras dudas.",
        stars: 5,
    },
    {
        name: "Carlos López",
        role: "Pequeño empresario",
        initials: "CL",
        text: "Excelente servicio y atención al cliente. Muy recomendable. Desde que instalamos los paneles, el ahorro ha sido evidente mes a mes.",
        stars: 5,
    },
    {
        name: "Ana Martínez",
        role: "Comunidad de vecinos",
        initials: "AM",
        text: "El proceso fue transparente y sin sorpresas. Muy contentos con el resultado. La instalación fue rápida y los técnicos muy profesionales.",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <Section className="bg-surface">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary leading-tight tracking-tight">
                        Las valoraciones de <span className="text-accent">nuestros clientes</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-accent mx-auto mt-4 rounded-full" />
                    <p className="text-muted mt-4 text-base max-w-xl mx-auto">
                        Más de 200 familias y empresas ya confían en nosotros para gestionar su energía.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <Card key={t.name} className="flex flex-col gap-4">
                            {/* Estrellas */}
                            <div className="flex gap-0.5">
                                {Array.from({ length: t.stars }).map((_, i) => (
                                    <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Cita */}
                            <p className="text-muted text-sm leading-relaxed flex-1 italic">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Autor */}
                            <div className="flex items-center gap-3 pt-3 border-t border-border">
                                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-primary text-sm">{t.name}</p>
                                    <p className="text-muted text-xs">{t.role}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
