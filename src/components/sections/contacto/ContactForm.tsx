"use client";

import { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import type { ContactFormData } from "@/types/contact";

const initialState: ContactFormData = {
    name: "",
    email: "",
    message: "",
};

export default function ContactForm() {
    const [form, setForm] = useState<ContactFormData>(initialState);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("success");
                setForm(initialState);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <Section>
            <Container>
                <h2 className="text-3xl font-bold mb-8">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg">
                    <Input
                        label="Nombre"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <Textarea
                        label="Mensaje"
                        name="message"
                        placeholder="Escribe tu mensaje..."
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" disabled={status === "loading"}>
                        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                    {status === "success" && (
                        <p className="text-green-600 font-medium">¡Mensaje enviado con éxito!</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-600 font-medium">
                            Ha ocurrido un error. Inténtalo de nuevo.
                        </p>
                    )}
                </form>
            </Container>
        </Section>
    );
}
