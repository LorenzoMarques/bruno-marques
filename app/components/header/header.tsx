"use client"
import { ListBox } from "primereact/listbox";
import useHeader from "./hooks/useHeader";
import useTheme from "./hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import { InputSwitch } from 'primereact/inputswitch';
import SwitchThemeButton from "./switchThemeButton";


export default function Header() {
    const { toggleMenu, options, menuVisible } = useHeader()
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="w-full flex justify-end items-center p-4 fixed">

            <SwitchThemeButton theme={theme} toggleTheme={toggleTheme} className="block lg:hidden mr-10" />


            <button
                className="lg:hidden flex flex-col justify-between items-center w-8 h-6 p-1"
                onClick={toggleMenu}
            >
                <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[--foreground] rounded-full"></span>
                    <span className="w-2 h-2 bg-[--foreground] rounded-full"></span>
                    <span className="w-2 h-2 bg-[--foreground] rounded-full"></span>
                </div>
            </button>

            <nav className="hidden lg:flex space-x-8">
                <button>CONTATO</button>
                <button>DEPOIMENTOS</button>
                <button>SOBRE</button>
                <button>TERMOS</button>
            </nav>

            {menuVisible && (
                <div className="lg:hidden absolute top-12 right-4 bg-[--background] p-4 rounded-lg shadow-lg shadow-[--shadows] w-40 ">
                    <ListBox
                        options={options}
                        onChange={(e) => console.log("Opção selecionada:", e.value)}
                    />
                </div>
            )}

            <SwitchThemeButton theme={theme} toggleTheme={toggleTheme} className="hidden lg:block" />
        </header>
    );
}
