export default function FilseSection() {
    return (
        <>
            <label className="w-full h-max relative rounded-md overflow-hidden flex" htmlFor="mensaje">
                <input type="text" placeholder="Escribir mensaje..." className="p-2 flex-1 outline-none text-cardDark" />
                <button className="bg-cardDark/40 hover:bg-cardDark w-max h-full px-2">Enviar</button>
            </label>
            <div className="w-full flex-1">
                <div className="w-full h-2/5 p-2 border-2 rounded-t-md">
                    <p>mensaje aqui</p>
                </div>
            </div>
        </>
    )
}