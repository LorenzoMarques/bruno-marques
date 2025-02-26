import { InputSwitch } from "primereact/inputswitch";
import { MouseEventHandler } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface SwitchThemeButtonProps {
    theme: string;
    toggleTheme: MouseEventHandler<HTMLDivElement>;
    className: string
}

export default function SwitchThemeButton({ theme, toggleTheme, className }: SwitchThemeButtonProps) {
    return <div className={`flex items-center space-x-2 ml-10 ${className}`}>
        <div className="flex items-center space-x-2">
            <div className="relative flex items-center">
                <InputSwitch
                    checked={theme === 'dark'}
                    className="hidden"
                />
                <div
                    onClick={toggleTheme}
                    className={`w-12 h-6 rounded-full ${theme === 'dark' ? 'bg-blue-500' : 'bg-gray-400'} flex items-center cursor-pointer`}
                >
                    <div
                        className={`w-6 h-6 flex justify-center items-center transition-all ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                            }`}
                    >
                        {theme === 'dark' ? (
                            <FaMoon className="text-white text-xl" />
                        ) : (
                            <FaSun className="text-black text-xl" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
}