import { Suspense } from "react";
import { Link, useLoaderData, Await } from "react-router-dom";
import { Van } from "../../types";

export function HostVans() {
    const { hostVans } = useLoaderData() as { hostVans: Van[] }

    function renderHostVans(vans: Van[]) {
        return (
            <div>
                {vans.map((van) => {
                    return (
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
                    )
                })}
            </div>
        )
    }

    return (
        <div className="mt-4 px-4">
            <h2 className="mb-6">Your listed vans</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={hostVans}>

                    {renderHostVans}

                </Await>
            </Suspense>
        </div>
    )
}