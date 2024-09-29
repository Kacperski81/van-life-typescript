import clsx from "clsx";
import { Link } from "react-router-dom";
import useVanCard from "../hooks/useVanCard";

type VanCardProps = {
  image: string;
  name: string;
  price: number;
  type: string;
  id: string;
  searchParams: URLSearchParams;
  cardIndex: number;
  activeIndex: number;
};

export function VanCard({
  image,
  price,
  name,
  type,
  id,
  searchParams,
  cardIndex,
  activeIndex,
}: VanCardProps) {
  const filterTypeURL: string | null = searchParams.toString() || null;
  const filterType: string | null = searchParams.get("type") || null;

  const { isLargeScreen } = useVanCard();
  const filterStyle = `var(--color-${type})`;
  const isActive = cardIndex === activeIndex;
  const cardStyle = isActive
    ? "xl:hover:scale-105 xl:transform xl:scale-100 sm:active:scale-95"
    : "xl:transform xl:scale-50 xl:opacity-95";
  return (
    <div
      className={`mx-auto w-full rounded-lg bg-background bg-white p-2 transition-all duration-500 lg:max-w-[340px] xl:aspect-[20/9] xl:min-w-[340px] ${cardStyle}`}
      style={{ translate: `${-100 * activeIndex}%` }}
    >
      <Link
        to={
          isLargeScreen && isActive
            ? `${id}`
            : isLargeScreen && !isActive
              ? filterType
                ? `?type=${type}`
                : ""
              : `${id}`
        }
        state={{
          //pass isActive here to the VanDetails component
          activeVan: activeIndex,
          filter: filterType,
          search: filterTypeURL,
        }}
        aria-label={`View details for ${name} priced at $${price} per day`}
        className={clsx("cursor-pointer xl:cursor-none", {
          "xl:cursor-pointer": isActive,
        })}
      >
        <div className="relative w-full">
          <div className="aspect-square w-full">
            <img
              src={image}
              className="block h-full w-full object-cover"
              alt={`Image of ${name}`}
            />
          </div>

          <div className="wrap flex flex-row justify-between p-2">
            <div>
              <p className="text-[14px] font-bold">{name}</p>
              <p
                className="mt-1 w-4/5 rounded-lg px-2 py-1 text-center text-[12px] text-[#ffead0]"
                style={{ backgroundColor: `rgb(${filterStyle}` }}
              >
                {type.charAt(0).toUpperCase() + type.substring(1)}
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-bold leading-5">${price}</h3>
              <h5 className="text-right text-[12px] leading-4">/day</h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
