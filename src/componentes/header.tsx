import logo from "../../public/assets/nlw-unite-icon.svg";
export function Header(){
    return(
        <div className="flex gap-5 items-center py-2" >
            <img className="size-8" src={logo} alt="logo do nlw unite"/>
            <nav className="flex items-center gap-5">
                <a className="font-medium cursor-pointer text-sm text-zinc-300 ">Eventos</a>
                <a className="font-medium cursor-pointer text-sm">Participantes</a>
            </nav>
        </div>
    )
}