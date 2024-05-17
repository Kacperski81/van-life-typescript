import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { vanType } from "../../types";

export function HostVans() {
    const [hostVans, setHostVans] = useState<vanType[] | null>(null)

    useEffect(() => {
        async function getHostVans() {
            const response = await fetch("/api/host/vans")
            const data = await response.json()
            setHostVans(data.vans)
        }
        getHostVans()
    }, [])

    return (
        <div className="mt-4 px-4">
            <h2 className="mb-6">Your listed vans</h2>
            {hostVans ? hostVans.map(van => (
                <Link to={`/host/vans/${van.id}`} key={van.id}>
                    <div className="flex flex-row bg-white gap-2 mb-4 rounded-lg p-3">
                        <div className=" w-[80px] rounded-lg ">
                            <img src={van.imageUrl} className="" />
                        </div>
                        <div className="py-2">
                            <h5 className="font-bold">{van.name}</h5>
                            <p>${van.price}/day</p>
                        </div>
                    </div>
                </Link>
            )) : <p>Loading...</p>}
        </div>
    )
}