export type CollaboratorFormData = {
    name: string
    lastName: string
    company: string
    email: string
    phone: string
    mainActivity: string
    area: string
    monthlyContracts: string
    message: string
    file?: File | null // opcional, si el usuario no sube CV
}