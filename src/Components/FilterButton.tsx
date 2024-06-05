type FilterButtonProps = {
    text: string,
    setSearchParams: ({type} : {type:string}) => void
}

export function FilterButton({text,setSearchParams}: FilterButtonProps) {
    return (
        <button
            onClick={() => setSearchParams({type: `${text.toLowerCase()}`})} 
            className="bg-filter-bg text-filter-color text-sm py-2 px-4 mr-2 rounded-lg">
                {text}
        </button>
    )
}