import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 ">
                <h1 className="text-2xl font-bold " >Participantes</h1>
                <div className="w-72 flex items-center border border-white/20 rounded-lg px-3 py-1.5 gap-2">
                    <Search className="size-4 text-orange-300" />
                    <input className=" flex-1 bg-transparent p-0 border-0 " placeholder="Buscar participante..." type="text" />
                </div>
            </div>
            <div className="border border-white/20 rounded-lg">
                <table className="w-full">
                    <thead className="border-b border-white/20">
                        <tr>
                            <th style={{width:32}} className="font-semibold text-sm px-3 py-4 text-left">
                                <input type="checkbox" className="size-3 bg-transparent rounded border border-white/20 checked: text-orange-400" />
                            </th>
                            <th className="font-semibold text-sm px-3 py-4 text-left">Código</th>
                            <th className="font-semibold text-sm px-3 py-4 text-left">Participante</th>
                            <th className="font-semibold text-sm px-3 py-4 text-left">Data da inscrição</th>
                            <th className="font-semibold text-sm px-3 py-4 text-left">Data do check-in</th>
                            <th style={{ width: 64 }} className="font-semibold text-sm py-3 px-4 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="border-b border-white/20">
                        {Array.from({ length: 5 }).map((_, i) => {
                            return (
                                <tr key={i} className=" border-b border-white/20  hover:bg-white/5">
                                    <td className="text-sm px-4 py-3 text-left">
                                        <input type="checkbox" className=" size-3 bg-transparent rounded border border-white/20 checked:text-orange-400" />
                                    </td>
                                    <td className=" text-sm px-3 py-4">22157</td>
                                    <td className="flex flex-col gap-1 text-sm px-3 py-4">
                                        <span className="font-semibold">Leonardo Sardagna</span>
                                        <span className="text-zinc-300">leonardosardagna00@gmail.com</span>
                                    </td>
                                    <td className=" text-sm px-3 py-4 text-left">7 dias atrás</td>
                                    <td className=" text-sm px-3 py-4 text-left">7 dias atrás</td>
                                    <td>
                                        <button className="bg-black/30 p-1.5 rounded-md border border-white/20">
                                            <MoreHorizontal className="size-4" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className=" text-sm px-3 py-4 text-left" colSpan={3}>Mostrando 10 de 228 itens</td>
                            <td className=" text-sm px-3 py-4 text-right" colSpan={3}>
                                <div className="inline-flex items-center gap-4">
                                    <span>Página 1 de 11</span>
                                    <div className="flex gap-1.5">
                                        <button className="bg-black/30 p-1.5 rounded-md border border-white/20">
                                            <ChevronLeft className="size-5" />
                                        </button>
                                        <button className="bg-black/30 p-1.5 rounded-md border border-white/20">
                                            <ChevronRight className="size-5" />
                                        </button>
                                        <button className="bg-black/30 p-1.5 rounded-md border border-white/20">
                                            <ChevronsLeft className="size-5" />
                                        </button>
                                        <button className="bg-black/30 p-1.5 rounded-md border border-white/20">
                                            <ChevronsRight className="size-5" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}