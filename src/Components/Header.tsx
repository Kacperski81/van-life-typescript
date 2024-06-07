import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className="flex px-4">
            <nav className="flex flex-row flex-1 justify-between items-center">
                <NavLink className="text-[26px] leading-[40px] font-extrabold text-black" to="/">#VANLIFE</NavLink>
                <ul className="flex flex-row items-center text-xs leading-6 border-8">
                    <li className="mr-3">
                        <NavLink to="/host" className={({isActive}) => isActive ? "text-[#161616] font-bold underline" : "text-grey-500"}>Host</NavLink>
                    </li>
                    <li className="mr-3">
                        <NavLink to="/about" className={({isActive}) => isActive ? "text-[#161616] font-bold underline" : "text-grey-500"}>About</NavLink>
                    </li>
                    <li className="mr-3">
                        <NavLink to="/vans" className={({isActive}) => isActive ? "text-[#161616] font-bold underline" : "text-grey-500"}>Vans</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login"><span className=""><img src="/avatar-icon.png" className="w-4" /></span></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}