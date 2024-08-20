import { IField } from "@/interfaces/IField";
import { IWork } from "@/interfaces/IWork";

export default function RowWork({ handleMessageClick, work, fields }: { handleMessageClick: () => void, work: IWork, fields: IField[] }) {
    return (
        <tr>
            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder={work.name} />
            </td>
            {
                fields.map(field => {
                    const workField = work.workFields.find(workField => workField.field.name === field.name)
                    return (
                        <td key={workField?.id} className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                            <p className="w-full border border-gray-300 rounded-md p-2 bg-white cursor-pointer" onClick={handleMessageClick}>{workField?.value}</p>
                        </td>
                    )
                })
            }
        </tr>
    )
}