"use client";
import { motion } from "framer-motion";

export default function TarifaComparison() {
    const data = [30, 45, 35, 55, 40, 25, 45, 35];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };

    return (
        <div className="w-full pb-20 px-4 bg-white overflow-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto"
            >

                {/* CUADRO 1: GRÁFICA (Replica fiel de la imagen) */}
                <div className="w-[320px] h-[320px] bg-white rounded-[2rem] shadow-xl border border-accent/20 flex flex-col pt-8 pb-10 relative overflow-hidden shrink-0">

                    {/* Título Superior */}
                    <div className="text-center mb-8">
                        <span className="text-primary text-xl font-black leading-tight italic">
                            Comparativa Real
                        </span>
                    </div>

                    {/* Zona de etiquetas sobre la línea */}
                    <div className="relative px-8 z-30">
                        <div className="flex justify-between items-end pb-1">
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/60">
                                Tarifa Fija
                            </span>
                        </div>
                        {/* Línea Blanca Divisoria */}
                        <motion.div
                            variants={{
                                hidden: { scaleX: 0 },
                                visible: { scaleX: 1, transition: { delay: 0.5, duration: 0.8 } }
                            }}
                            className="h-[1.5px] w-full bg-accent/40 origin-left"
                        />
                    </div>

                    {/* Contenedor de Barras */}
                    <div className="flex-1 flex items-end justify-between px-10 gap-1.5 pt-4">
                        {data.map((h, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { height: 0, opacity: 0 },
                                    visible: {
                                        height: `${h}%`,
                                        opacity: 1,
                                        transition: { duration: 0.8, ease: "easeOut", delay: i * 0.05 }
                                    }
                                }}
                                className="flex-1 bg-accent rounded-t-sm"
                            />
                        ))}
                    </div>

                    {/* Texto Inferior Centrado */}
                    <div className="mt-4 text-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/60">
                            Tarifa Indexada
                        </span>
                    </div>
                </div>

                {/* CUADRO 2: TEXTOS EXPLICATIVOS */}
                <div className="w-[320px] h-[320px] bg-white rounded-[2rem] shadow-xl border border-accent/20 p-10 flex flex-col justify-center shrink-0">
                    <div className="space-y-8">
                        {/* Bloque Fija */}
                        <div>
                            <h3 className="text-primary text-xl font-black leading-tight italic">
                                Tarifa Fija
                            </h3>
                            <p className="text-text text-sm font-medium leading-relaxed mt-2">
                                Un precio estático con sobrecostes de seguridad para la comercializadora.
                            </p>
                        </div>

                        {/* Bloque Indexada */}
                        <div className="pt-6 border-t border-border">
                            <h3 className="text-primary text-xl font-black leading-tight italic">
                                Tarifa Indexada
                            </h3>
                            <p className="text-text text-sm font-medium leading-relaxed mt-2">
                                Paga la energía a precio de coste real del mercado. Sin márgenes ocultos.
                            </p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}