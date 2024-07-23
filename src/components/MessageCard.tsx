export default function MessageCard() {
    return (
        <div className="h-max w-full">
            <div className="w-full h-max min-h-16 p-2 border-2 rounded-t-md relative max-h-40 overflow-y-auto overflow-x-hidden">
                <p className="w-full break-words">{`mensaje que generamos...`}</p>
            </div>
            <div className="flex w-full h-max rounded-b-md border-2 overflow-hidden">
                <button className="p-2 border-r-[1px] w-1/2 hover:bg-cardDark">LIKE</button>
                <button className="p-2 border-l-[1px] w-1/2 hover:bg-cardDark">RESPONDER</button>
            </div>
        </div>
    );
}
