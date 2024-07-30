import { Link } from "react-router-dom"

interface VanCardProps {
    image: string
    name: string
    price: number
    type: string
    id: string
    searchParams: URLSearchParams
}

export function VanCard({ image, price, name, type, id, searchParams }: VanCardProps) {
    // console.log(searchParams.toString())
    const filterTypeURL: string | null = searchParams.toString() || null
    const filterType: string | null = searchParams.get("type") || null
    // const filterStyle = filterType === "simple" ? "bg-black" : filterType === "luxury" ? "bg-[#161616]" : filterType === "rugged" ? "bg-[#115e59]" : ""

    // console.log({filterStyle})
    const filterStyle = `var(--color-${type})`
    return (
        <div
            className="bg-background border border-amber-100 shadow-sm rounded-lg overflow-hidden m-2 transition-all sm:hover:shadow-3xl sm:active:scale-95 p-2"
            // className="max-w-[250px] md:min-w-[150px] mx-auto md:flex md:flex-row md:wrap border-2 rounded-xl border-amber-100 overflow-hidden shadow-sm transition-all sm:hover:shadow-2xl sm:active:scale-95"
        >

            <Link
                to={id}
                state={
                    {
                        filter: filterType,
                        search: filterTypeURL
                    }
                }
                aria-label={`View details for ${name} priced at $${price} per day`}>
                <div className="">

                    <div className="aspect-[4/4] w-full bg-white bg-cover bg-center">
                        <img src={image} className="max-w-full mb-2" alt={`Image of ${name}`} />
                    </div>

                    <div className="flex flex-row wrap justify-between p-2">
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