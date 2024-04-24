export function ParticipantOptions() {
    return (
        <>
            <div className="relative bg-zinc-950/80 border border-zinc-700 p-1 rounded-lg text-zinc-300 flex flex-col gap-2 items-center w-32 right-16 top-2">
                <p className="border-b-2text-xs">Ações</p>
                <div className="border flex w-3/4" />
                <button className="text-sm font-medium cursor-pointer">Editar</button>
                <button disabled className="text-sm font-medium text-red-700 cursor-pointer">Apagar</button>
            </div>
        </>
    )
}