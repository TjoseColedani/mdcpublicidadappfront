'use client'
import { useState } from "react";
import NavBar from "./NavBar";
import { useSession } from "next-auth/react";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNavOpen = () => {
        setIsNavOpen(!isNavOpen)
    }
    const { data: session } = useSession()

    return (
        <header className=' bg-backgroundDark dark:bg-background z-40 flex items-center justify-end fixed top-0 left-0 w-full h-12 pr-2'>
            <button className='z-50 text-background dark:text-backgroundDark' onClick={handleNavOpen}><img src={session?.user?.image ? session?.user?.image : undefined} className="w-8 h-8 rounded-full object-cover border-2 border-cardDark" /></button>
            <NavBar isNavOpen={isNavOpen} />
        </header>
    )
}