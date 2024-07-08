import SlideBar from '@/components/SlideBar'
import ButtonTheme from '@/components/UI/ButtonTheme'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className=" min-h-screen bg-background dark:bg-backgroundDark">
            <header className=' bg-backgroundDark dark:bg-background z-50 fixed top-0 left-0 w-full h-12'>
                <nav className=" w-[50vh] h-[80vh] border-2 flex flex-col absolute top-0 right-0 items-center justify-center px-5">
                    <ul className=' flex flex-col'>
                      <li>Mi Perfil</li>
                      <li>Buscar</li>
                      <li>Notificaciones</li>
                      <li>Invitar Miembro</li>
                      <li>Archivo</li>
                      <li>Papelera</li>
                      <li>Cerrar Sesión</li>
                    </ul>
                    <ButtonTheme />
                </nav>
            </header> 
            <div className=' lg:flex'>
                <SlideBar />
                <div className="flex flex-col items-center p-5 border-amber-200 border-2 w-full h-full">
                    {children}
                </div>
            </div>
        </main>
  )
}