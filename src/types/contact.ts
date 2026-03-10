export type ContactFormData = {
    name: string
    lastName: string
    email: string
    phone: string
    file?: File | null // opcional, si el usuario no sube archivo
    acceptedPrivacyPolicy: boolean
    planType: "fija" | "indexada" // nuevo campo para seleccionar tarifa
}