'use client'
import { useEffect, useState } from "react"
import Messages from "./Messages";
import RowWork from "./row-works";
import { ICategory } from "@/interfaces/ICategory";

export default function Table({ category }: { category: ICategory }) {

    const fields = category.fields
    const works = category.works
    const [isOpenTable, setIsOpenTable] = useState(false);
    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const handleClick = () => {
        setIsOpenTable(!isOpenTable)
    }

    const handleMessageClick = () => {
        setIsMessageOpen(!isMessageOpen)
    }





    return (
        <div className=" min-w-full w-max h-max p-3 flex flex-col gap-2 bg-red-600 rounded-md">
            <h3 className=" text-xl font-semibold">
                <button onClick={handleClick} className={`${isOpenTable ? " rotate-90" : ""}`}>{'>'}</button> {category.name}
            </h3>
            <table className={`w-full divide-y divide-white ${isOpenTable ? " " : " hidden"}`}>
                <thead className="bg-red-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Nombre
                        </th>
                        {
                            fields.map(field => (
                                <th key={field.id} className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    {field.name}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="bg-red-700 divide-y divide-red-700">
                    {
                        works.map(work => (
                            <RowWork key={work.id} handleMessageClick={handleMessageClick} work={work} fields={fields} />
                        ))
                    }

                </tbody>
                <button>+ Agregar Elemento</button>
                {isMessageOpen ? <Messages setMessageOpen={handleMessageClick} /> : null}
            </table>
            <h5 className=" text-sm">x Cantidad de Elementos</h5>
        </div>
    )
}