import { Link, useLocation, useLoaderData } from "react-router-dom"
import { vanType } from "../types"

export function VanDetails() {
    
    const vanDetails: vanType = useLoaderData() as vanType

    const location = useLocation()
    const search = location.state?.search ? `/vans?${location.state.search}` : "/vans"
    const filter = location.state?.filter || "all"
    return (
        <div className="bg-background">

            <div className="px-4">

                <p className="mb-4">
                    {/* <Link to="/vans"> */}
                    <Link to={search} >

                        ⬅️<span>Back to {filter} vans</span>

                    </Link>
                </p>
                <div className="aspect-[4/4] bg-white bg-cover bg-center">
                    <img src={vanDetails.imageUrl} alt={vanDetails.name}/>
                </div>

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
        </div>

    )
}