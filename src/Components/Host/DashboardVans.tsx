import { Link } from "react-router-dom";
import { useUser } from "../../UserContext";
import HostVanCard from "./HostVanCard";

export default function DashboardVans() {
  const {
    state: { userVans },
  } = useUser();
  return (
    <section className="px-2 pb-2 md:col-start-2 md:row-span-2 md:row-start-1 md:min-w-[600px] md:pb-0">
      <div className="flex items-center justify-between py-4 md:py-0">
        <h2 className="text-2xl md:mb-2 my-4">Your listed vans</h2>
        <Link to="/host/vans" className="text-base text-[#161616]">
          View all
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {userVans.map((van) => (
          <HostVanCard key={van.id} van={van} />
        ))}
      </div>
    </section>
  );
}
