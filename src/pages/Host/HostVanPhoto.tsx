import { useHostVan } from "../../hooks/useHostVan"

export function HostVanPhoto() {
    const { hostVan } = useHostVan()

    if(!hostVan) {
        return <p>Loading...</p>
    }

    return (
        <div className="mt-4">
            <img src={hostVan.imageUrl} alt={hostVan.name} className="rounded-lg" />
        </div>
    )
}