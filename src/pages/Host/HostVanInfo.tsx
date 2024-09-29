import { useLocation } from "react-router-dom"
import { useUser } from "../../UserContext"
export function HostVanInfo() {
    const location = useLocation();
    const {
        state: { userVans },
    } = useUser();
    const hostVan = userVans.find((van) => van.id === location.state?.vanId);
    return (
        <div className="mt-4 flex flex-col gap-4">
            <h4><strong>Name: </strong>{hostVan?.name}</h4>
            <h4><strong>Category: </strong>{hostVan?.type}</h4>
            <p className="text-justify"><strong>Description: </strong>{hostVan?.description}</p>
            <h4><strong>Visibility: </strong>Public</h4>
        </div>
    )
}