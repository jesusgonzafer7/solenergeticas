import PartnersGrid from "@/components/sections/colaboradores/PartnersGrid";
import PartnerForm from "@/components/sections/colaboradores/PartnerForm";

export default function ColaboradoresPage() {
    return (
        <main>
            <h1 className="sr-only">Colaboradores</h1>
            <PartnersGrid />
            <PartnerForm />
        </main>
    );
}
