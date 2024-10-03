import { useLocation, useParams } from "react-router-dom"
import { useUser } from "../../UserContext"
export function HostVanPrice() {
    const location = useLocation();
    const { id } = useParams<{ id: string }>();
    const vanId = location.state.vanId || id;
    const {
        state: { userVans },
    } = useUser();
    const hostVan = userVans.find((van) => van.id === vanId);
    return (
        <h4 className="mt-4"><strong className="text-lg">£{hostVan?.price}</strong>/day</h4>
    )
}