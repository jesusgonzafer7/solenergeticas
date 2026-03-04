"use client";

import { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import type { CollaboratorFormData } from "@/types/collaborator";

const initialState: CollaboratorFormData = {
    companyName: "",
    contactEmail: "",
    description: "",
};

export default function PartnerForm() {
    const [form, setForm] = useState<CollaboratorFormData>(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Enviar al backend
        setSubmitted(true);
        setForm(initialState);
    };

    return (
        <Section className="bg-gray-50">
            <Container>
                <h2 className="text-3xl font-bold mb-8">¿Quieres ser colaborador?</h2>
                {submitted ? (
                    <p className="text-green-600 font-semibold text-lg">
                        ¡Gracias! Nos pondremos en contacto contigo pronto.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg">
                        <Input
                            label="Nombre de la empresa"
                            name="companyName"
                            type="text"
                            placeholder="Tu empresa"
                            value={form.companyName}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            label="Email de contacto"
                            name="contactEmail"
                            type="email"
                            placeholder="contacto@empresa.com"
                            value={form.contactEmail}
                            onChange={handleChange}
                            required
                        />
                        <Textarea
                            label="Descripción de la colaboración"
                            name="description"
                            placeholder="Cuéntanos cómo podríamos colaborar..."
                            rows={4}
                            value={form.description}
                            onChange={handleChange}
                        />
                        <Button type="submit">Enviar solicitud</Button>
                    </form>
                )}
            </Container>
        </Section>
    );
}
