'use client'
import { useEffect, useState } from 'react';
import Table from '@/components/Table';
import { ICategory } from '@/interfaces/ICategory';
import { DataService } from '@/services/data-service';

export default function Trabajos() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const dataService = new DataService();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await dataService.getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
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
        {categories.map(category => (
          <Table key={category.id} category={category} />
        ))}
      </div>
    </main>
  )
}
