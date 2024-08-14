import { Outlet, NavLink } from "react-router-dom";

export function HostLayout() {
    
    return (
        <div className="grow bg-background">
            <nav className="max-w-[350px] sm:max-w-[500px] grid grid-cols-4 py-8 px-2">
                <NavLink end to="." className={({isActive}) => isActive ? "host-links-active" : "host-links"}>Dashboard</NavLink>
                <NavLink to="income" className={({isActive}) => isActive ? "host-links-active text-right" : "host-links text-right"}>Income</NavLink>
                <NavLink to="vans" className={({isActive}) => isActive ? "host-links-active text-center" : "host-links text-center"}>Vans</NavLink>
                <NavLink to="reviews" className={({isActive}) => isActive ? "host-links-active text-center" : "host-links text-center"}>Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}