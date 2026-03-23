import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
                  /* Estructura para que el footer baje al final */
                  min-h-screen 
                  flex 
                  flex-col
                `}
            >
                {/* 1. NAVBAR: Siempre arriba de todo */}
                <Navbar />

                {/* 2. CONTENIDO: El main crece para ocupar el espacio central */}
                <main className="flex-grow">
                    {children}
                </main>

                {/* 3. FOOTER: Siempre al final */}
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}