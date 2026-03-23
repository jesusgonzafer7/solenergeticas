"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

/* 🔹 Tipado EXACTO según Figma */
type FormValues = {
    name: string;
    surname: string;
    company: string;
    email: string;
    phone: string;
    activity: string;
    region: string;
    contracts: string;
    message: string;
    file: FileList;
};

export default function CollaboratorForm() {
    /* 🔹 Estado para feedback del envío (igual que en ContactForm) */
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    /* 🔹 Configuración de react-hook-form */
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    /* 🔹 Función de envío */
    const onSubmit = async (data: FormValues) => {
        setStatus("loading");

        try {
            const res = await fetch("/api/collaborator", {
                method: "POST",
                headers: { "Content-Type": "application/json" },

                /* 👇 aquí solo enviamos los datos del formulario */
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                reset(); // limpia el formulario
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
                {/* 🔹 CARD PRINCIPAL (misma base que ContactForm para coherencia global) */}
                <div className="bg-surface rounded-lg shadow-md border border-border p-8 relative overflow-hidden">

                    {/* 🌊 DECORACIÓN SUPERIOR reutilizada */}
                    <div className="absolute top-0 left-0 w-full overflow-hidden rounded-t-lg">
                        <svg viewBox="0 0 1440 200" className="w-full h-32" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="var(--color-accent)" />
                                    <stop offset="100%" stopColor="var(--color-accent)" />
                                </linearGradient>
                            </defs>

                            <path
                                d="M0,80 
                C240,160 480,0 720,80 
                C960,160 1200,40 1440,100 
                L1440,0 
                L0,0 
                Z"
                                fill="url(#waveGradient)"
                                opacity="0.25"
                            />
                        </svg>
                    </div>

                    {/* 🔹 CONTENIDO CENTRAL (aquí cambiamos respecto al ContactForm) */}
                    <div className="relative max-w-3xl mx-auto flex flex-col gap-8">

                        {/* 🔹 HEADER del formulario */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-text mb-2">
                                Trabaja con nosotros
                            </h2>
                            <p className="text-muted max-w-xl mx-auto">
                                Únete a nuestra red de colaboradores.
                            </p>
                        </div>

                        {/* 🔹 FORMULARIO */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-5 bg-background p-6 rounded-lg border border-border shadow-sm"
                        >
                            {/* 🧾 GRID DE INPUTS (2 columnas como en Figma) */}
                            <div className="grid md:grid-cols-2 gap-4">

                                {/* 🔹 Nombre */}
                                <div>
                                    <Input
                                        label="Nombre"
                                        placeholder="Nombre"
                                        {...register("name", {
                                            required: "El nombre es obligatorio",
                                        })}
                                    />
                                    {errors.name && (
                                        <p className="text-accent text-sm">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* 🔹 Apellidos */}
                                <Input
                                    label="Apellidos"
                                    placeholder="Apellidos"
                                    {...register("surname")}
                                />

                                {/* 🔹 Compañía actual */}
                                <Input
                                    label="Compañía actual"
                                    placeholder="Empresa"
                                    {...register("company")}
                                />

                                {/* 🔹 Email */}
                                <div>
                                    <Input
                                        label="Correo electrónico"
                                        type="email"
                                        placeholder="tu@email.com"
                                        {...register("email", {
                                            required: "El email es obligatorio",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Email no válido",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-accent text-sm">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* 🔹 Teléfono */}
                                <Input
                                    label="Teléfono"
                                    placeholder="Teléfono"
                                    {...register("phone")}
                                />

                                {/* 🔹 Actividad principal */}
                                <Input
                                    label="Actividad principal"
                                    placeholder="Ej: Comercial, instalador..."
                                    {...register("activity")}
                                />

                                {/* 🔹 Área */}
                                <Input
                                    label="Área de España"
                                    placeholder="Zona geográfica"
                                    {...register("region")}
                                />

                                {/* 🔹 Contratos */}
                                <Input
                                    label="Contratos mensuales"
                                    placeholder="Número aproximado"
                                    {...register("contracts")}
                                />
                            </div>

                            {/* 📝 MENSAJE (fuera del grid como en el diseño) */}
                            <Textarea
                                label="Mensaje"
                                placeholder="Cuéntanos más sobre tu perfil..."
                                {...register("message")}
                            />

                            {/* 📎 SUBIDA DE CV */}
                            <div>
                                <label className="border-2 border-dashed border-border rounded-md p-6 text-center cursor-pointer hover:bg-surface transition block">
                                    <input
                                        type="file"
                                        className="hidden"
                                        {...register("file")}
                                    />
                                    <p className="text-sm text-muted">
                                        Sube tu CV
                                    </p>
                                </label>
                            </div>

                            {/* 🔵 BOTÓN centrado como en Figma */}
                            <div className="flex justify-center">
                                <Button type="submit" disabled={status === "loading"}>
                                    {status === "loading" ? "Enviando..." : "Enviar"}
                                </Button>
                            </div>

                            {/* 🔹 FEEDBACK visual */}
                            {status === "success" && (
                                <p className="text-primary font-medium text-center">
                                    ¡Solicitud enviada con éxito!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-accent font-medium text-center">
                                    Error al enviar. Inténtalo de nuevo.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
}