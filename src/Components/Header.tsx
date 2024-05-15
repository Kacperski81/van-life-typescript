import { NavLink } from "react-router-dom";
//FFF7ED - background color
//link incactive: #4D4D4D
//link active: #161616
export function Header() {
    return (
        <header className="flex px-4">
            <nav className="flex flex-row flex-1 justify-between items-center">
                <NavLink className="text-[26px] leading-[40px] font-extrabold text-black" to="/">#VANLIFE</NavLink>
                <ul className="flex flex-row text-xs leading-6">
                    <li className="mr-3">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vans">Vans</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}