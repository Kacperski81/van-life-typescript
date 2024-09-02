import { Suspense } from "react";
import { Link, useLocation, useLoaderData, Await } from "react-router-dom";
import { Van } from "../types";

type LoaderData = {
  van: Van;
};

export function VanDetails() {
  const { van } = useLoaderData() as LoaderData;
  const location = useLocation();

  const search = location.state?.search
    ? `/vans?${location.state.search}`
    : "/vans";
  const filter = location.state?.filter || "all";

  function renderVan(van: Van) {
    const filterStyle = `var(--color-${van.type})`;
    return (
      <div className="gap-6 md:flex md:p-4 lg:w-[1000px] xl:aspect-[16/8]">
        <div className="mb-4 aspect-square w-full bg-cover bg-center sm:mx-auto md:w-[50%]">
          <img
            src={van.imageUrl}
            className="mx-auto w-full rounded-lg"
            alt={van.name}
          />
        </div>

        <div className="flex flex-col justify-center gap-2 md:mx-auto md:w-[55%]">
          <span
            className="mt-1 w-1/5 rounded-lg px-2 py-1 text-center text-base text-[#ffead0]"
            style={{ backgroundColor: `rgb(${filterStyle}` }}
          >
            {van.type.charAt(0).toUpperCase() + van.type.substring(1)}
          </span>

          <h2>{van.name}</h2>
          <p className="my-2 lg:text-lg lg:font-bold lg:text-black">
            <strong>${van.price}</strong>/day
          </p>
          <p className="my-2 text-justify lg:text-lg lg:font-bold lg:text-black">
            {van.description}
          </p>
          <button className="my-4 w-full bg-rent-button py-2 text-[18px] font-bold text-white">
            Rent this van
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:mx-auto xl:mt-10 xl:flex xl:items-start xl:justify-center">
      <div className="flex flex-col bg-background px-4 xl:border xl:bg-[rgba(233,217,191,0.7)] xl:shadow-lg">
        <p className="mb-4 pt-4">
          <Link to={search}>
            ⬅️<span>Back to {filter} vans</span>
          </Link>
        </p>

        <Suspense
          fallback={
            <div className="aspect-[16/9] w-full xl:aspect-[16/8] xl:w-[1000px]">
              Loading ...
            </div>
          }
        >
          <Await resolve={van}>{renderVan}</Await>
        </Suspense>
      </div>
    </div>
  );
}
