import { useState, useLayoutEffect } from 'react'

export const useFilterButton = (typeFilter: boolean) => {
    const [isActive, setIsActive] = useState<boolean>(typeFilter)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    
    useLayoutEffect(() => {
        setIsActive(typeFilter)
    },[isActive, typeFilter])

    return [isActive, isHovered, setIsHovered] as const
}