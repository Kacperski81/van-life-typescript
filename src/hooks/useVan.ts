import { useState, useEffect } from 'react'
import { vanType } from '../types'

export function useVans() {
    const [vans, setVans] = useState<vanType[] | null>(null)
        
        useEffect(() => {
            async function getVans() {
                const response = await fetch('api/vans')
                const data = await response.json()
                setVans(data.vans)
            }   
            getVans()
        }, [])

        return {vans, setVans } as const
}
