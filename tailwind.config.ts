import type { Config } from "tailwindcss";

const config: Config = {
    /* Se definen las rutas donde Tailwind buscara clases aplicadas */
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            /* Mapeo de colores sincronizado con globals.css */
            colors: {
                primary: "var(--color-primary)",
                accent: "var(--color-accent)", // Tu azul #316BDB
                light: "var(--color-light)",
                white: "var(--color-white)",
                background: "var(--color-background)",
                surface: "var(--color-surface)",
                text: "var(--color-text)",
                muted: "var(--color-text-light)",
                border: "var(--color-border)",
            },
            /* Mapeo de bordes */
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "1rem",         // Para los inputs redondeados
                '2xl': "1.5rem",    // Para los cuadros de texto del formulario
                '3xl': "2.5rem",    // Para el contenedor del carrusel y el form-card
            },
            /* Mapeo de sombras mejorado */
            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)",
                // Sombra premium para el formulario y el carrusel
                'xl': "0 20px 50px rgba(0, 0, 0, 0.05)",
                // Sombra de resplandor para el botón azul
                'accent': "0 10px 15px -3px rgba(49, 107, 219, 0.3)",
            },
            /* Animaciones para el Carrusel */
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            fontFamily: {
                sans: ["var(--font-primary)", "ui-sans-serif", "system-ui"],
                mono: ["var(--font-mono)", "ui-monospace", "monospace"],
            },
        },
    },
    plugins: [],
};

export default config;