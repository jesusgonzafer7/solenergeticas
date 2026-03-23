import { NextRequest, NextResponse } from "next/server";
import { sendCollaboratorEmail } from "@/lib/mail";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const name = formData.get("name") as string;
        const surname = formData.get("surname") as string;
        const company = formData.get("company") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const activity = formData.get("activity") as string;
        const region = formData.get("region") as string;
        const contracts = formData.get("contracts") as string;
        const message = formData.get("message") as string;
        const file = formData.get("file") as File | null;

        if (!name || !email) {
            return NextResponse.json(
                { error: "El nombre y el email son obligatorios." },
                { status: 400 }
            );
        }

        let attachment;
        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());
            attachment = { filename: file.name, content: buffer };
        }

        await sendCollaboratorEmail({ name, surname, company, email, phone, activity, region, contracts, message, attachment });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error en API de colaboradores:", error);
        return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
    }
}
