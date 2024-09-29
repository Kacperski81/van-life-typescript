import { Link } from "react-router-dom";
import { useUser } from "../../UserContext";

export function HostVans() {
  const {
    state: { userVans },
  } = useUser();

  return (
    <section className="px-4 py-3 mx-auto md:mx-0 max-w-[550px] md:min-w-[600px] lg:max-w-[800px] md:py-0">
      <h2>Your listed vans</h2>
      <div className="mt-4">
        {userVans.map((van) => {
          return (
            <Link
              to={`/host/vans/${van.id}`}
              key={van.id}
              state={{ vanId: van.id }}
            >
              <div className="mb-4 flex flex-row gap-2 rounded-lg bg-white p-3">
                <div className="w-[80px] rounded-lg">
                  <img src={van.imageUrl} className="" />
                </div>
                <div className="py-2">
                  <h5 className="font-bold">{van.name}</h5>
                  <p>${van.price}/day</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
