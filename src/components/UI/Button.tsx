'use client'
export default function Button({text,type, onClick}: {text: string, type: "submit" | "reset" | "button" | undefined, onClick?: () => void}) {
    return (
        <button onClick={onClick} className=" w-full p-3 bg-slate-200 text-black font-semibold hover:bg-slate-300 rounded-sm" type={type}>{text}</button>
    )
}