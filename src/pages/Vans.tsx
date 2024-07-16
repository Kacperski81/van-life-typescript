import { Suspense } from "react"
import { FilterButton } from "../Components/FilterButton"
import { VanCard } from "../Components/VanCard"
import { useSearchParams, useLoaderData, Await } from "react-router-dom"
import { Van, Filter } from "../types"

export function Vans() {
    // const vans = useLoaderData()
    const { vans } = useLoaderData() as { vans: Van[] }
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter: string | null = searchParams.get("type")

    const filters: Filter[] = [
        {
            name: "Simple",
            bg: "#e17654",
            text: "#ffead0"
        },
        {
            name: "Luxury",
            bg: "#161616",
            text: "#ffead0"
        },
        {
            name: "Rugged",
            bg: "#115e59",
            text: "#ffead0"
        }
    ]

    function renderVans(vans: Van[]) {
        const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:max-w-[800px] mx-auto pb-4">
                {filteredVans.map(van => {
                    return (
                        <VanCard
                            key={van.id}
                            image={van.imageUrl}
                            name={van.name}
                            price={van.price}
                            type={van.type}
                            id={van.id}
                            searchParams={searchParams}
                        />
                    )
                })}
            </div>
        )
    }

    return (
        <div className="grow px-4 bg-background mx-auto lg:px-3">

            <h2 className="mb-4 text-center">Explore our van options</h2>

            <div className="flex flex-row mb-4 lg:max-w-[800px] mx-auto">

                {filters.map(filter => (
                    <FilterButton
                        key={filter.name}
                        filter={filter}
                        typeFilter={typeFilter ? typeFilter : ""}
                        setSearchParams={setSearchParams} />
                ))}

                {typeFilter ? (<button
                    onClick={() => setSearchParams({})}
                    className="text-filter-color text-sm"
                >
                    Clear filters
                </button>) : ""}

            </div>

            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={vans}>

                    {renderVans}

                </Await>
            </Suspense>
        </div>
    )
}