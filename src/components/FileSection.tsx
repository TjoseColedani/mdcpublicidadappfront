import { useState, useRef, ChangeEvent } from 'react';

interface FileWithPreview {
    file: File;
    preview: string | null;
}

export default function FileSection() {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const uploadedFiles = Array.from(event.target.files).map(file => ({
            file,
            preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
        }));

        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);

        // Reset input value to remove the file name from the input field
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleFileRemove = (fileName: string) => {
        setFiles((prevFiles) => prevFiles.filter(({ file }) => file.name !== fileName));
    };

    return (
        <>
            <label 
                className="w-full h-12 p-2 border-2 border-gray-300 rounded-md cursor-pointer flex items-center justify-center text-white bg-red-600 hover:bg-red-500"
                htmlFor="file-upload"
            >
                + Agregar Archivos
                <input
                    id="file-upload"
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileUpload}
                    ref={fileInputRef}
                    multiple
                />
            </label>
            <div className="w-full flex-1 mt-4 z-50">
                {files.map(({ file, preview }, index) => (
                    <div key={index} className="w-full p-2 border-2 border-gray-300 rounded-md mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                            {preview ? (
                                <img
                                    src={preview}
                                    alt={file.name}
                                    className="w-16 h-16 object-cover mr-4"
                                />
                            ) : (
                                <div className="w-16 h-16 bg-gray-200 flex items-center justify-center mr-4">
                                    <span className="text-gray-500">No Preview</span>
                                </div>
                            )}
                            <span>{file.name}</span>
                        </div>
                        <div>
                            <a
                                href={preview || URL.createObjectURL(file)}
                                download={file.name}
                                className="text-blue-500 hover:text-blue-700 mr-2"
                            >
                                Descargar
                            </a>
                            <button
                                onClick={() => handleFileRemove(file.name)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
