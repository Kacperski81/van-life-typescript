import { useLocation, useParams } from "react-router-dom"
import { useUser } from "../../UserContext"

export function HostVanPhoto() {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const vanId = location.state.vaId || id;
    const { state: { userVans } } = useUser();
    const hostVan = userVans.find((van) => van.id === vanId);

    return (
        <div className="mt-4 w-20">
            <img src={hostVan?.imageUrl} alt={hostVan?.name} className="rounded-lg" />
        </div>
    )
}