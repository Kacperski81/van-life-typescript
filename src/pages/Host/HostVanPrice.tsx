import { useHostVan } from "../../hooks/useHostVan"

export function HostVanPrice() {
    const { hostVan } = useHostVan()

    if (!hostVan) {
        return <p>Loading</p>
    }

    return (
        <h4 className="mt-4"><strong className="text-lg">${hostVan.price}</strong>/day</h4>
    )
}