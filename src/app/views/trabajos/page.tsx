import Table from '@/components/Table'

export default function Trabajos() {
  return (
    <main className=' w-full h-screen pl-7 flex flex-col bg-background dark:bg-backgroundDark pt-14'>
      <h1 className=' text-3xl font-semibold text-center mb-7'>MDC Trabajos</h1>
      <ul className=' h-12 flex w-full overflow-x-auto justify-around mb-10 mt-5'>
        <li className=' w-max'>
          <button className=' w-max bg-red-600 hover:bg-red-700 p-2 rounded-md'>Agregar Elemento</button>
        </li>
        <li className=' w-max'>
          <button className='hover:bg-gray-400/20 p-2 rounded-md'>Buscar</button>
        </li>
        <li className=' w-max'>
          <button className='hover:bg-gray-400/20 p-2 rounded-md'>Persona</button>
        </li>
        <li className=' w-max'>
          <button className='hover:bg-gray-400/20 p-2 rounded-md'>Filtrar</button>
        </li>
        <li className=' w-max'>
          <button className='hover:bg-gray-400/20 p-2 rounded-md'>Ordenar</button>
        </li>
        <li className=' w-max'>
          <button className='hover:bg-gray-400/20 p-2 rounded-md'>Ocultar</button>
        </li>
      </ul>

      <div className=' w-full h-[85%] overflow-auto flex flex-col gap-4 scrollbar-hide'>
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
    </main>
  )
}
