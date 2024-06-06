import { vanType,errorType } from "./types"

export async function getVans() : Promise<vanType[]> {
    const res = await fetch("api/vans")
    if(!res.ok) {
        const error : errorType = {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
        throw error
    }
    const data = await res.json()
    return data.vans
}