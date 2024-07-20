export default function Messages() {
    return (
        <div className="w-screen h-full md:w-1/2 fixed right-0 top-0 bg-backgroundDark/20 flex flex-col items-center justify-start gap-6 pt-16 pb-3 px-8">
            <h3 className="text-start w-full">Nombre Elemento</h3>
            <div className="flex w-full h-max rounded-md border-2 overflow-hidden">
                <button className="p-2 border-r-[1px] w-1/2 hover:bg-cardDark">MENSAJE</button>
                <button className="p-2 border-l-[1px] w-1/2 hover:bg-cardDark">ARCHIVO</button>
            </div>
            <div className="w-full flex-1 relative flex flex-col gap-5">
                <label className="w-full h-max relative rounded-md overflow-hidden flex" htmlFor="mensaje">
                    <input type="text" placeholder="Escribir mensaje..." className="p-2 flex-1 outline-none text-cardDark" />
                    <button className="bg-cardDark/40 hover:bg-cardDark w-max h-full px-2">Enviar</button>
                </label>
                <div className="w-full flex-1">
                    <div className="w-full h-2/5 p-2 border-2 rounded-t-md">
                        <p>mensaje aqui</p>
                    </div>
                    <div className="flex w-full h-max rounded-b-md border-2 overflow-hidden">
                        <button className="p-2 border-r-[1px] w-1/2 hover:bg-cardDark">LIKE</button>
                        <button className="p-2 border-l-[1px] w-1/2 hover:bg-cardDark">RESPONDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}