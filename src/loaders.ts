import { vanType } from "./types"
import { getVans } from "./api"

export async function loader(): Promise<vanType[]> {
    const vans = await getVans()
    if (!Array.isArray(vans)) {
        throw new Error("Arrarys of vans expected")
    }
    return vans as vanType[]
}