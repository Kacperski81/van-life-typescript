import { Link } from "react-router-dom"

interface VanCardProps {
    image: string
    name: string
    price: number
    type: string
    id: string
    searchParams: URLSearchParams
    cardIndex: number
}

export function VanCard({ image, price, name, type, id, searchParams, cardIndex }: VanCardProps) {
    // console.log(searchParams.toString())
    const filterTypeURL: string | null = searchParams.toString() || null
    const filterType: string | null = searchParams.get("type") || null
    // const filterStyle = filterType === "simple" ? "bg-black" : filterType === "luxury" ? "bg-[#161616]" : filterType === "rugged" ? "bg-[#115e59]" : ""

    // console.log({filterStyle})
    const filterStyle = `var(--color-${type})`
    return (
        <div
            // className="bg-background border border-amber-100 shadow-sm rounded-lg sm:active:scale-95 mx-auto sm:min-w-[48%] min-w-[200px] w-[200px] max-w-[200px] lg:max-w-[300px] grow xl:min-w-[380px] xl:w-[380px] p-2 transition-[translate] duration-1000 transition-transform hover:scale-105 "
            className="bg-background mx-auto rounded-lg p-2 xl:min-w-[340px] lg:max-w-[340px] xl:aspect-[20/9] transition-all duration-500 hover:scale-105 sm:active:scale-95 bg-white"
            style={{ translate: `${-100 * cardIndex}%`,}}

        >
            <Link
                to={id}
                state={
                    {
                        filter: filterType,
                        search: filterTypeURL
                    }
                }
                aria-label={`View details for ${name} priced at $${price} per day`}
                className=""
            >
                <div className="w-full relative">

                    <div className="w-full aspect-square">
                        <img
                            src={image}
                            className="w-full h-full object-cover block"
                            alt={`Image of ${name}`}
                        />
                    </div>

                    <div className="flex flex-row wrap justify-between  p-2">
                        <div>
                            <p className="text-[14px] font-bold">{name}</p>
                            <p className="mt-1 w-4/5 text-[12px] text-[#ffead0] text-center rounded-lg py-1 px-2" style={{ backgroundColor: `rgb(${filterStyle}` }}>{type.charAt(0).toUpperCase() + type.substring(1)}</p>
                        </div>
                        <div>
                            <h3 className="text-[14px] leading-5 font-bold">${price}</h3>
                            <h5 className="text-[12px] leading-4 text-right">/day</h5>
                        </div>
                    </div>
                </div>

            </Link>
        </div>
    )
}