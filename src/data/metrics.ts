export type Metric = {
    category: 'inicio' | 'colaboradores'; // Añadido el tipo exacto
    label: string;
    value: string;
};

export const metrics: Metric[] = [
    // Métricas para la Home (inicio)
    { category: 'inicio', label: "Instalaciones realizadas", value: "500" },
    { category: 'inicio', label: "Años de experiencia", value: "10" },
    { category: 'inicio', label: "Clientes satisfechos", value: "98" },
    { category: 'inicio', label: "kWh generados", value: "2000" },

    // Métricas para Colaboradores
    { category: 'colaboradores', label: "Colaboradores activos", value: "45" },
    { category: 'colaboradores', label: "Proveedores oficiales", value: "12" },
    { category: 'colaboradores', label: "Comerciales en red", value: "20" },
    { category: 'colaboradores', label: "Soporte técnico", value: "24" },
];