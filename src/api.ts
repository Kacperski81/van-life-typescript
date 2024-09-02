import { Van, InputType, } from "./types"
import { sleep } from "./utils"

type Creds = {
    user: {
        name: string,
        id: string, 
        email: string
    }
}

export async function getVan(id: string): Promise<Van | Error> {
    const url = `/api/vans/${id}`
    // await sleep(3000)
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data.vans
    } catch (error) {
        throw new Error("Failed to fetch van")
    }
}

export async function getVans(): Promise<Van[]> {
    const url = '/api/vans'
    // this sleep will also pasue the filter change action
    // await sleep(1000)
    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
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

// export async function getHostVans(hostId: string, id?: number): Promise<Van[]> {
export async function getHostVans(hostId: string): Promise<Van[]> {
    // await sleep(3000)
    const url = '/api/host/vans'
    const headers = {
        "Content-Type": "application/json",
        ...(hostId && { "HostId": hostId })
    }
    const res = await fetch(url, { headers })
    const data = await res.json()
    if (!res.ok) {
        throw new Error("Failed to fetch host vans")
    }
    return data.vans
}

export async function getHostVan(hostId: string, id: string): Promise<Van> {
    const url = `/api/host/vans/${id}`
    const headers = {
        "Content-Type": "application/json",
        ...(hostId && { "HostId": hostId })
    }
    const res = await fetch(url, { headers })
    if (!res.ok) {
        throw new Error("Failed to fetch host van")
    }
    const data = await res.json()
    return data.vans
}

export async function getUser(creds: InputType): Promise<Creds> {
    const res = await fetch('/api/login', {
        method: "post",
        body: JSON.stringify(creds),
    })
    const data = await res.json()
    console.log(data)

    if (!res.ok) {
        // console.log(data)
        throw {
            message: data.message
        }
    }
    return data
}

export async function getTransactions(hostId: string) {
    await sleep(2000)
    const url = '/api/transactions'
    const headers = {
        "Content-Type": "application/json",
        ...(hostId && { "HostId": hostId })
    }
    const res = await fetch(url, { headers })
    if (!res.ok) {
        throw new Error("Failed to fetch transactions")
    }
    const data = await res.json()
    console.log("data", data)
    return data.transactions.transactionsData
}

export async function getReviews() {
    await sleep(1000)
    const url = '/api/reviews'
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error("Failed to fetch reviews")
    }
    const data = await res.json()
    return data.reviews
}