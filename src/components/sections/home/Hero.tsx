import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, Zap, Phone } from "lucide-react";

const badges = [
    { icon: ShieldCheck, label: "Instalación certificada" },
    { icon: Zap, label: "Ahorro desde el día 1" },
    { icon: Phone, label: "Soporte local 24/7" },
];

export default function Hero() {
    return (
        <div className="bg-linear-to-b from-surface to-white pt-16 pb-10 md:pt-24 md:pb-14">
            <Container>
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Badge de especialidad */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase">
                        <Zap size={12} strokeWidth={3} />
                        Especialistas en energía solar en Galicia
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight">
                        Ahorra en tu energía,{" "}
                        <span className="text-accent">gana en tranquilidad.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted max-w-2xl font-medium leading-relaxed">
                        Instalamos paneles solares de alta eficiencia para hogares y empresas.
                        Reduce tu factura desde el primer día con tecnología líder.
                    </p>

                    {/* CTAs con el componente Button original */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <Link href="/contacto">
                            <Button size="lg" className="shadow-accent">
                                Solicitar presupuesto gratis
                            </Button>
                        </Link>
                        <Link href="/sobre-nosotros">
                            <Button size="lg" variant="outline">
                                Conocer más
                            </Button>
                        </Link>
                    </div>

                    {/* Badges de confianza */}
                    <div className="flex flex-wrap justify-center gap-6 mt-4 pt-4 border-t border-border w-full max-w-lg">
                        {badges.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-1.5 text-muted text-sm font-medium">
                                <Icon size={15} className="text-accent" strokeWidth={2.5} />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}