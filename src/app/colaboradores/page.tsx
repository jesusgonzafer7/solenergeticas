import PartnersGrid from "@/components/sections/colaboradores/PartnersGrid";
import PartnersAccess from "@/components/sections/colaboradores/PartnersAccess";
import Metrics from "@/components/sections/home/Metrics";

export default function ColaboradoresPage() {
    return (
        <main>
            <h1 className="sr-only">Colaboradores</h1>
            <PartnersAccess />
            <PartnersGrid />
            <Metrics />
            
        </main>
    );
}
