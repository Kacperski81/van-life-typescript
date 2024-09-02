import { useState, Suspense } from "react";
import { FilterButton } from "../Components/FilterButton";
import { VanCard } from "../Components/VanCard";
import { useSearchParams, useLoaderData, Await } from "react-router-dom";
import { Van, Filter } from "../types";
import LeftArrow from "../Components/SliderArrows/LeftArrow";
import RightArrow from "../Components/SliderArrows/RightArrow";
import NoTurn from "../Components/SliderArrows/NoTurn";

export function Vans() {
  // const vans = useLoaderData()
  const [cardIndex, setCardIndex] = useState(0);
  const { vans } = useLoaderData() as { vans: Van[] };
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter: string | null = searchParams.get("type");
  const filters: Filter[] = [
    {
      name: "Simple",
      bg: "#e17654",
      text: "#ffead0",
    },
    {
      name: "Luxury",
      bg: "#161616",
      text: "#ffead0",
    },
    {
      name: "Rugged",
      bg: "#115e59",
      text: "#ffead0",
    },
  ];

  function showNextCard() {
    setCardIndex((prevIndex) => {
      if (prevIndex === vans.length - 1) {
        return vans.length - 1;
      } else {
        return prevIndex + 1;
      }
    });
  }

  function showPrevCard() {
    setCardIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex;
      } else {
        return prevIndex - 1;
      }
    });
  }

  function renderVans(vans: Van[]) {
    const filteredVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;
    return (
      <div className="mx-auto w-full xl:w-[1050px]">
        <div className="relative mx-auto w-full overflow-hidden xl:aspect-[21/10]">
          <div className="grid gap-4 p-4 min-[380px]:grid min-[380px]:grid-cols-2 lg:grid-cols-3 xl:mx-auto xl:flex xl:w-1/2 xl:max-w-fit">
            {filteredVans.map((van, index) => {
              return (
                <VanCard
                  key={van.id}
                  image={van.imageUrl}
                  name={van.name}
                  price={van.price}
                  type={van.type}
                  id={van.id}
                  searchParams={searchParams}
                  cardIndex={index}
                  activeIndex={cardIndex}
                />
              );
            })}
          </div>
          <button
            className="slider-button invisible left-0 px-2 xl:visible xl:hover:scale-110 xl:active:scale-95"
            onClick={showPrevCard}
          >
            {cardIndex === 0 ? <NoTurn /> : <LeftArrow />}
          </button>
          <button
            className="slider-button invisible right-0 px-2 xl:visible xl:hover:scale-110 xl:active:scale-95"
            disabled={cardIndex === filteredVans.length - 1}
            onClick={showNextCard}
          >
            {cardIndex === filteredVans.length - 1 ? (
              <NoTurn />
            ) : (
              <RightArrow />
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-start self-start lg:px-3">
      <h2 className="mb-3 text-center text-4xl font-extrabold text-black text-shadow md:text-[39px] md:leading-[38px]">
        <span className="xl:bg-[rgba(233,217,191,0.7)] xl:px-2">Explore our van options</span>
      </h2>

      <div className="mx-auto mb-4 flex flex-row lg:max-w-[1000px]">
        {filters.map((filter) => (
          <FilterButton
            key={filter.name}
            filter={filter}
            typeFilter={typeFilter ? typeFilter : ""}
            setSearchParams={setSearchParams}
            setCardIndex={setCardIndex}
          />
        ))}

        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className="text-filter-color ml-2 rounded-lg bg-[rgba(233,217,191,0.7)] p-2 text-sm md:text-black md:shadow-md md:hover:bg-black md:hover:text-black md:hover:text-white"
          >
            Clear filters
          </button>
        ) : (
          ""
        )}
      </div>

      <Suspense
        fallback={
          <div className="mx-auto mb-4 lg:max-w-[1000px]">Loading...</div>
        }
      >
        <Await resolve={vans}>{renderVans}</Await>
      </Suspense>
    </div>
  );
}
