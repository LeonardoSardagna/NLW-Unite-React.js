import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { ChangeEvent, useState } from "react";
import { attendees } from "../date/attendees";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {
    const totalpages = Math.ceil(attendees.length / 10)
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
   
    function onChangedSearchEntry(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    function goToFirst(){
        setPage(1)
    }

    function goToPrevious(){
        setPage(page - 1)
    }

    function goToNextPag(){
        setPage(page + 1)
    }

    function goLastPage(){
        setPage(totalpages)
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 ">
                <h1 className="text-2xl font-bold " >Participantes</h1>
                <div className="w-72 flex items-center border border-white/20 rounded-lg px-3 py-1.5 gap-2">
                    <Search className="size-4 text-orange-300" />
                    <input onChange={onChangedSearchEntry} className=" flex-1 bg-transparent p-0 border-0 " placeholder="Buscar participante..." type="text" />
                </div>
            </div>
            <Table>
                <thead className="border-b border-white/20">
                    <tr>
                        <TableHeader style={{ width: 32 }}>
                            <input type="checkbox" className="size-3 bg-transparent rounded border border-white/20 checked: text-orange-400" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data da inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>
                <tbody className="border-b border-white/20">
                    {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                        return (
                            <tr key={attendee.name} className=" border-b border-white/20  hover:bg-white/5">
                                <TableCell>
                                    <input type="checkbox" className=" size-3 bg-transparent rounded border border-white/20 checked:text-orange-400" />
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <td className="flex flex-col gap-1 text-sm px-4 py-4">
                                    <span className="font-semibold">{attendee.name}</span>
                                    <span className="text-zinc-300">{attendee.email}</span>
                                </td>
                                <TableCell>{dayjs().to(attendee.registrationDate)}</TableCell>
                                <TableCell>{dayjs().to(attendee.checkinDate)}</TableCell>
                                <td>
                                    <IconButton transparent className="bg-black/20 p-1.5 rounded-md border border-white/10">
                                        <MoreHorizontal className="size-4" />
                                    </IconButton>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>Mostrando 10 de {attendees.length} itens</TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-4">
                                <span>Página {page} de {Math.ceil(attendees.length / 10)}</span>
                                <div className="flex gap-1.5">
                                    <IconButton onClick={goToFirst} disabled={page === 1}>
                                        <ChevronsLeft className="size-5" />
                                    </IconButton>
                                    <IconButton onClick={goToPrevious} disabled={page === 1}>
                                        <ChevronLeft className="size-5" />
                                    </IconButton>
                                    <IconButton onClick={goToNextPag} disabled={page === totalpages}>
                                        <ChevronRight className="size-5" />
                                    </IconButton>
                                    <IconButton onClick={goLastPage} disabled={page === totalpages}>
                                        <ChevronsRight className="size-5" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}