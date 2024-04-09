import { Mail, Send, UserCircle, X } from "lucide-react";

export function AddParticipants() {
    return (
        <>
        <dialog open className="p-5 z-50 text-zinc-50 bg-zinc-900 border border-zinc-500 rounded-lg  relative">
            <div className="flex flex-col gap-2">
                <p className="text-xl font-normal">Adicionar participantes</p>
                <p className="text-base font-normal">Preencha com as informações que deseja adicionar</p>
            </div>
            <form method="dialog" className="flex flex-col mt-2 relative">
                <div className="flex gap-4 items-center">
                    <UserCircle />
                    <div className="border rounded-lg border-zinc-500 flex w-80">
                        <input className="bg-transparent border-0 focus:ring-0 flex-1" type="text" id="name" placeholder="Digite seu nome" /></div>
                </div>
                <div className="flex gap-4 my-3 items-center">
                    <Mail />
                    <div className="border rounded-lg border-zinc-500 flex w-80">
                        <input className="bg-transparent border-0 focus:ring-0 flex-1" type="email" id="email" placeholder="Digite seu e-mail" />
                    </div>
                </div>
                <button>
                    <X className="absolute right-0 bottom-52" />
                </button>
                <button disabled className="flex gap-3 border rounded-md p-1 w-24 cursor-not-allowed my-3">
                    <Send />
                    <p>Enviar</p>
                </button>
            </form>
        </dialog>
        </>
    )
}