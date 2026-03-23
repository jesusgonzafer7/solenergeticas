"use client";
import { CldImage } from "next-cloudinary";

type StyledImageCardProps = {
    /** Cloudinary public ID (sin la URL base) */
    publicId: string;
    alt: string;
    /** Clases extra para el contenedor (p.ej. tamaño, margen) */
    className?: string;
    /** Muestra el degradado oscuro lateral (necesario cuando hay texto encima). Default: false */
    showGradient?: boolean;
    /** Modo de ajuste de la imagen. Default: 'cover' */
    objectFit?: "cover" | "contain";
    /** Muestra el borde del contenedor. Default: true */
    showBorder?: boolean;
};

/**
 * Contenedor de imagen con el mismo estilo visual que las tarjetas del HeroCarousel:
 * fondo oscuro, borde, sombra, bordes muy redondeados, overlay de color corporativo y zoom en hover.
 */
export default function StyledImageCard({
    publicId,
    alt,
    className = "",
    showGradient = false,
    objectFit = "cover",
}: StyledImageCardProps) {
    return (
        <div
            className={`relative overflow-hidden bg-slate-900 shadow-2xl border border-border group ${className}`}
            style={{ borderRadius: "2.5rem" }}
        >
            {/* Overlay de color corporativo (igual que en el carrusel) */}
            <div className="absolute inset-0 z-20 bg-primary/20 mix-blend-overlay pointer-events-none" />

            {/* Gradiente lateral (solo cuando hay texto encima) */}
            {showGradient && (
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
            )}

            <CldImage
                fill
                src={publicId}
                alt={alt}
                className={`transition-transform duration-700 ease-in-out group-hover:scale-105 ${
                    objectFit === "contain" ? "object-contain" : "object-cover"
                }`}
            />
        </div>
    );
}
