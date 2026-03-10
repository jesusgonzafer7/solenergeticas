import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {

            colors: {
                primary: "var(--color-primary)",
                accent: "var(--color-accent)",
                light: "var(--color-light)",

                background: "var(--color-background)",
                surface: "var(--color-surface)",
                text: "var(--color-text)",
                muted: "var(--color-text-light)",
                border: "var(--color-border)"
            },

            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)"
            },

            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)"
            },

            fontFamily: {
                sans: ["var(--font-primary)"]
            }

        }
    },
    plugins: []
}

export default config