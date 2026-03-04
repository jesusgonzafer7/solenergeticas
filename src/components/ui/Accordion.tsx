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
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-green-600 transition-colors"
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <span className="ml-4 text-xl">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
                <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>
            )}
        </div>
    );
}
