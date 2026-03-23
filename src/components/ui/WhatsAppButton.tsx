import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

// Cambia este número cuando lo tengas: "34612345678" (país + número sin +)
const WHATSAPP_NUMBER = "";

export default function WhatsAppButton() {
    const href = WHATSAPP_NUMBER
        ? `https://wa.me/${WHATSAPP_NUMBER}`
        : "https://wa.me/";

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contáctanos por WhatsApp"
            className="
                fixed bottom-6 left-6 z-50
                flex items-center justify-center
                w-14 h-14 rounded-full
                bg-[#25D366] text-white
                shadow-lg hover:shadow-xl
                hover:scale-110 active:scale-95
                transition-all duration-300
            "
        >
            <FaWhatsapp className="text-3xl" />
        </Link>
    );
}
