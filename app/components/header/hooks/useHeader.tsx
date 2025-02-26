import { useState } from "react";

export default function useHeader() {
    const [menuVisible, setMenuVisible] = useState(false);

    const options = [
        { label: "CONTATO", value: "contato" },
        { label: "DEPOIMENTOS", value: "depoimentos" },
        { label: "SOBRE", value: "sobre" },
        { label: "TERMOS", value: "termos" },
    ];

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return {
        menuVisible,
        toggleMenu,
        options
    }
} 