import ButtonTheme from "@/components/UI/ButtonTheme";

export default function Trabajos() {

    return (
        <main className=" min-h-screen dark:bg-zinc-800 bg-slate-300">
            <header>
                <nav className=" bg-slate-800 dark:bg-slate-400 h-12 flex items-center justify-end px-5">
                    <ButtonTheme />
                </nav>
            </header> 
            <div className=" flex flex-col items-center p-5">
                <h1 className=" text-4xl font-semibold">MDC Trabajos</h1>
            </div>
            <div className="flex w-full justify-around">
                <button>Agregar Elemento</button>
                <button>Buscar</button>
                <button>Persona</button>
                <button>Filtrar</button>
                <button>Ordenar</button>
                <button>Ocultar</button>
            </div>
        </main>
    )
}      