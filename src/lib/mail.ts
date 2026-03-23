import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: { rejectUnauthorized: false },
});

// ─── Formulario de Contacto ───────────────────────────────────────────────────

interface ContactEmailData {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
    pricingType: string;
    attachment?: { filename: string; content: Buffer };
}

export async function sendContactEmail(data: ContactEmailData) {
    const { name, surname, email, phone, message, pricingType, attachment } = data;

    await transporter.sendMail({
        from: `"SolEnergéticas Web" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL,
        replyTo: email,
        subject: `Nuevo contacto: ${name} ${surname}`,
        html: `
            <h2 style="color:#1a1a2e;">Nuevo mensaje de contacto</h2>
            <table cellpadding="6" style="font-family:sans-serif;font-size:14px;">
                <tr><td><strong>Nombre:</strong></td><td>${name} ${surname}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
                <tr><td><strong>Teléfono:</strong></td><td>${phone || "—"}</td></tr>
                <tr><td><strong>Tipo de tarifa:</strong></td><td>${pricingType === "fixed" ? "Precio Fijo" : "Precio Indexado"}</td></tr>
            </table>
            <h3 style="color:#1a1a2e;margin-top:16px;">Mensaje:</h3>
            <p style="font-family:sans-serif;font-size:14px;">${message || "—"}</p>
        `,
        attachments: attachment ? [{ filename: attachment.filename, content: attachment.content }] : [],
    });
}

// ─── Formulario de Colaboradores ─────────────────────────────────────────────

interface CollaboratorEmailData {
    name: string;
    surname: string;
    company: string;
    email: string;
    phone: string;
    activity: string;
    region: string;
    contracts: string;
    message: string;
    attachment?: { filename: string; content: Buffer };
}

export async function sendCollaboratorEmail(data: CollaboratorEmailData) {
    const { name, surname, company, email, phone, activity, region, contracts, message, attachment } = data;

    await transporter.sendMail({
        from: `"SolEnergéticas Web" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL,
        replyTo: email,
        subject: `Nuevo colaborador: ${name} ${surname}`,
        html: `
            <h2 style="color:#1a1a2e;">Nueva solicitud de colaboración</h2>
            <table cellpadding="6" style="font-family:sans-serif;font-size:14px;">
                <tr><td><strong>Nombre:</strong></td><td>${name} ${surname}</td></tr>
                <tr><td><strong>Empresa:</strong></td><td>${company || "—"}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
                <tr><td><strong>Teléfono:</strong></td><td>${phone || "—"}</td></tr>
                <tr><td><strong>Actividad:</strong></td><td>${activity || "—"}</td></tr>
                <tr><td><strong>Área:</strong></td><td>${region || "—"}</td></tr>
                <tr><td><strong>Contratos mensuales:</strong></td><td>${contracts || "—"}</td></tr>
            </table>
            <h3 style="color:#1a1a2e;margin-top:16px;">Mensaje:</h3>
            <p style="font-family:sans-serif;font-size:14px;">${message || "—"}</p>
        `,
        attachments: attachment ? [{ filename: attachment.filename, content: attachment.content }] : [],
    });
}
