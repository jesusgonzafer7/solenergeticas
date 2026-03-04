import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";
import type { ContactFormData } from "@/types/contact";

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Todos los campos son obligatorios." },
                { status: 400 }
            );
        }

        await sendContactEmail({ name, email, message });

        return NextResponse.json(
            { success: true, message: "Mensaje enviado correctamente." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error en API de contacto:", error);
        return NextResponse.json(
            { error: "Error interno del servidor." },
            { status: 500 }
        );
    }
}
