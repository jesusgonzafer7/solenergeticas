"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";

/* 🔹 Tipado del formulario */
type FormValues = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
    file: FileList;
    privacy: boolean;
};

export default function ContactForm() {
    /* 🔹 Estado para feedback del envío */
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    /* 🔹 Estado del selector (Precio fijo / indexado) */
    const [pricingType, setPricingType] = useState<"fixed" | "indexed">("fixed");

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
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },

                /* 👇 combinamos datos del form + selector */
                body: JSON.stringify({
                    ...data,
                    pricingType,
                }),
            });

            if (res.ok) {
                setStatus("success");
                reset(); // limpia formulario
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
                {/* 🔹 CARD PRINCIPAL */}
                <div className="bg-surface rounded-lg shadow-md border border-border p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full overflow-hidden rounded-t-lg">
                        <svg
                            viewBox="0 0 1440 200"
                            className="w-full h-32"
                            preserveAspectRatio="none"
                        >
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

                    {/* 🔹 Layout en 2 columnas */}
                    <div className="grid md:grid-cols-2 gap-10 items-start relative">
                        {/* ===================== */}
                        {/* 🧾 COLUMNA IZQUIERDA */}
                        {/* ===================== */}
                        <div className="flex flex-col gap-6">
                            {/* 🔹 Texto principal */}
                            <div>
                                <h2 className="text-3xl font-bold text-text mb-2">
                                    Empieza a pagar solo lo que realmente necesitas.
                                </h2>
                                <p className="text-muted">
                                    Te ayudamos a elegir la mejor tarifa. Sin letra pequeña.
                                </p>
                            </div>

                            {/* 🔘 + 📊 BLOQUE UNIFICADO */}
                            <div className="bg-background border border-border rounded-lg p-5 shadow-md flex flex-col gap-5 w-fit">

                                {/* 🔘 SELECTOR */}
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setPricingType("fixed")}
                                        className={`
                                        px-4 py-2 rounded-md text-sm font-medium transition flex items-center gap-2
                                        ${pricingType === "fixed"
                                                ? "bg-primary text-white shadow-sm"
                                                : "bg-surface text-text border border-border hover:bg-background"
                                            }
                                        `}
                                    >
                                        ✓ Precio Fijo
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setPricingType("indexed")}
                                        className={`
                                        px-4 py-2 rounded-md text-sm font-medium transition flex items-center gap-2
                                        ${pricingType === "indexed"
                                                ? "bg-primary text-white shadow-sm"
                                                : "bg-surface text-text border border-border hover:bg-background"
                                            }
                                        `}
                                    >
                                        ✓ Precio Indexado
                                    </button>
                                </div>

                                {/* 📈 LÍNEA + CURVA */}
                                <div className="flex items-center gap-4 w-full">

                                    {/* línea izquierda */}
                                    <div className="h-0.5 flex-1 bg-primary/40 rounded-full" />

                                    {/* curva SVG flexible */}
                                    <svg
                                        viewBox="0 0 100 24"
                                        preserveAspectRatio="none"
                                        className="flex-1 h-6 text-primary"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 12 
                                            C12.5 12, 12.5 2, 25 2 
                                            C37.5 2, 37.5 22, 50 22 
                                            C62.5 22, 62.5 2, 75 2 
                                            C87.5 2, 87.5 12, 100 12"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                    </svg>

                                </div>

                                {/* 📊 TEXTOS */}
                                <div className="flex justify-between text-sm text-muted text-center">
                                    <div className="flex-1">
                                        <p>Precio estable</p>
                                        <p>cada mes</p>
                                    </div>

                                    <div className="flex-1">
                                        <p>Precio según</p>
                                        <p>mercado</p>
                                    </div>
                                </div>

                            </div>

                            {/* 🔹 Beneficios */}
                            <ul className="flex flex-col gap-2 text-sm text-muted">
                                <li>✓ Respuesta en menos de 24h</li>
                                <li>✓ Sin compromiso</li>
                                <li>✓ Asesoramiento gratuito</li>
                            </ul>
                        </div>

                        {/* ===================== */}
                        {/* 🧾 FORMULARIO DERECHA */}
                        {/* ===================== */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-4 bg-background p-6 rounded-lg border border-border shadow-sm"
                        >
                            {/* 🔹 Nombre + Apellidos */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Input
                                        label="Nombre"
                                        placeholder="Nombre"
                                        {...register("name", { required: "El nombre es obligatorio" })}
                                    />
                                    {errors.name && (
                                        <p className="text-accent text-sm">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        label="Apellidos"
                                        placeholder="Apellidos"
                                        {...register("surname")}
                                    />
                                </div>
                            </div>

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
                                    <p className="text-accent text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            {/* 🔹 Teléfono */}
                            <Input
                                label="Teléfono"
                                placeholder="Tu teléfono"
                                {...register("phone")}
                            />

                            {/* 📎 Upload */}
                            <div>
                                <label className="border-2 border-dashed border-border rounded-md p-6 text-center cursor-pointer hover:bg-surface transition block">
                                    <input
                                        type="file"
                                        className="hidden"
                                        {...register("file")}
                                    />
                                    <p className="text-sm text-muted">
                                        Arrastra tu factura o haz clic para subir
                                    </p>
                                </label>
                            </div>

                            {/* ☑️ Checkbox */}
                            <div>
                                <label className="flex items-start gap-2 text-sm text-muted">
                                    <input
                                        type="checkbox"
                                        className="mt-1"
                                        {...register("privacy", {
                                            required: "Debes aceptar la política",
                                        })}
                                    />
                                    Acepto la política de privacidad
                                </label>
                                {errors.privacy && (
                                    <p className="text-accent text-sm">
                                        {errors.privacy.message}
                                    </p>
                                )}
                            </div>

                            {/* 🔵 Botón */}
                            <Button type="submit" disabled={status === "loading"}>
                                {status === "loading"
                                    ? "Enviando..."
                                    : "Quiero optimizar mi energía"}
                            </Button>

                            {/* 🔹 Feedback */}
                            {status === "success" && (
                                <p className="text-primary font-medium">
                                    ¡Mensaje enviado con éxito!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-accent font-medium">
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