import { NavLink, Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Van } from "../../types";
import { useUser } from "../../UserContext";
export type ContextType = { hostVan: Van | null };

export function HostVanDetails() {
  const location = useLocation();
  const {
    state: { userVans },
  } = useUser();
  const hostVan = userVans.find((van) => van.id === location.state?.vanId);
  const filterStyle = `var(--color-${hostVan?.type})`;
  console.log({filterStyle})
  return (
    <section className="mx-auto max-w-[550px] px-2 py-4 md:min-w-[750px] lg:py-4">
      <Link to="/host/vans">⬅️ Back to all vans</Link>
      <div className="mt-4 grow rounded-lg bg-white p-4">
        <>
          <figure className="flex flex-row">
            <img
              className="w-[120px]"
              src={hostVan?.imageUrl}
              alt={hostVan?.name}
            />
            <figcaption className="pl-4">
              <p className="inline rounded-md px-3 py-1 text-[13px] text-[#FFEAD0]" style={{ backgroundColor: `rgb(${filterStyle}` }}>
                {hostVan?.type}
              </p>
              <h3 className="mt-2 text-[20px] font-bold">{hostVan?.name}</h3>
              <p>
                <strong>${hostVan?.price}</strong>/day
              </p>
            </figcaption>
          </figure>
        </>

        <div className="mt-4 flex flex-row gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
            state={{ vanId: hostVan?.id }}
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
            state={{ vanId: hostVan?.id }}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
            to="photos"
            state={{ vanId: hostVan?.id }}
          >
            Photos
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
}
