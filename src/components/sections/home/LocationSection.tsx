import Section from "@/components/ui/Section";
import Container from "@/components/layout/Container";
// Importación de React Icons (usando Feather Icons como ejemplo de estilo limpio)
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const contactInfo = [
    { icon: FiMapPin, label: "Dirección", value: "Vigo, Pontevedra, Galicia" },
    { icon: FiPhone, label: "Teléfono", value: "+34 986 000 000" },
    { icon: FiMail, label: "Email", value: "info@solenergeticas.com" },
    { icon: FiClock, label: "Horario", value: "Lun–Vie: 9:00 – 18:00" },
];

export default function LocationSection() {
    const vigoEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47265.95543884813!2d-8.761858564175394!3d42.22572566734139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f62698189c193%3A0x11441db1174bc59f!2sVigo%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1709123456789!5m2!1ses!2ses";

    return (
        <Section className="bg-white">
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Encabezado */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary leading-tight tracking-tight uppercase">
                            Encuéntranos <span className="text-accent">en Vigo</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-accent mx-auto mt-4 rounded-full" />
                    </div>

                    {/* Layout: panel de contacto + mapa */}
                    <div className="flex flex-col lg:flex-row gap-8 items-stretch">

                        {/* Panel de contacto */}
                        <div className="lg:w-80 shrink-0 bg-primary rounded-2xl p-8 flex flex-col justify-center gap-8 shadow-xl">
                            <h3 className="text-white font-bold text-xl mb-2">Información de contacto</h3>

                            <div className="flex flex-col gap-6">
                                {contactInfo.map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="flex items-start gap-4">
                                        {/* Contenedor del icono con fondo suave y icono BLANCO */}
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon size={20} className="text-white" />
                                        </div>

                                        <div>
                                            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                                                {label}
                                            </p>
                                            <p className="text-white text-sm md:text-base font-semibold mt-1 leading-tight">
                                                {value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mapa */}
                        <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                            <iframe
                                src={vigoEmbedUrl}
                                width="100%"
                                height="100%"
                                className="border-0 min-h-[400px]"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa de Vigo"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}