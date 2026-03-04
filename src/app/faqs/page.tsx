import { faqs } from "@/data/faqs";
import Accordion from "@/components/ui/Accordion";

export default function FaqsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold text-center mb-12">
                Preguntas Frecuentes
            </h1>
            <div className="w-full max-w-3xl">
                {faqs.map((faq, index) => (
                    <Accordion key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </main>
    );
}
