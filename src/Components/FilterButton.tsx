export function FilterButton({text}: {text: string}) {
    return (
        <button className="bg-filter-bg text-filter-color text-sm py-2 px-4 mr-2 rounded-lg">{text}</button>
    )
}