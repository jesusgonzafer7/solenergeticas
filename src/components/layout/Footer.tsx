import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="w-full text-white mt-auto"
            style={{ backgroundColor: "var(--color-accent)" }}
        >
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Top footer */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

                    {/* Logo vacío */}
                    <div className="flex items-center gap-3">
                        {/* Logo vacío por ahora */}
                    </div>

                    {/* Navegación */}
                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/">Inicio</Link>
                        <Link href="/sobre-nosotros">Sobre nosotros</Link>
                        <Link href="/colaboradores">Colaboradores</Link>
                        <Link href="/contacto">Contacta</Link>
                        <Link href="#">Acceso CRM</Link>
                    </nav>

                    {/* Contacto + redes */}
                    <div className="flex flex-col items-center md:items-end gap-3 text-sm">
                        <p>solenergeticas@gmail.com</p>

                        <div className="flex gap-4 text-xl">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="hover:text-white/80 transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="hover:text-white/80 transition"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="hover:text-white/80 transition"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/30 mt-8 pt-4 text-center text-xs">
                    © {new Date().getFullYear()} Soluciones Energéticas. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}