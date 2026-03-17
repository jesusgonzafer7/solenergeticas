"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { CldImage } from 'next-cloudinary';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Función de estilos utilizando tus tokens: primary y accent
    const getLinkStyles = (href: string, isSpecial: boolean = false) => {
        const isActive = pathname === href;
        const baseStyles = "transition-all duration-300 hover:text-accent flex items-center gap-3";

        if (!isSpecial) {
            return `${baseStyles} ${isActive ? "text-accent font-black" : "text-primary font-bold"}`;
        }
        return `${baseStyles} text-primary font-bold group`;
    };

    return (
        // bg-background y border-border vienen de tu @theme
        <nav className="w-full bg-background border-b border-border sticky top-0 z-50 shadow-sm">
            <div className="container-custom h-28 flex items-center justify-between">

                {/* LOGO con enlace al inicio */}
                <div className="flex items-center">
                    <Link href="/" className="group cursor-pointer">
                        <CldImage
                            width="260"
                            height="80"
                            src="Group-2-20_nh0md7"
                            alt="Logo Soluciones Energéticas"
                            className="object-contain h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                </div>

                {/* NAVEGACIÓN DESKTOP */}
                <div className="hidden md:flex items-center gap-12">
                    <nav className="flex items-center gap-10 text-lg">
                        <Link href="/" className={getLinkStyles("/")}>Inicio</Link>
                        <Link href="/sobre-nosotros" className={getLinkStyles("/sobre-nosotros")}>Sobre nosotros</Link>
                        <Link href="/colaboradores" className={getLinkStyles("/colaboradores")}>Colaboradores</Link>
                        <Link href="/faqs" className={getLinkStyles("/faqs")}>FAQs</Link>
                        <Link href="/contacto" className={getLinkStyles("/contacto")}>Contáctanos</Link>
                    </nav>

                    <div className="h-10 w-[2px] bg-border mx-2"></div>

                    <Link href="/crm" className={getLinkStyles("/crm", true)}>
                        <FaUserCircle className="text-2xl group-hover:rotate-12 transition-transform" />
                        Acceso CRM
                    </Link>
                </div>

                {/* BOTÓN MÓVIL */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-3">
                        {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
                    </button>
                </div>
            </div>

            {/* MENÚ MÓVIL */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border animate-in fade-in slide-in-from-top-5 duration-300">
                    <nav className="flex flex-col p-10 gap-8 text-xl">
                        <Link href="/" onClick={() => setIsOpen(false)} className={getLinkStyles("/")}>Inicio</Link>
                        <Link href="/sobre-nosotros" onClick={() => setIsOpen(false)} className={getLinkStyles("/sobre-nosotros")}>Sobre nosotros</Link>
                        {/* ... otros links ... */}
                        <hr className="border-border border-t-2 my-4" />
                        <Link href="/crm" onClick={() => setIsOpen(false)} className={getLinkStyles("/crm", true) + " text-2xl"}>
                            <FaUserCircle /> Acceso CRM
                        </Link>
                    </nav>
                </div>
            )}
        </nav>
    );
}