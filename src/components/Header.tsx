'use client'
import { useState } from "react";
import NavBar from "./NavBar";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNavOpen = () => {
        setIsNavOpen(!isNavOpen)
    }
    return (
        <header className=' bg-backgroundDark dark:bg-background z-40 flex items-center justify-end fixed top-0 left-0 w-full h-12'>
            <button className='z-50 text-background dark:text-backgroundDark' onClick={handleNavOpen}>Cerrar o Abrir navbar</button>
            <NavBar isNavOpen={isNavOpen} />
        </header>
    )
}