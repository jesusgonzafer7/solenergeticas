"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedNumber({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);

    // Extraemos solo los números del string (ej: "+500" -> 500)
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);

    // El valor de movimiento inicial
    const motionValue = useMotionValue(0);

    // Creamos un efecto de suavizado (spring) para el contador
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    // Detectamos cuando el componente entra en pantalla
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue);
        }
    }, [isInView, motionValue, numericValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                // Mantenemos los símbolos originales (+ o %) junto al número animado
                const prefix = value.startsWith("+") ? "+" : "";
                const suffix = value.endsWith("%") || value.endsWith("+") || value.endsWith("M")
                    ? value.replace(/[0-9]/g, "")
                    : "";

                ref.current.textContent = `${prefix}${latest.toFixed(0)}${suffix}`;
            }
        });
    }, [springValue, value]);

    return <span ref={ref}>0</span>;
}