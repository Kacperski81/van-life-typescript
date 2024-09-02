import clsx from "clsx";
import { Filter } from "../types";
import { useFilterButton } from "../hooks/useFilterButton";

type FilterButtonProps = {
  filter: Filter;
  typeFilter: string;
  setSearchParams: ({ type }: { type: string }) => void;
  setCardIndex: React.Dispatch<React.SetStateAction<number>>;
};

export function FilterButton({
  filter,
  typeFilter,
  setSearchParams,
  setCardIndex,
}: FilterButtonProps) {
  const [isActive, isHovered, setIsHovered] = useFilterButton(
    typeFilter === filter.name.toLowerCase(),
  );

  return (
    <button
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
      onClick={() => {
        setSearchParams({ type: `${filter.name.toLowerCase()}` });
        setCardIndex(0);
      }}
      className={clsx(
        "mr-2 rounded-lg bg-filter-normal px-4 py-2 text-sm text-filter-text",
      )}
      style={{
        backgroundColor: isActive || isHovered ? filter.bg : "",
        color: isActive || isHovered ? "#FFEAD0" : "",
      }}
    >
      {filter.name}
    </button>
  );
}
