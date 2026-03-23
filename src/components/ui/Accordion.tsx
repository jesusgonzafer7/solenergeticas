"use client";

import { useState } from "react";

interface AccordionProps {
    question: string;
    answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                /* Cambiado hover:text-green-600 por hover:text-accent 
                   para usar tu azul vivo de los estilos.
                */
                className={`flex justify-between items-center w-full text-left font-semibold transition-colors duration-300
                    ${isOpen ? 'text-accent' : 'text-gray-800'} 
                    hover:text-accent`}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <span className={`ml-4 text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? "−" : "+"}
                </span>
            </button>

            {/* He añadido una pequeña transición lógica para que el texto 
                de la respuesta no aparezca de golpe 
            */}
            {isOpen && (
                <div className="overflow-hidden">
                    <p className="mt-3 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}