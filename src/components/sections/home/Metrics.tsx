import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { metrics } from "@/data/metrics";

export default function Metrics() {
    return (
        <Section className="bg-primary">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {metrics.map((metric) => (
                        <div key={metric.label}>
                            <p className="text-4xl font-extrabold text-white">{metric.value}</p>
                            <p className="mt-1 text-green-100 font-medium">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
