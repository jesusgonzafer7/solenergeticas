"use client"; // Necesario para usar interactividad (useState)

import { useState } from "react";
import Link from "next/link";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-background border-b border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* 1. LOGO */}
                <div className="flex items-center gap-3">
                    {/* Logo aquí */}
                </div>

                {/* 2. NAVEGACIÓN DESKTOP (Se oculta en móvil) */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-6 text-sm font-medium text-text">
                        <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
                        <Link href="/sobre-nosotros" className="hover:text-accent transition-colors">Sobre nosotros</Link>
                        <Link href="/colaboradores" className="hover:text-accent transition-colors">Colaboradores</Link>
                        <Link href="/faqs" className="hover:text-accent transition-colors">FAQs</Link>
                        <Link href="/contacto" className="hover:text-accent transition-colors">Contáctanos</Link>
                    </nav>

                    <div className="h-6 w-[1px] bg-border mx-2"></div>

                    <Link href="/crm" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
                        <FaUserCircle className="text-lg" />
                        Acceso CRM
                    </Link>
                </div>

                {/* 3. BOTÓN MENÚ MÓVIL (Solo visible en móvil) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-text p-2 transition-colors"
                        aria-label="Abrir menú"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* 4. MENÚ DESPLEGABLE MÓVIL */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border animate-in fade-in slide-in-from-top-5 duration-300">
                    <nav className="flex flex-col p-6 gap-4 text-base font-medium text-text">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-accent">Inicio</Link>
                        <Link href="/sobre-nosotros" onClick={() => setIsOpen(false)} className="hover:text-accent">Sobre nosotros</Link>
                        <Link href="/colaboradores" onClick={() => setIsOpen(false)} className="hover:text-accent">Colaboradores</Link>
                        <Link href="/faqs" onClick={() => setIsOpen(false)} className="hover:text-accent">FAQs</Link>
                        <Link href="/contacto" onClick={() => setIsOpen(false)} className="hover:text-accent">Contáctanos</Link>
                        <hr className="border-border my-2" />
                        <Link href="/crm" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-primary font-bold">
                            <FaUserCircle /> Acceso CRM
                        </Link>
                    </nav>
                </div>
            )}
        </nav>
    );
}