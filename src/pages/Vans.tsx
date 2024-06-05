import { FilterButton } from "../Components/FilterButton"
import { VanCard } from "../Components/VanCard"
import { useVans } from "../hooks/useVan"
import { useSearchParams } from "react-router-dom"
import { vanType } from "../types"

export function Vans() {
    const { vans, loading, error } = useVans()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter: string | null = searchParams.get("type")
    

    const filters: string[] = ["Simple", "Luxury", "Rugged"]

    const filteredVans: vanType[] | null = typeFilter
        ? vans?.filter(van => van.type === typeFilter) ?? []
        : vans ?? []

    if(loading) return <h2 aria-live="polite">Loading...</h2>
    if(error) return <h2 aria-live="assertive">{error.message}</h2>

    return (
        <div className="grow px-4">

            <h2 className="mb-4 text-center">Explore our van options</h2>

            <div className="flex flex-row mb-4">

                {filters.map(filter => (
                    <FilterButton key={filter} text={filter} setSearchParams={setSearchParams} />
                ))}

                { typeFilter ? (<button
                    onClick={() => setSearchParams({})} 
                    className="text-filter-color text-sm underline"
                >
                    Clear filters
                </button>) : ""}

            </div>
            
            <div className="grid grid-cols-2 gap-x-2">
                {filteredVans ? filteredVans.map(van => (
                    <VanCard 
                        key={van.id} 
                        image={van.imageUrl} 
                        name={van.name} 
                        price={van.price} 
                        type={van.type} 
                        id={van.id}
                        searchParams={searchParams} />
                )) : <p>Loading...</p>}
            </div>
        </div>
    )
}