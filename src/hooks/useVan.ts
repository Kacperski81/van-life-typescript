import { useState, useEffect } from 'react'
import { errorType, vanType } from '../types'
import { getVans } from '../api'

export function useVans() {
    const [vans, setVans] = useState<vanType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<errorType | null>(null)


    // useEffect(() => {
    //     async function getVans() {
    //         const response = await fetch('api/vans')
    //         const data = await response.json()
    //         setVans(data.vans)
    //     }   
    //     getVans()
    // }, [])

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err: errorType | unknown) {
                console.log(err)
                setError(err as errorType)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    return { vans, setVans, loading, error } as const
}
