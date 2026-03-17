"use client";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { metrics } from "@/data/metrics";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function Metrics() {
    return (
        <Section className="bg-primary py-16">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col items-center">
                            {/* Reemplazamos el valor estático por el animado */}
                            <p className="text-4xl md:text-5xl font-extrabold text-white">
                                <AnimatedNumber value={metric.value} />
                            </p>

                            {/* Usamos text-light o text-white/80 para seguir los tokens */}
                            <p className="mt-2 text-white/80 font-medium text-sm md:text-base uppercase tracking-wide">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}