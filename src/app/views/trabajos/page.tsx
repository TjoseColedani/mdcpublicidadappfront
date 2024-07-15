import Table from "@/components/Table";

export default function Trabajos() {

    return (
        <main className=" w-full h-screen pl-7 flex flex-col bg-background dark:bg-backgroundDark pt-14">
            <h1 className=" text-3xl font-semibold text-center mb-7">
                MDC Trabajos
            </h1>
            <div className=" w-full h-[85%] overflow-auto flex flex-col gap-4 scrollbar-hide">
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