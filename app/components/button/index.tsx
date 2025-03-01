"use client"

interface ButtonProps {
    onclick?: () => void;
    text?: string;
    className?: string;
}

export function Button({ onclick, text, className }: ButtonProps) {
    return <button
        className={`bg-[--primary-color] text-[--secondary-font-color] rounded-lg p-[10px] ${className}`}
        onClick={onclick}>
        {text}
    </button>
}