import ButtonTheme from "./UI/ButtonTheme";

export default function NavBar({ isNavOpen }: { isNavOpen: boolean }) {
    const isOpen = isNavOpen ? 'w-[50vh] h-[80vh] opacity-1' : 'w-[50vh] h-0 opacity-0'
    return (
        <nav className={` ${isOpen} transition-all flex flex-col absolute top-0 right-0 items-center justify-around px-5 pt-8 bg-backgroundDark dark:bg-background`} >
            <ul className=' flex flex-col w-full h-3/4 items-center justify-center gap-4 dark:text-backgroundDark font-semibold'>
                <li className="hover:bg-background dark:hover:bg-backgroundDark w-full dark:hover:text-background hover:text-backgroundDark p-2 cursor-pointer">Mi Perfil</li>
                <li className="hover:bg-background dark:hover:bg-backgroundDark w-full dark:hover:text-background hover:text-backgroundDark p-2 cursor-pointer">Buscar</li>
                <li className="hover:bg-background dark:hover:bg-backgroundDark w-full dark:hover:text-background hover:text-backgroundDark p-2 cursor-pointer">Notificaciones</li>
                <li className="hover:bg-background dark:hover:bg-backgroundDark w-full dark:hover:text-background hover:text-backgroundDark p-2 cursor-pointer">Invitar Miembro</li>
                <li className="hover:bg-background dark:hover:bg-backgroundDark w-full dark:hover:text-background hover:text-backgroundDark p-2 cursor-pointer">Archivo</li>
                <li className="hover:bg-background dark:hover:bg-backgroundDark w-full dark:hover:text-background hover:text-backgroundDark p-2 cursor-pointer">Papelera</li>
                <li className="hover:bg-background dark:hover:bg-backgroundDark w-full dark:hover:text-background hover:text-backgroundDark p-2 cursor-pointer">Cerrar Sesión</li>
            </ul>
            <ButtonTheme />
        </nav>
    )
} 