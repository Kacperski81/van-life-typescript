import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <section
      className="flex w-full items-center bg-hero-image bg-cover bg-center bg-no-repeat lg:grow lg:bg-none"
    >
      <div className="mx-auto flex max-w-[500px] flex-col justify-center gap-10 px-4 py-5 lg:bg-[rgba(233,217,191,0.7)]">
        <h2 className="text-4xl font-extrabold text-white text-shadow md:text-[39px] md:leading-[38px] lg:text-black">
          You got the travel plans, we got the travel vans.
        </h2>
        <div className="">
          <p className="mb-2 text-base text-white md:text-2xl md:font-bold lg:text-black">
            Add adventure to your life by joining the #vanlife movement.
          </p>
          <p className="text-base text-white md:text-2xl md:font-bold lg:text-black">
            Rent the perfect van to make your perfect road trip.
          </p>
        </div>
        <button
          className="rounded bg-orange-500 py-2 text-base font-bold text-white hover:bg-white hover:text-orange-500"
          onClick={() => navigate("/vans")}
        >
          Find your van
        </button>
      </div>
    </section>
  );
}
