import { FilterButton } from "../Components/FilterButton"
import { VanCard } from "../Components/VanCard"
import { useVans } from "../hooks/useVan"

export function Vans() {
    const { vans } = useVans()

    const filters: string[] = ["Simple", "Luxury", "Rugged"]

    return (
        <div className="grow px-4">
            <h2 className="mb-4 text-center">Explore our van options</h2>
            <div className="flex flex-row mb-4">
                {filters.map(filter => (
                    <FilterButton key={filter} text={filter} />
                ))}
                <button className="text-filter-color text-sm underline">Clear filters</button>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
                {vans ? vans.map(van => (
                    <VanCard key={van.id} image={van.imageUrl} name={van.name} price={van.price} type={van.type} id={van.id} />
                )) : <p>Loading...</p>}
            </div>
        </div>
    )
}