import SlideBar from '@/components/SlideBar'
import ButtonTheme from '@/components/UI/ButtonTheme'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className=" min-h-screen bg-background dark:bg-backgroundDark">
            <header className=' z-50 fixed top-0 left-0 w-full'>
                <nav className=" bg-backgroundDark dark:bg-background h-12 flex items-center justify-end px-5">
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