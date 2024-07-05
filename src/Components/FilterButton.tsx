import clsx from 'clsx'

type FilterButtonProps = {
    text: string,
    typeFilter: string,
    setSearchParams: ({type} : {type:string}) => void
}

export function FilterButton({text,typeFilter,setSearchParams}: FilterButtonProps) {
    return (
        <button
            onClick={() => setSearchParams({type: `${text.toLowerCase()}`})} 
            className={clsx("bg-filter-bg text-filter-color text-sm py-2 px-4 mr-2 rounded-lg", {
                "bg-red-500": typeFilter === text.toLowerCase()
            })}>
                {text}
        </button>
    )
}