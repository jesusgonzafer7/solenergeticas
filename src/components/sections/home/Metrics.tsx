import { metrics } from "@/data/metrics";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import Container from "@/components/layout/Container";

interface MetricsProps {
    tipo?: 'inicio' | 'colaboradores';
}

export default function Metrics({ tipo = 'inicio' }: MetricsProps) {
    // IMPORTANTE: Ahora el filtro encontrará las categorías
    const metricsFiltradas = metrics.filter(m => m.category === tipo);

    return (
        <section className="py-16 bg-accent">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metricsFiltradas.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <span className="text-4xl md:text-5xl font-black text-white mb-2 italic">
                                <span className="flex items-baseline">
                                    {/* Símbolos inteligentes según el texto */}
                                    {(metric.label.includes("Instalaciones") || metric.label.includes("Colaboradores")) && "+"}

                                    <AnimatedNumber value={metric.value} />

                                    {metric.label.includes("satisfechos") && "%"}
                                    {metric.label.includes("experiencia") && "+"}
                                    {metric.label.includes("kWh") && "M"}
                                    {metric.label.includes("técnico") && "/7"}
                                </span>
                            </span>

                            <span className="text-sm md:text-base font-bold text-white/90 uppercase tracking-widest leading-tight">
                                {metric.label}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}