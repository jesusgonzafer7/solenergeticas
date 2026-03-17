import PartnersAccess from "@/components/sections/colaboradores/PartnersAccess";
import ContactForm from "@/components/sections/contacto/ContactForm";
import ContactInfo from "@/components/sections/contacto/ContactInfo";

export default function ContactoPage() {
    return (
        <main>
            <h1 className="sr-only">Contacto</h1>
            <ContactInfo />
            <ContactForm />
            <PartnersAccess />
        </main>
    );
}
