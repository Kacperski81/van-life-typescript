import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();
  return (
    <section className="mx-auto flex max-w-[700px] flex-col bg-background lg:justify-center lg:bg-[transparent]">
      <div className="mt-2 aspect-[5/2] w-full bg-about-image bg-contain bg-center bg-no-repeat lg:aspect-[0] lg:bg-none"></div>

      <div className="mx-auto my-4 px-4 text-justify text-white lg:bg-[rgba(233,217,191,0.7)] lg:text-black">
        <div className="p-4">
          <h2 className="text-[32px] font-extrabold text-black text-shadow md:leading-[38px] xl:text-4xl">
            Don't squeeze in a sedan when you could relax in a van.
          </h2>
          <p className="my-6">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are rectified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="my-6">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="mb-2 flex flex-col justify-around rounded-lg bg-light-orange p-8 text-xl font-bold leading-7">
          <h3 className="text-black">Your destination is waiting.</h3>
          <h3 className="mb-4 text-black">Your van is ready.</h3>
          <button
            className="max-w-52 rounded-lg bg-black px-4 py-2 text-xs text-white hover:bg-white hover:text-black"
            onClick={() => navigate("/vans")}
          >
            Explore our vans
          </button>
        </div>
      </div>
    </section>
  );
}
