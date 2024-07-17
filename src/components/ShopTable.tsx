'use client'
import { useState } from "react"

export default function ShopTable() {

    return (
        <div className=" min-w-full w-max h-max p-3 flex flex-col gap-2 bg-red-600 rounded-md">
            <h3 className=" text-xl font-semibold">
                Compras Pendientes
            </h3>
                <table>
                    <thead className="">
                        
                    </thead>
                    <tbody className="">
                        <tr>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Elemento" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2  bg-red-700 text-white placeholder:text-white/80" placeholder="Mensaje" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="date" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Fecha" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Elemento" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2  bg-red-700 text-white placeholder:text-white/80" placeholder="Mensaje" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="date" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Fecha" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Elemento" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2  bg-red-700 text-white placeholder:text-white/80" placeholder="Mensaje" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="date" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Fecha" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Elemento" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2  bg-red-700 text-white placeholder:text-white/80" placeholder="Mensaje" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="date" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Fecha" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Elemento" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2  bg-red-700 text-white placeholder:text-white/80" placeholder="Mensaje" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="date" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Fecha" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Elemento" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full rounded-sm p-2  bg-red-700 text-white placeholder:text-white/80" placeholder="Mensaje" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="date" className="w-full rounded-sm p-2 bg-red-700 text-white placeholder:text-white/80" placeholder="Fecha" />
                            </td>
                        </tr>
                    </tbody>
                    <button>+ Agregar Elemento</button>
                </table>
            <h5 className=" text-sm">x Cantidad de Elementos</h5>
        </div>
    )
}