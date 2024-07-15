"use client"
import { useEffect, useState } from "react";

export default function ButtonTheme() {


    const [theme, setTheme] = useState<string>(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    })

    const handleTheme = () => {
        setTheme(actualTheme => actualTheme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark');
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }
    }, [theme])


  return (
    <button
      onClick={handleTheme}
      className=' bg-zinc-800 w-24 h-10 rounded-full px-1 flex items-center justify-between transition-all border'>
      {theme === 'light' ? <h4 className=' p-2'>D</h4> : null}
      <input type="radio" checked={false} className=' bg-white w-14 h-8 rounded-md cursor-pointer' />
      {theme === 'dark' ? <h4 className=' p-2'>L</h4> : null}
    </button>
  )
}
