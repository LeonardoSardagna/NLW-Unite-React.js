import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, CircleCheck, CircleX, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Attendees {
    id: string
    name: string
    email: string
    checkedInAt: string
    createdAt: string
}

export function AttendeeList() {
    const [search, setSearch] = useState(()=>{
        const url = new URL(window.location.toString())
        if(url.searchParams.has('search')){
            return url.searchParams.get('search') ?? ''
        }
        return ''
    })
    
    const [page, setPage] = useState(()=>{
        const url = new URL(window.location.toString())
        if(url.searchParams.has('page')){
            return Number(url.searchParams.get('page'))
        }
        return 1
    })
    
    const [total, setTotal] = useState(0)
    const [attendees, setAttendees] = useState<Attendees[]>([])
    const totalpages = Math.ceil(total / 10)

    useEffect(()=>{
        const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
        url.searchParams.set('pageIndex', String(page-1))
        if(search.length > 0){
            url.searchParams.set('query', search)
        }
    
        fetch(url)
        .then(response => response.json())
        .then(date =>{
            setAttendees(date.attendees)
            setTotal(date.total)
        })
    },[page, search])

    function setCurrentSearch(search: string){
        const url = new URL(window.location.toString())
        url.searchParams.set('search', search)
        window.history.pushState({}, "", url)
        setSearch(search)
    }

    function setCurrentPage(page: number){
        const url = new URL(window.location.toString())
        url.searchParams.set('page', String(page))
        window.history.pushState({}, "", url)
        setPage(page)
    }

    function onChangedSearchEntry(event: ChangeEvent<HTMLInputElement>) {
        setCurrentSearch(event.target.value)
        setCurrentPage(1)
    }

    function goToFirst(){
        setCurrentPage(1)
    }

    function goToPrevious(){
        setCurrentPage(page - 1)
    }

    function goToNextPag(){
        setCurrentPage(page+1)
    }

    function goLastPage(){
        setCurrentPage(totalpages)
    }



    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 ">
                <h1 className="text-2xl font-bold " >Participantes</h1>
                <div className="w-72 flex items-center border border-white/20 rounded-lg px-3 py-1.5 gap-2">
                    <Search className="size-4 text-orange-300" />
                    <input 
                    onChange={onChangedSearchEntry} 
                    value={search}
                    className=" flex-1 bg-transparent p-0 border-0 focus:ring-0" 
                    placeholder="Buscar participante..." 
                    type="text" />
                </div>
            </div>
            <Table>
                <thead className="border-b border-white/20">
                    <tr>
                        <TableHeader style={{ width: 32 }}>
                            <input type="checkbox" className="size-3 bg-transparent rounded border border-white/20 checked:text-orange-400 focus:ring-0" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data da inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>
                <tbody className="border-b border-white/20">
                    {attendees.map((attendee) => {
                        return (
                            <tr key={attendee.name} className=" border-b border-white/20  hover:bg-white/5">
                                <TableCell>
                                    <input type="checkbox" className=" size-3 bg-transparent rounded border border-white/20 checked:text-orange-400 focus:ring-0" />
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <td className="flex flex-col gap-1 text-sm px-4 py-4">
                                    <span className="font-semibold">{attendee.name}</span>
                                    <span className="text-zinc-300">{attendee.email}</span>
                                </td>
                                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                                <TableCell>{attendee.checkedInAt === null
                                ?   <div className="flex items-center gap-2 opacity-50">
                                    <CircleX className="text-red-600/80"/>
                                    <span>Não fez Check-in</span>
                                    </div>
                                :   <div className="flex items-center gap-2">
                                    <CircleCheck className="text-green-600"/>
                                    {dayjs().to(attendee.checkedInAt)}
                                    </div>
                                    }</TableCell>
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
                        <TableCell colSpan={3}>Mostrando {attendees.length} de {total} itens</TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-4">
                                <span>Página {page} de {totalpages}</span>
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