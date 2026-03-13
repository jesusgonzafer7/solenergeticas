import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        // Footer principal: fondo azul corporativo, texto blanco puro
        <footer className="w-full bg-accent text-white mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Top footer */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

                    {/* Logo: Espacio reservado para tu logo */}
                    <div className="flex items-center gap-3">
                        <Link href="/" className="font-bold text-xl">
                            SolEnergéticas
                        </Link>
                    </div>

                    {/* Navegación principal con FAQs añadido */}
                    <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                        <Link href="/" className="hover:text-white/80 transition">Inicio</Link>
                        <Link href="/sobre-nosotros" className="hover:text-white/80 transition">Sobre nosotros</Link>
                        <Link href="/colaboradores" className="hover:text-white/80 transition">Colaboradores</Link>
                        <Link href="/faqs" className="hover:text-white/80 transition">FAQs</Link>
                        <Link href="/contacto" className="hover:text-white/80 transition">Contacta</Link>
                        <Link href="/crm" className="hover:text-white/80 transition">Acceso CRM</Link>
                    </nav>

                    {/* Contacto y redes sociales */}
                    <div className="flex flex-col items-center md:items-end gap-3 text-sm">
                        <p className="font-light">solenergeticas@gmail.com</p>

                        <div className="flex gap-4 text-xl">
                            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
                                <FaFacebook />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom footer: Línea divisoria sutil */}
                <div className="border-t border-white/20 mt-8 pt-6 text-center text-xs text-white/60">
                    © {new Date().getFullYear()} Soluciones Energéticas. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}