import { defer } from "react-router-dom"
// import { Van } from "./types"
import { getVan, getVans, getHostVans } from "./api"
import { requireAuth } from "./utils"

// type Params =  {
//     id?: string
// }

// interface LoaderParams {
//     params: Params
// }

// type LoaderFunctionArgs = {
//     params: Params
// }


export async function loginLoader() {
    const isLoggedIn = await requireAuth()

    if (isLoggedIn) {
        throw {
            
        }
    }

    return true

}

//LoaderFunction<any>

// export async function vansLoader(): Promise<Error | Van[]> {
export async function vansLoader() {
        const vans =  getVans()
        return defer({vans})
}

// export async function vanLoader({params}: LoaderFunctionArgs): Promise<Van | Error> {
//     if(!params.id) throw new Error("Van id is required")
//     const van = await getVan(params.id)
//     return van
// }


export async function vanLoader({params}: {params: {id?: string}}) {
    if(!params.id) throw new Error("Van id is required")
    const van = getVan(params.id)
    return defer({van})
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
