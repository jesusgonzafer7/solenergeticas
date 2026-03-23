import TarifaComparison from "@/components/ui/TarifaGrafica";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function TarifasSection() {
    return (
        <>
            {/* Sección de tarifas */}
            <section className="pt-20 pb-4">
                <Container>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary leading-tight tracking-tight uppercase">
                            Empieza a ahorrar{" "}
                            <span className="text-accent">con nuestras tarifas.</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-accent mx-auto mt-4 rounded-full" />
                        <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto">
                            Compara y elige la modalidad que mejor se adapta a tu consumo. Sin permanencia, sin letra pequeña.
                        </p>
                    </div>
                </Container>
            </section>

            <div className="pb-24">
                <TarifaComparison />

                {/* Contenedor para centrar el botón */}
                <div className="flex justify-center mt-12">
                    <Link href="/contacto">
                        <Button size="lg" className="shadow-2xl py-6 px-10 text-lg font-bold">
                            Solicitar presupuesto gratis
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
