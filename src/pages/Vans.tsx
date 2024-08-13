import { useState, Suspense } from "react"
import { FilterButton } from "../Components/FilterButton"
import { VanCard } from "../Components/VanCard"
import { useSearchParams, useLoaderData, Await } from "react-router-dom"
import { Van, Filter } from "../types"

export function Vans() {
    // const vans = useLoaderData()
    const [cardIndex, setCardIndex] = useState(0)
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

    function showNextCard() {
        setCardIndex((prevIndex) => {
            if (prevIndex === vans.length - 1) {
                return vans.length - 1
            } else {
                return prevIndex + 1
            }
        })
    }

    function showPrevCard() {
        setCardIndex((prevIndex) => {
            if (prevIndex === 0) {
                return prevIndex
            } else {
                return prevIndex - 1
            }
        })
    }

    function renderVans(vans: Van[]) {
        const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans
        return (
            <div className="w-full xl:w-[1000px] mx-auto">

                <div className="w-full mx-auto xl:aspect-[21/10] relative overflow-hidden">

                    <div
                        className="grid gap-4 min-[380px]:grid min-[380px]:grid-cols-2 lg:grid-cols-3 xl:w-11/12 xl:flex xl:mx-auto p-4"
                    >
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
                                    cardIndex={cardIndex}
                                />
                            )
                        })}

                    </div>
                        <button
                            className="slider-button left-0 invisible xl:visible xl:hover:scale-110 xl:active:scale-95"
                            onClick={showPrevCard}
                        >
                            {cardIndex === 0 ? "🛑" : "⬅️"}
                        </button>
                        <button
                            className="slider-button right-0 invisible xl:visible xl:hover:scale-110 xl:active:scale-95"
                            disabled={cardIndex === filteredVans.length - 2}                            
                            onClick={showNextCard}
                        >
                            {cardIndex === filteredVans.length - 2 || filteredVans.length === 2 ? "🛑" :  "➡️"}
                        </button>
                </div>
            </div>
        )
    }

    return (
        <div className="mx-auto w-full lg:px-3 flex flex-col justify-start self-start">

            <h2 className="text-black text-4xl text-center font-extrabold md:text-[39px] md:leading-[38px] text-shadow mb-3 ">Explore our van options</h2>

            <div className="flex flex-row mb-4 lg:max-w-[1000px] mx-auto">

                {filters.map(filter => (
                    <FilterButton
                        key={filter.name}
                        filter={filter}
                        typeFilter={typeFilter ? typeFilter : ""}
                        setSearchParams={setSearchParams} 
                        setCardIndex={setCardIndex}/>
                ))}

                {typeFilter ? (<button
                    onClick={() => setSearchParams({})}
                    className="text-filter-color md:text-black md:hover:text-black md:hover:bg-black md:hover:text-white text-sm bg-[rgba(233,217,191,0.7)] p-2 rounded-lg ml-2 md:shadow-md"
                >
                    Clear filters
                </button>) : ""}

            </div>

            <Suspense fallback={<div className="mb-4 lg:max-w-[1000px] mx-auto">Loading...</div>}>
                <Await resolve={vans}>

                    {renderVans}

                </Await>
            </Suspense>
        </div>
    )
}


//Old code:
{/* {filteredVans.map(van => {
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
                        })} */}