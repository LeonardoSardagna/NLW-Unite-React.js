import logo from "../../public/assets/nlw-unite-icon.svg"
import { NavLink } from "./nav-link"
export function Header() {
    return (
        <div className="flex gap-5 items-center py-2">
            <img src={logo} alt="logo do nlw unite" />
            <nav className="flex items-center gap-5">
                <NavLink>Eventos</NavLink>
                <NavLink>Participantes</NavLink>
            </nav>
        </div>
    )
}