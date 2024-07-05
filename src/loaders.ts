import { vanType } from "./types"
import { getVans, getHostVans } from "./api"
import { requireAuth } from "./utils"

interface Params {
    id?: string
}

interface LoaderParams {
    params: Params
}


export async function loader(): Promise<vanType[]> {
    const vans = await getVans()
    if (!Array.isArray(vans)) {
        throw new Error("Arrarys of vans expected")
    }
    return vans as vanType[]
}

export async function loginLoader() {
    const isLoggedIn = await requireAuth()

    if (isLoggedIn) {
        throw {
            
        }
    }

    return true

}

export async function vanDetailsLoader({params}: LoaderParams): Promise<vanType[]> {
    const van = await getVans(Number(params.id))
    return van as vanType[]
}

export async function hostVansLoader() {
    
    console.log("host van loader")
    const loggedUser = await requireAuth()
    console.log({loggedUser})
    try {
        const vans = await getHostVans(loggedUser.userId)
        return vans
    } catch (error) {
        console.log({error})
    }
    return null
    
}

export async function hostVanDetailsLoader({params}: LoaderParams): Promise<vanType[]> {
    await requireAuth()
    if(!params.id) throw new Error("Van id is required")
    const van = await getHostVans(params.id)
    return van as vanType[]
}