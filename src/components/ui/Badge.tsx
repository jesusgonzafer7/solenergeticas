interface BadgeProps {
    label: string;
    variant?: "green" | "yellow" | "gray" | "blue";
}

const variants = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-700",
    blue: "bg-blue-100 text-blue-700",
};

export default function Badge({ label, variant = "green" }: BadgeProps) {
    return (
        <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}
        >
            {label}
        </span>
    );
}
