import { Outlet, NavLink } from "react-router-dom";

export function HostLayout() {
    return (
        <div className="grow">
            <nav className="flex gap-5 px-4">
                <NavLink end to="." className={({isActive}) => isActive ? "text-[#161616] underline font-bold" : "text-grey"}>Dashboard</NavLink>
                <NavLink to="income" className={({isActive}) => isActive ? "text-[#161616] underline font-bold" : "text-grey"}>Income</NavLink>
                <NavLink to="vans" className={({isActive}) => isActive ? "text-[#161616] underline font-bold" : "text-grey"}>Vans</NavLink>
                <NavLink to="reviews" className={({isActive}) => isActive ? "text-[#161616] underline font-bold" : "text-grey"}>Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}