import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        // Footer principal: ancho completo, fondo azul (bg-accent), texto claro (text-light), se coloca al final de la página (mt-auto)
        <footer className="w-full bg-accent text-light mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Top footer: flex vertical en móvil, horizontal en desktop, con espacio entre bloques */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

                    {/* Logo vacío: puedes agregar tu logo aquí */}
                    <div className="flex items-center gap-3">
                        {/* Logo aquí */}
                    </div>

                    {/* Navegación principal: enlaces con gap y texto pequeño */}
                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/">Inicio</Link>
                        <Link href="/sobre-nosotros">Sobre nosotros</Link>
                        <Link href="/colaboradores">Colaboradores</Link>
                        <Link href="/contacto">Contacta</Link>
                        <Link href="#">Acceso CRM</Link>
                    </nav>

                    {/* Contacto y redes sociales: alineado al centro en móvil y a la derecha en desktop */}
                    <div className="flex flex-col items-center md:items-end gap-3 text-sm">
                        {/* Correo de contacto */}
                        <p>solenergeticas@gmail.com</p>

                        {/* Iconos de redes sociales: tamaño grande (text-xl), con transición al pasar el mouse */}
                        <div className="flex gap-4 text-xl">
                            <a href="#" aria-label="Instagram" className="hover:text-white/80 transition">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-white/80 transition">
                                <FaFacebook />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-white/80 transition">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom footer: separador superior, centrado, texto pequeño */}
                <div className="border-t border-white/30 mt-8 pt-4 text-center text-xs">
                    © {new Date().getFullYear()} Soluciones Energéticas. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}