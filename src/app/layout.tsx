import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
    /* Se vincula la fuente a la variable definida en la configuracion */
    variable: "--font-primary",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SolEnergéticas",
    description: "Soluciones de energía solar",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body
                className={`
          ${geistSans.variable} 
          antialiased 
          /* Flexbox para empujar el footer al final de la pagina */
          min-h-screen 
          flex 
          flex-col
        `}
            >
                {/* El main crece para ocupar el espacio disponible */}
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}