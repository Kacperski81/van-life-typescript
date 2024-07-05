import { vanType, errorType, credsType, credsInputType } from "./types"

export async function getVans(id?: number): Promise<vanType[]> {
    const url = id ? `/api/vans/${id}` : '/api/vans'

    const res = await fetch(url)
    if (!res.ok) {
        const error: errorType = {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
        throw error
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(hostId: string, id?: number): Promise<vanType[]> {
    const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
    const headers = {
        "Content-Type": "application/json",
        ...(hostId && { "HostId": hostId})
    }
    const res = await fetch(url, {headers})
    if (!res.ok) {
        const error: errorType = {
            message: "Failed to fetch host vans",
            statusText: res.statusText,
            status: res.status
        }
        throw error
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