import { defer } from "react-router-dom"
import { getVan, getVans, getHostVans } from "./api"
import { requireAuth } from "./utils"


export async function loginLoader() {
    const isLoggedIn = await requireAuth()

    if (isLoggedIn) {
        throw {
            
        }
    }

    return true

}
export async function vansLoader() {
        const vans =  getVans()
        return defer({vans})
}

export async function vanLoader({params}: {params: {id?: string}}) {
    if(!params.id) throw new Error("Van id is required")
    const van = getVan(params.id)
    return defer({van})
}

export async function hostVansLoader() {
    
    const loggedUser = await requireAuth()
    try {
        const hostVans = getHostVans(loggedUser.userId)
        return defer({hostVans})
    } catch (error) {
        console.log({error})
    }
    return null
    
}
