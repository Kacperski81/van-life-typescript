import { Suspense } from "react";
import { FilterButton } from "../Components/FilterButton";
import { VanCard } from "../Components/VanCard";
import { Await } from "react-router-dom";
import { Van, Filter } from "../types";
import LeftArrow from "../Components/Slider/LeftArrow";
import RightArrow from "../Components/Slider/RightArrow";
import NoTurn from "../Components/Slider/NoTurn";
import SliderNavigation from "../Components/Slider/SliderNavigation";
import useVans from "../hooks/useVans";

export function Vans() {
  const {
    activeCardIndex,
    setActiveCardIndex,
    vans,
    searchParams,
    setSearchParams,
  } = useVans();

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
    setActiveCardIndex((prevIndex) => {
      if (prevIndex === vans.length - 1) {
        return vans.length - 1;
      } else {
        return prevIndex + 1;
      }
    });
  }

  function showPrevCard() {
    setActiveCardIndex((prevIndex) => {
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
      <div className="mx-auto w-full xl:aspect-[16/9] lg:max-w-[1000px]">
        <div className="relative mx-auto w-full overflow-hidden">
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
                  activeIndex={activeCardIndex}
                />
              );
            })}
          </div>
          <button
            className="slider-button invisible left-0 px-2 xl:visible xl:hover:scale-110 xl:active:scale-95"
            onClick={showPrevCard}
          >
            {activeCardIndex === 0 ? <NoTurn /> : <LeftArrow />}
          </button>
          <button
            className="slider-button invisible right-0 px-2 xl:visible xl:hover:scale-110 xl:active:scale-95"
            disabled={activeCardIndex === filteredVans.length - 1}
            onClick={showNextCard}
          >
            {activeCardIndex === filteredVans.length - 1 ? (
              <NoTurn />
            ) : (
              <RightArrow />
            )}
          </button>
        </div>
        <div className="invisible xl:visible xl:mx-auto xl:flex xl:max-w-[300px] xl:flex-row xl:items-center xl:justify-center xl:gap-5">
          {filteredVans.map((van, index) => {
            return (
              <SliderNavigation
                key={van.id}
                cardIndex={index}
                activeCardIndex={activeCardIndex}
                setActiveCardIndex={setActiveCardIndex}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex bg-background lg:bg-transparent w-full flex-col justify-start self-start xl:aspect-[16/9] lg:w-11/12 lg:justify-center lg:gap-2 xl:self-center xl:bg-[rgba(233,217,191,0.3)] lg:px-3 xl:shadow-lg xl:py-3">
      <h2 className="pb-3 text-center text-4xl font-extrabold text-black text-shadow md:text-[39px] md:leading-[38px]">
        <span className="xl:px-2">Explore our van options</span>
      </h2>
      <div className="mx-auto mb-4 flex flex-row lg:max-w-[1000px]">
        {filters.map((filter) => (
          <FilterButton
            key={filter.name}
            filter={filter}
            typeFilter={typeFilter ? typeFilter : ""}
            setSearchParams={setSearchParams}
            setCardIndex={setActiveCardIndex}
          />
        ))}

        {typeFilter ? (
          <button
            onClick={() => {
              setSearchParams({});
            }}
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
          <div className="mx-auto w-full h-screen flex lg:aspect-[16/9] lg:max-w-[1000px] justify-center xl:h-fit">
            <p>Loading ...</p>
          </div>
        }
      >
        <Await resolve={vans}>{renderVans}</Await>
      </Suspense>
    </div>
  );
}
