import PartnersAccess from "@/components/sections/colaboradores/PartnersAccess";
import PartnersGrid from "@/components/sections/colaboradores/PartnersGrid";
import PartnersCommitment from "@/components/sections/colaboradores/PartnersCommitment";
import Metrics from "@/components/sections/home/Metrics";

export default function ColaboradoresPage() {
    return (
        <main className="min-h-screen bg-[#E5E7EB]">
            {/* SEO oculto */}
            <h1 className="sr-only">Red de Colaboradores y Proveedores - SolEnergéticas</h1>

            {/* 1. Cabecera con botón de contacto */}
            <PartnersAccess />

            {/* 2. Cuadrícula de Logos a color */}
            <PartnersGrid />

            {/* 3. Métricas específicas de esta página */}
            <Metrics tipo="colaboradores" />

            {/* 4. Sección de texto con imagen de paneles en marco blanco */}
            <PartnersCommitment />
        </main>
    );
}