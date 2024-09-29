import { useFilterButton } from "../../hooks/useFilterButton";
import { changeVan } from "../../reducer/reducer";
import { Van } from "../../types";
import { useUser } from "../../UserContext";
type HostFilterProps = {
  van: Van;
};

export default function HostFilter({ van }: HostFilterProps) {
  const { state: {vanType}, dispatch } = useUser();
  const [isActive, isHovered, setIsHovered] = useFilterButton(van.type=== vanType);
  return (
    <button
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
      key={van.id}
      className="mr-2 rounded-lg bg-filter-normal px-4 py-2 text-sm text-filter-text"
      style={{
        backgroundColor:
          isActive || isHovered ? `var(--color-active-${van.type})` : "",
        color: isActive || isHovered ? "#FFEAD0" : "",
      }}
      onClick={() => dispatch(changeVan(van.type))}
    >
      {van.name}
    </button>
  );
}
