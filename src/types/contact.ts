export type ContactFormData = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
    pricingType: "fixed" | "indexed";
    privacy: boolean;
};