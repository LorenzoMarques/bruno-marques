interface LineProps {
    className?: string
}

export default function Line({ className }: LineProps) {
    return <div className={`w-full bg-[--primary-color] h-[2px] ${className}`} />
}