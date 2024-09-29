import { useLocation } from "react-router-dom"
import { useUser } from "../../UserContext"

export function HostVanPhoto() {
    const location = useLocation();
    const { state: { userVans } } = useUser();
    const hostVan = userVans.find((van) => van.id === location.state?.vanId);

    return (
        <div className="mt-4 w-20">
            <img src={hostVan?.imageUrl} alt={hostVan?.name} className="rounded-lg" />
        </div>
    )
}