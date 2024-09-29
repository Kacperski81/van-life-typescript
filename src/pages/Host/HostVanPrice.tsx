import { useLocation } from "react-router-dom"
import { useUser } from "../../UserContext"
export function HostVanPrice() {
    const location = useLocation();
    const {
        state: { userVans },
    } = useUser();
    const hostVan = userVans.find((van) => van.id === location.state?.vanId);
    return (
        <h4 className="mt-4"><strong className="text-lg">£{hostVan?.price}</strong>/day</h4>
    )
}