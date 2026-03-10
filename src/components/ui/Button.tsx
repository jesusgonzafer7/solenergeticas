import { ButtonHTMLAttributes } from "react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
}

// ─── Mapas de clases ──────────────────────────────────────────────────────────

const variantClasses: Record<Variant, string> = {
    primary: "bg-primary   text-light  hover:bg-accent          focus:ring-accent",
    secondary: "bg-surface   text-text   hover:bg-border          focus:ring-border",
    outline: "border border-primary text-primary hover:bg-primary hover:text-light focus:ring-primary",
    ghost: "bg-transparent text-primary hover:bg-primary/10   focus:ring-primary",
    danger: "bg-red-600    text-white  hover:bg-red-700        focus:ring-red-500",
};

const sizeClasses: Record<Size, string> = {
    sm: "px-3 py-1.5  text-sm  rounded-sm",
    md: "px-5 py-2.5  text-base rounded-md",
    lg: "px-7 py-3    text-lg  rounded-lg",
};

// ─── Componente ───────────────────────────────────────────────────────────────

export default function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={disabled}
            className={[
                // Base
                "inline-flex items-center justify-center font-semibold",
                "transition-colors duration-200 shadow-sm",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                // Variante y tamaño
                variantClasses[variant],
                sizeClasses[size],
                // Ancho completo
                fullWidth ? "w-full" : "",
                // Estado desactivado
                disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
                // Clases externas
                className,
            ].join(" ")}
            {...props}
        >
            {children}
        </button>
    );
}
