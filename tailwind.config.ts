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
            /* Mapeo de variables CSS definidas en globals.css */
            colors: {
                primary: "var(--color-primary)",
                accent: "var(--color-accent)",
                light: "var(--color-light)",
                background: "var(--color-background)",
                surface: "var(--color-surface)",
                text: "var(--color-text)",
                muted: "var(--color-text-light)",
                border: "var(--color-border)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
            },
            fontFamily: {
                /* Se asigna la variable de fuente de Next.js como fuente principal */
                sans: ["var(--font-primary)", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
};

export default config;