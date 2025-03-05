import Image from "next/image";

interface CardProps {
    className?: string;
    imgPath: string;
    title: string;
    description: string;
}

export function Card({ className, imgPath, title, description }: CardProps) {
    return (
        <div className={`bg-[--secondary-font-color] w-[160px] h-[175px] p-[20px] rounded-md lg:w-[255px] lg:h-[255] ${className}`}>
            <div className="relative w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] mb-[5px] lg:mb-[10px]">
                <Image src={imgPath} alt="img" fill />
            </div>
            <h3 className="text-[16px] mb-[5px] lg:mb-[10px] text-[--primary-color] font-bold lg:text-[22px]">
                {title}
            </h3>

            <p className="text-[9px] lg:text-[14px]">
                {description}
            </p>
        </div>
    )
}