import { useState, useEffect } from "react"
import { Van } from "../types"

export function useVanDetails(id: string) {

    const [vanDetails, setVanDetails] = useState<Van | null>(null)
    
    useEffect(() => {
        async function fetchVanDetails(id: string) {
            const response = await fetch(`/api/vans/${id}`)
            const data = await response.json()
            setVanDetails(data.vans)
        }
        fetchVanDetails(id!)
    },[id])

    return { vanDetails } as const
}