import MessageCard from "./MessageCard";

export default function MessagesSection() {
    return (
        <>
            <label className="w-full h-max relative rounded-md flex" htmlFor="mensaje">
                <input type="text" placeholder="Escribir mensaje..." className="p-2 flex-1 outline-none text-cardDark" />
                <button className="bg-cardDark/40 hover:bg-cardDark w-max h-full px-2">Enviar</button>
            </label>
            <div className="w-full h-1/2 flex flex-col gap-3 ">
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
            </div>
        </>
    )
}