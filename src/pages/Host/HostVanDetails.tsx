import { Suspense } from "react";
import { Link, NavLink, Outlet, useLoaderData, Await } from "react-router-dom";
import { Van } from "../../types";

export type ContextType = { hostVan: Van | null }

export function HostVanDetails() {

    const { van } = useLoaderData() as { van: Van }

    function renderHostVan(hostVan: Van) {
        
        return (

            <div className="bg-white mt-4 p-4 grow rounded-lg">

                <>
                    <figure className="flex flex-row">
                        <img
                            className="w-[120px]"
                            src={hostVan.imageUrl} alt={hostVan.name} />
                        <figcaption className="pl-4">
                            <p className="bg-[#E17654] text-[#FFEAD0] text-[13px] rounded-md inline py-1 px-3">{hostVan.type}</p>
                            <h3 className="font-bold text-[20px] mt-2">{hostVan.name}</h3>
                            <p><strong>${hostVan.price}</strong>/day</p>
                        </figcaption>
                    </figure>
                </>

                <div className="mt-4 flex flex-row gap-4">
                    <NavLink
                        className={({ isActive }) => isActive ? "font-bold underline" : ""}
                        to="." end>Details</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "font-bold underline" : ""}
                        to="pricing">Pricing</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "font-bold underline" : ""}
                        to="photos">Photos</NavLink>
                </div>
                <Outlet context={{ hostVan } satisfies ContextType} />
            </div>
        )
    }

    return (
        <div className="mt-8 px-4">
            <Link to=".." relative="path" className="text-[#201F1D]">⬅️<span>Back to all vans</span></Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={van}>
                    {renderHostVan}
                </Await>
            </Suspense>

        </div>
    )
}

