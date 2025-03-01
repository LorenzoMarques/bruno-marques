import { useState } from "react";

export default function useHeader() {
    const [menuVisible, setMenuVisible] = useState(false);

    const options = [
        { label: "SOBRE", value: "sobre" },
        { label: "DEPOIMENTOS", value: "depoimentos" },
        { label: "CONTATO", value: "contato" },
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