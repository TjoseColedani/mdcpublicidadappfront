
import Header from '@/components/Header'
import SlideBar from '@/components/SlideBar'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className=" min-h-screen bg-background dark:bg-backgroundDark">
      <Header/>
      <div className=' lg:flex'>
        <SlideBar />
        <div className="flex flex-col items-center p-5 border-amber-200 border-2 w-full h-full">
          {children}
        </div>
      </div>
    </main>
  )
}