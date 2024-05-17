// import { useHostVan } from "../../hooks/useHostVan";
import { useHostVan } from "../../hooks/useHostVan"

export function HostVanInfo() {
    const { hostVan } = useHostVan()
    
    if (!hostVan) {
        return <p>Loading</p>
    }

    return (
        <div className="mt-4 flex flex-col gap-4">
            <h4><strong>Name:</strong> {hostVan.name}</h4>
            <h4><strong>Category:</strong> {hostVan.type}</h4>
            <p className="text-justify"><strong>Description:</strong> {hostVan.description}</p>
            <h4><strong>Visibility:</strong></h4>
        </div>
    )
}