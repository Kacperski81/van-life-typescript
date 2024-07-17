import { Van, credsType, credsInputType } from "./types"
import { sleep } from "./utils"

export async function getVan(id: string): Promise<Van | Error> {
    const url = `/api/vans/${id}`
    // await sleep(2000)
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data.vans
    } catch (error) {
        return new Error("Failed to fetch van")
    }
}

export async function getVans(): Promise<Van[]> {
    const url = '/api/vans'
    // this sleep will also pasue the filter change action
    await sleep(2000)
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data.vans
    }
    catch (error) {
        throw new Error("vans not found")
    }
}
// export async function getVans2(id?: number): Promise<vanType[]> {

//     const url = id ? `/api/vans/${id}` : '/api/vans'
//     await sleep(2000)
//     const res = await fetch(url)
//     if (!res.ok) {
//         const error: errorType = {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//         throw error
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVans(hostId: string, id?: number): Promise<Van[]> {
    const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
    const headers = {
        "Content-Type": "application/json",
        ...(hostId && { "HostId": hostId })
    }
    const res = await fetch(url, { headers })
    if (!res.ok) {
        throw new Error("Failed to fetch host vans")
    }
    const data = await res.json()

    return data.vans
}

export async function getUser(creds: credsInputType): Promise<credsType> {
    const res = await fetch('/api/login', {
        method: "post",
        body: JSON.stringify(creds),
    })
    const data = await res.json()

    if (!res.ok) {
        console.log(data)
        throw {
            message: data.message
        }
    }
    console.log(data)
    return data
}