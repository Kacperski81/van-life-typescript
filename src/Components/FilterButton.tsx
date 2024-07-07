import { useState, useLayoutEffect } from 'react'
import clsx from 'clsx'
import { Filter } from '../types'

type FilterButtonProps = {
    filter: Filter,
    typeFilter: string,
    setSearchParams: ({type} : {type:string}) => void
}

export function FilterButton({filter,typeFilter,setSearchParams}: FilterButtonProps) {
    // const isActive = typeFilter === filter.name.toLowerCase();
    
    const [isActive, setIsActive] = useState(typeFilter === filter.name.toLowerCase())
    useLayoutEffect(() => {
        setIsActive(typeFilter === filter.name.toLowerCase())
    },[isActive, filter.name, typeFilter])

    return (
        <button
            onClick={() => setSearchParams({type: `${filter.name.toLowerCase()}`})} 
            // className={clsx("bg-filter-bg hover:bg-[#fff] text-filter-color text-sm py-2 px-4 mr-2 rounded-lg", {
            //     "bg-[filter.bg]": typeFilter === filter.name.toLowerCase()
            // })}
            className={clsx("bg-filter-normal text-filter-text text-sm py-2 px-4 mr-2 rounded-lg")}
            style={{backgroundColor: isActive ? filter.bg : "", color: isActive ? "#FFEAD0" : ""}}
            >
                {filter.name}
        </button>
    )
}