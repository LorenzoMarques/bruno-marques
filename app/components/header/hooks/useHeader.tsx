import { useEffect, useRef, useState } from "react";

export default function useHeader() {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setMenuVisible(false);
            }
        }

        if (menuVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuVisible]);

    const options = [
        { label: "SOBRE", value: "about" },
        { label: "DEPOIMENTOS", value: "testimonials" },
        { label: "CONTATO", value: "contact" },
    ];

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return {
        menuVisible,
        toggleMenu,
        options,
        menuRef,
        buttonRef
    }
} 