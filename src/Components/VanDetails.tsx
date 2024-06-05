import { Link, useParams, useLocation } from "react-router-dom"
import { useVanDetails } from "../hooks/useVanDetails"

export function VanDetails() {
    const { id } = useParams<{ id: string }>()
    const { vanDetails } = useVanDetails(id!)
    const location = useLocation()
    const search = location.state?.search ? `/vans?${location.state.search}` : "/vans"
    const filter = location.state?.filter || "all"
    return (
        <div>

            {vanDetails ? (

                <div className="px-4">

                    <p className="mb-4">
                        {/* <Link to="/vans"> */}
                        <Link to={search} >

                            ⬅️<span>Back to {filter} vans</span>
                            
                        </Link>
                    </p>

                    <img src={vanDetails.imageUrl} />

                    <button
                        className="text-base my-2 py-2 px-4 bg-filter-bg rounded-lg"

                    >
                        {vanDetails.type.charAt(0).toUpperCase() + vanDetails.type.substring(1)}
                    </button>

                    <h2>{vanDetails.name}</h2>
                    <p className="my-2"><strong>${vanDetails.price}</strong>/day</p>
                    <p className="text-justify my-2">{vanDetails.description}</p>
                    <button className="bg-rent-button w-full my-4 py-2 font-bold text-[18px] text-white">Rent this van</button>
                </div>
            ) : <p>Loading...</p>}
        </div>

    )
}