import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { vanType } from "../../types";

export type ContextType = { hostVan: vanType | null }

export function HostVanDetails() {
    const { id } = useParams()
    const [hostVan, setHostVan] = useState<vanType | null>(null)

    useEffect(() => {
        async function getHostVan() {
            const response = await fetch(`/api/host/vans/${id}`)
            const data = await response.json()
            // console.log(data.vans)
            setHostVan(data.vans)
        }
        getHostVan()
    }, [id])

    return (
        <div className="mt-8 px-4">
            <Link to=".." relative="path" className="text-[#201F1D]">⬅️<span>Back to all vans</span></Link>

            <div className="bg-white mt-4 p-4 grow rounded-lg">
                {hostVan ? (
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
                ) : <p>Loading...</p>}
                <div className="mt-4 flex flex-row gap-4">
                    <NavLink
                        className={({isActive}) => isActive ? "font-bold underline" : ""}
                    to="." end>Details</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? "font-bold underline" : ""}
                    to="pricing">Pricing</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? "font-bold underline" : ""}
                    to="photos">Photos</NavLink>
                </div>
                <Outlet context={{ hostVan } satisfies ContextType}/>
            </div>
        </div>
    )
}

