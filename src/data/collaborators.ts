export type Collaborator = {
    id: number;
    name: string;
    description: string;
};

export const collaborators: Collaborator[] = [
    {
        id: 1,
        name: "SunPower España",
        description: "Fabricante líder de paneles solares de alta eficiencia con garantía de 25 años.",
    },
    {
        id: 2,
        name: "EnergyBank",
        description: "Soluciones de financiación a medida para que tu instalación se pague sola con el ahorro.",
    },
    {
        id: 3,
        name: "GreenInstall",
        description: "Nuestra red de instaladores certificados con sede en Galicia y servicio en toda la península.",
    },
];