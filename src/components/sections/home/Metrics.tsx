import { metrics } from "@/data/metrics";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import Container from "@/components/layout/Container";

export default function Metrics() {
    return (
        /* Cambiamos el fondo a bg-accent (tu azul #316BDB) */
        <section className="py-16 bg-accent">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center text-center">

                            {/* Los números ahora en BLANCO para resaltar sobre el azul */}
                            <span className="text-4xl md:text-5xl font-black text-white mb-2">
                                <AnimatedNumber value={metric.value} />
                            </span>

                            {/* Las etiquetas también en BLANCO (u opacidad suave) */}
                            <span className="text-sm md:text-base font-bold text-white/90 uppercase tracking-wide">
                                {metric.label}
                            </span>

                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}