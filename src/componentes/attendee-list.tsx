import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
                <h1 className="font-bold text-2xl">Participantes</h1>
                <div className="border rounded-lg py-1.5 px-3 w-72 flex items-center gap-2">
                    <Search className="size-4 text-orange-300" />
                    <input placeholder="Buscar participante..." className="focus:outline-none border-0 bg-transparent flex-1 text-sm border-0 p-0"></input>
                </div>
            </div>

            <div className="border rounded-lg border-white/20">
                <table className="w-full" >
                    <thead className="border-b border-white/20">
                        <tr>
                            <th style={{ width: 32 }} className="font-semibold text-sm py-3 px-4 text-left">
                                <input type="checkbox" className="size-3 rounded bg-transparent checked: text-orange-400" />
                            </th>
                            <th className="font-semibold text-sm py-3 px-4 text-left">Código</th>
                            <th className="font-semibold text-sm py-3 px-4 text-left">Participante</th>
                            <th className="font-semibold text-sm py-3 px-4 text-left">Data da inscrição</th>
                            <th className="font-semibold text-sm py-3 px-4 text-left">Data do check-in</th>
                            <th style={{ width: 64 }} className="font-semibold text-sm py-3 px-4 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="border-b border-white/20 ">
                        {Array.from({ length: 5 }).map((_, i) => {
                            return (
                                <tr className="hover:bg-white/5" key={i}>
                                    <td className="text-sm py-3 px-4 text-left">
                                        <input type="checkbox" className="size-3 rounded bg-transparent checked: text-orange-400" />
                                    </td>
                                    <td className="text-sm py-3 px-4 text-left">22157</td>
                                    <td className="text-sm py-3 px-4 text-left">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold ">Leonardo Sardagna</span>
                                            <span className="text-zinc-300">leonardosardagna00@gmail.com</span>
                                        </div>
                                    </td>
                                    <td className="text-sm py-3 px-4 text-left text-zinc-300" >7 dias atrás</td>
                                    <td className="text-sm py-3 px-4 text-left text-zinc-300">7 dias atrás</td>
                                    <td className="text-sm py-3 px-4 text-left text-zinc-300">
                                        <button className="bg-black/30 p-1.5 rounded-md">
                                            <MoreHorizontal className="size-4" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-sm py-3 px-4 text-left" colSpan={3}>Mostrando 10 de 228 itens</td>
                            <td className="text-sm py-3 px-4 text-right" colSpan={3}>
                            <div className="inline-flex gap-8 items-center">
                                <span>Página 1 de 11</span>
                            <div className=" flex gap-1.5">
                                <button className="bg-white/10 border border-white/20 p-1.5 rounded-md">
                                    <ChevronsLeft className="size-4" />
                                </button>
                                <button className=" bg-white/10 border border-white/20 p-1.5 rounded-md">
                                    <ChevronLeft className="size-4" />
                                </button>
                                <button className=" bg-white/20 border border-white/20 p-1.5 rounded-md">
                                    <ChevronRight className="size-4" />
                                </button>
                                <button className=" bg-white/20 border border-white/20 p-1.5 rounded-md">
                                    <ChevronsRight className="size-4" />
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