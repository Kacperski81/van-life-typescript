import { Suspense } from "react";
import { Link, useLocation, useLoaderData, Await } from "react-router-dom";
import { Van } from "../types";

type LoaderData = {
  van: Van;
};

export function VanDetails() {
  const { van } = useLoaderData() as LoaderData;
  const location = useLocation();
  const vanId = location.state?.activeVan;

  const search = location.state?.search
    ? `/vans?${location.state.search}`
    : "/vans";
  const filter = location.state?.filter || "all";

  function renderVan(van: Van) {
    const filterStyle = `var(--color-${van.type})`;
    return (
      <div className="gap-6 md:flex md:p-4 xl:w-[1000px] xl:aspect-[16/8] bg-background lg:bg-transparent">
        <div className="mb-4 aspect-square w-full bg-cover bg-center sm:mx-auto md:w-[50%]">
          <img
            src={van.imageUrl}
            className="mx-auto w-full rounded-lg"
            alt={van.name}
          />
        </div>

        <div className="flex flex-col justify-center gap-2 md:mx-auto md:w-[50%]">
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
          <button className="my-4 w-full bg-rent-button py-2 text-[18px] font-bold text-white cursor-no-drop">
            Unavailable
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-start self-start lg:justify-center lg:self-center lg:w-11/12 lg:px-3 lg:bg-[rgba(233,217,191,0.5)] lg:py-3 lg:shadow-lg px-2 lg:aspect-[16/9]">
      <div className="flex flex-col bg-background px-4 lg:self-center lg:bg-transparent lg:w-11/12">
        <p className="mb-4 pt-4">
          <Link
            to={search}
            state={{
              activeVan: vanId,
            }}
          >
            ⬅️<span>Back to {filter} vans</span>
          </Link>
        </p>

        <Suspense
          fallback={
            <div className="bg-background h-screen flex justify-center lg:bg-transparent lg:max-w-[1000px] lg:h-min lg:aspect-[16/9] lg:flex lg:justify-center lg:items-center">
              <p>Loading ...</p>
            </div>
          }
        >
          <Await resolve={van}>{renderVan}</Await>
        </Suspense>
      </div>
    </div>
  );
}
