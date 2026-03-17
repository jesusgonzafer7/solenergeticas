"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { CldImage } from 'next-cloudinary';

export default function Footer() {
    return (
        <footer className="w-full bg-accent text-white mt-auto font-sans">
            <div className="container-custom py-8">

                {/* Distribución principal en 3 columnas */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

                    {/* COLUMNA IZQUIERDA: Logo */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="hover:scale-105 transition-transform duration-300">
                            <CldImage
                                width="240"
                                height="70"
                                src="Group-2-20-white_nyjllk"
                                alt="Logo Soluciones Energéticas"
                                className="object-contain h-16 w-auto"
                            />
                        </Link>
                    </div>

                    {/* COLUMNA CENTRAL: Enlaces en línea + Línea divisoria */}
                    <div className="flex-[2] flex flex-col items-center">
                        {/* 'flex-nowrap' y 'whitespace-nowrap' aseguran que estén en una sola línea */}
                        <nav className="flex flex-row flex-nowrap items-center gap-x-6 text-[14px] font-medium whitespace-nowrap mb-4">
                            <Link href="/" className="hover:opacity-80 transition-opacity">Inicio</Link>
                            <Link href="/sobre-nosotros" className="hover:opacity-80 transition-opacity">Sobre nosotros</Link>
                            <Link href="/colaboradores" className="hover:opacity-80 transition-opacity">Colaboradores</Link>
                            <Link href="/contacto" className="hover:opacity-80 transition-opacity">Contáctanos</Link>
                            <Link href="/crm" className="hover:opacity-80 transition-opacity">Acceso CRM</Link>
                        </nav>
                        {/* Línea blanca horizontal estilizada */}
                        <div className="w-full max-w-md h-[1.5px] bg-white opacity-90"></div>
                    </div>

                    {/* COLUMNA DERECHA: Contacto y RRSS */}
                    <div className="flex-1 flex flex-col items-end gap-3">
                        {/* Bloque de texto contacto */}
                        <div className="flex flex-col items-end gap-1 text-[13px] font-light">
                            <div className="flex items-center gap-2">
                                <FaPhone className="size-3" />
                                <span>666666666</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="size-3" />
                                <span>Solenergeticas@gmail.com</span>
                            </div>
                        </div>

                        {/* Iconos de Redes Sociales */}
                        <div className="flex gap-4">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <FaInstagram className="text-4xl" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <FaFacebook className="text-4xl" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <FaLinkedin className="text-4xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT INFERIOR */}
                <div className="mt-6 text-center text-[11px] font-light tracking-tight opacity-90">
                    Copyright © 2024 Soluciones Energéticas. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}