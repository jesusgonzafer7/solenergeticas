import { type ClassValue, clsx } from "clsx";

/**
 * Combina clases CSS de forma segura.
 * Requiere instalar: npm install clsx
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

/**
 * Formatea una fecha a formato local español.
 */
export function formatDate(date: Date): string {
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
