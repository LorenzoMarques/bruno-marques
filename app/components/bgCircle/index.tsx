interface BGCircleProps {
    size: string
}

export default function BGCircle({ size }: BGCircleProps) {
    return <div className={`rounded-full bg-[#6EA8FF] w-[${size}] h-[${size}] absolute z-[-1] opacity-[10%] left-1/2 transform -translate-x-1/2`} />

}