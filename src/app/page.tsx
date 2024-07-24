'use client'
import LoginForm from '@/components/LoginForm'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

if(session?.user?.name) {
  router.push('/views/trabajos')
}

  return (
    <main className='flex h-screen flex-col items-center justify-around py-10 bg-[#FF0000]'>
      <div className=' flex flex-col items-center h-1/2 justify-around'>
        <h1 className=' text-2xl font-bold'>Bienvenidos a la MDC App!</h1>
        <Image className=' rounded-md bg-white ' src='' alt='MDC Logo' width={250} height={250} />
      </div>
      <LoginForm />
    </main>
  )
}
