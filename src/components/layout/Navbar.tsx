import Link from "next/link";

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/colaboradores", label: "Colaboradores" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-bold text-green-600">
                    SolEnergéticas
                </Link>
                <ul className="flex gap-6">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
