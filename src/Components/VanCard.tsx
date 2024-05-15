import { Link } from "react-router-dom"

interface VanCardProps {
    image: string
    name: string
    price: number
    type: string
    id: string
}

export function VanCard({ image, price, name, type, id }: VanCardProps) {
    return (
        <div className="max-w-full mb-3">
            <Link to={`/vans/${id}`} aria-label={`View details for ${name} priced at $${price} per day`}>

                <img src={image} className="max-w-full mb-2" alt={`Image of ${name}`} />
                <div className="flex flex-row justify-between">
                    <div>
                        <p className="text-[14px] font-bold">{name}</p>
                        <p className="text-[12px]">{type.charAt(0).toUpperCase() + type.substring(1)}</p>
                    </div>
                    <div>
                        <h3 className="text-[14px] leading-5 font-bold">${price}</h3>
                        <h5 className="text-[12px] leading-4 text-right">/day</h5>
                    </div>
                </div>

            </Link>
        </div>
    )
}