"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SlideBar() {

    const [isSlideOpen, setIsSlideOpen] = useState(false)

    const handleClick = () => {
        setIsSlideOpen(!isSlideOpen)
    }


    return (
        <aside className={`pl-5 py-16 w-2/3 md:w-1/6 ${!isSlideOpen ? "-translate-x-[93%]" : ""} fixed h-screen top-0 left-0 border-card border-r-2 flex items-center transition-all`}>

            <div className=' bg-card dark:bg-cardDark p-3 rounded-lg w-full h-full'>
                <h2 className=" w-full bg-primary rounded-md py-3 text-center text-2xl font-bold">Areas de trabajo</h2>
                <ul className="list-none p-3">
                    <li>
                        <Link href="#" className=" w-full h-max block px-4 py-2 text-sm text-white hover:bg-background hover:text-black">MDC Trabajos</Link>
                    </li>
                    <li>
                        <Link href="#" className=" w-full h-max block px-4 py-2 text-sm text-white hover:bg-background hover:text-black">Compras</Link>
                    </li>
                </ul>  
            </div>

            <button onClick={handleClick} className=' w-8 h-12 bg-cardDark dark:bg-card rounded-lg text-3xl font-semibold flex items-center justify-center translate-x-4'>
                {isSlideOpen ? "<" : ">"}
            </button>
        </aside>
    )
}