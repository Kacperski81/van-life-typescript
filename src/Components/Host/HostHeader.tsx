import { NavLink } from "react-router-dom";

export default function HostHeader() {
  return (
    <nav className="grid max-w-[380px] grid-cols-4 px-2 py-8 sm:max-w-[500px] xl:flex xl:flex-col x">
      <NavLink
        end
        to="."
        className={({ isActive }) =>
          isActive
            ? "host-links-active sm:text-center"
            : "host-links sm:text-center"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="income"
        className={({ isActive }) =>
          isActive ? "host-links-active text-center" : "host-links text-center"
        }
      >
        Income
      </NavLink>
      <NavLink
        to="vans"
        className={({ isActive }) =>
          isActive ? "host-links-active text-center" : "host-links text-center"
        }
      >
        Vans
      </NavLink>
      <NavLink
        to="reviews"
        className={({ isActive }) =>
          isActive ? "host-links-active text-center" : "host-links text-center"
        }
      >
        Reviews
      </NavLink>
    </nav>
  );
}
