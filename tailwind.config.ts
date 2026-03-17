import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                accent: "var(--color-accent)",
                light: "var(--color-light)",
                white: "var(--color-white)",
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
                xl: "1rem",
                '2xl': "1.5rem",
                '3xl': "2.5rem",
            },
            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)",
                xl: "0 20px 50px rgba(0, 0, 0, 0.05)",
                accent: "0 10px 15px -3px rgba(49, 107, 219, 0.3)",
            },
            animation: {
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
            },
            keyframes: {
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
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