import { Suspense } from "react"
import { Link, useLocation, useLoaderData, Await } from "react-router-dom"
import { Van } from "../types"

interface LoaderData {
    van: Van;
  }

export function VanDetails() {

    const { van } = useLoaderData() as LoaderData
    console.log(van)
    const location = useLocation()

    const search = location.state?.search ? `/vans?${location.state.search}` : "/vans"
    const filter = location.state?.filter || "all"

    function renderVan(van: Van) {
        const filterStyle = `var(--color-${van.type})`
        return (
            <div className="md:flex lg:w-[1000px] gap-6 md:bg-[rgba(0,0,0,0.2)] md:p-4 md:text-shadow">

                <div className="aspect-[1/1] w-full md:w-[50%] sm:mx-auto bg-cover bg-center mb-4">
                    <img src={van.imageUrl} className="mx-auto" alt={van.name} />
                </div>

                <div className="md:mx-auto md:w-[55%] flex flex-col gap-2 justify-center">

                    <span
                        className="mt-1 w-1/5 text-base text-[#ffead0] text-center rounded-lg py-1 px-2" style={{ backgroundColor: `rgb(${filterStyle}` }}
                    >
                        {van.type.charAt(0).toUpperCase() + van.type.substring(1)}
                    </span>

                    <h2 className="md:text-white">{van.name}</h2>
                    <p className="my-2 md:text-white"><strong>${van.price}</strong>/day</p>
                    <p className="text-justify my-2 md:text-white">{van.description}</p>
                    <button className="bg-rent-button w-full my-4 py-2 font-bold text-[18px] text-white">Rent this van</button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-background md:bg-[rgba(0,0,0,0.25)] md:mx-auto">

            <div className="px-4 flex flex-col">

                <p className="mb-4">
                    {/* <Link to="/vans"> */}
                    <Link to={search} >

                        ⬅️<span className="md:text-white text-shadow">Back to {filter} vans</span>

                    </Link>
                </p>
        
                <Suspense fallback={<div className="md:flex lg:w-[1000px] gap-6">Loading ...</div>}>
                    <Await resolve={van}>
                        {renderVan}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}