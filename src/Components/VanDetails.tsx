import { Suspense } from "react"
import { Link, useLocation, useLoaderData, Await } from "react-router-dom"
import { Van } from "../types"

interface LoaderData {
    van: Van;
  }

export function VanDetails() {

    const { van } = useLoaderData() as LoaderData
    const location = useLocation()

    const search = location.state?.search ? `/vans?${location.state.search}` : "/vans"
    const filter = location.state?.filter || "all"

    function renderVan(van: Van) {
        const filterStyle = `var(--color-${van.type})`
        return (
            <div className="md:flex lg:w-[1000px] gap-6 md:p-4">

                <div className="aspect-square w-full md:w-[50%] sm:mx-auto bg-cover bg-center mb-4">
                    <img src={van.imageUrl} className="mx-auto w-full rounded-lg" alt={van.name} />
                </div>

                <div className="md:mx-auto md:w-[55%] flex flex-col gap-2 justify-center">

                    <span
                        className="mt-1 w-1/5 text-base text-[#ffead0] text-center rounded-lg py-1 px-2" style={{ backgroundColor: `rgb(${filterStyle}` }}
                    >
                        {van.type.charAt(0).toUpperCase() + van.type.substring(1)}
                    </span>

                    <h2>{van.name}</h2>
                    <p className="my-2"><strong>${van.price}</strong>/day</p>
                    <p className="text-justify my-2">{van.description}</p>
                    <button className="bg-rent-button w-full my-4 py-2 font-bold text-[18px] text-white">Rent this van</button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full md:mx-auto xl:flex xl:items-center xl:justify-center">

            <div className="px-4 flex xl:border flex-col bg-background xl:shadow-lg xl:bg-[rgba(233,217,191,0.7)]">

                <p className="mb-4">
                    {/* <Link to="/vans"> */}
                    <Link to={search} >

                        ⬅️<span>Back to {filter} vans</span>

                    </Link>
                </p>
        
                <Suspense fallback={<div className="w-full aspect-[16/9] xl:w-[1000px] xl:aspect-[16/9]">Loading ...</div>}>
                    <Await resolve={van}>
                        {renderVan}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}