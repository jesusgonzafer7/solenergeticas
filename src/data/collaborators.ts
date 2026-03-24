export type Collaborator = {
    id: number;
    name: string;
    description: string;
    logoUrl: string;
};

export const collaborators: Collaborator[] = [
    {
        id: 1,
        name: "Ponto Solar",
        description: "Especialistas en instalaciones fotovoltaicas.",
        logoUrl: "https://res.cloudinary.com/ddiznbbma/image/upload/v1774341987/7b77ca1e-6f96-49f4-a30a-0fda4235e247.png",
    },
    {
        id: 2,
        name: "Eco Energía",
        description: "Soluciones sostenibles en Galicia.",
        logoUrl: "https://res.cloudinary.com/ddiznbbma/image/upload/v1774342033/7e2e304e-c9f8-49bf-a341-720c4fb97031.png",
    },
    {
        id: 3,
        name: "Sonnox",
        description: "Soporte técnico avanzado.",
        logoUrl: "https://res.cloudinary.com/ddiznbbma/image/upload/v1774342046/38e9a00a-b418-4ecc-b080-73d67204b7db.png",
    },
];