import { useState } from "react";
import MessagesSection from "./MessageSection";
import FileSection from "./FileSection";

export default function Messages({ setMessageOpen }: { setMessageOpen: () => void }) {
    const [section, setSection] = useState('messages')
    return (
        <div className="w-screen h-full md:w-1/2 fixed right-0 top-0 bg-backgroundDark/80 flex flex-col items-center justify-start gap-6 pt-16 pb-3 px-8">
            <div className="flex justify-between px-2 w-full">
                <h3 className="text-start w-full">Nombre Elemento</h3>
                <button className="font-bold w-max h-max" onClick={setMessageOpen}>X</button>
            </div>
            <div className="flex w-full h-max rounded-md border-2 overflow-hidden relative">
                <button className={`p-2 border-r-[1px] w-1/2 hover:bg-cardDark ${section === 'messages' ? 'bg-cardDark': ''}`} onClick={()=>{
                    setSection(prev => prev = 'messages')
                }}>MENSAJE</button>
                <button className={`p-2 border-r-[1px] w-1/2 hover:bg-cardDark ${section === 'files' ? 'bg-cardDark': ''}`} onClick={()=>{
                    setSection(prev => prev = 'files')
                }}>ARCHIVO</button>
            </div>
            <div className="w-full flex-1 relative flex flex-col gap-5 overflow-auto">
                {section === 'messages' ? <MessagesSection/>: <FileSection/>}
            </div>
        </div>
    )
}