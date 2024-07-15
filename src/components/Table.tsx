export default function Table() {
    return (
        <div className=" min-w-full w-max h-max p-3 flex flex-col gap-2 bg-red-600 rounded-md">
            <h3 className=" text-xl font-semibold"><button>{'>'}</button> Mensajes Importantes</h3>
                <table className="w-full divide-y divide-white">
                    <thead className="bg-red-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Elemento
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Mensaje
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-red-700 divide-y divide-red-700">
                        <tr>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Elemento" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Mensaje" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="date" className="w-full border border-gray-300 rounded-md p-2" placeholder="Fecha" />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Elemento" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Mensaje" />
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                                <input type="date" className="w-full border border-gray-300 rounded-md p-2" placeholder="Fecha" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            <h5 className=" text-sm">x Cantidad de Elementos</h5>
        </div>
    )
}