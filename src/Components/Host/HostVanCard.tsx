import { Link } from "react-router-dom";
import { Van } from "../../types";

export default function HostVanCard({van}: {van: Van}) {
  return (
    <figure key={van.id} className="flex gap-2 rounded-lg bg-white p-3">
      <div className="w-16 overflow-hidden rounded-lg">
        <img src={van.imageUrl} alt={van.name} />
      </div>
      <figcaption className="flex grow items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{van.name}</h3>
          <p className="text-base">£{van.price}/day</p>
        </div>
        <Link to={`/host/vans/${van.id}`} state={{vanId: van.id}}>Edit</Link>
      </figcaption>
    </figure>
  );
}
