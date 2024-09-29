import { NavLink } from "react-router-dom";

export default function HostHeader() {
  return (
    <nav className="mx-auto grid max-w-[550px] grid-cols-[95px_65px_50px_75px] px-2 py-4 sm:grid-cols-[105px_75px_58px_70px] sm:gap-2 md:mx-0 md:flex md:flex-col md:gap-0 md:py-0">
      <NavLink
        end
        to="."
        className={({ isActive }) =>
          isActive
            ? "host-links-active text-center md:text-left"
            : "host-links text-center md:text-left"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="income"
        className={({ isActive }) =>
          isActive
            ? "host-links-active text-center md:text-left"
            : "host-links text-center md:text-left"
        }
      >
        Income
      </NavLink>
      <NavLink
        to="vans"
        className={({ isActive }) =>
          isActive
            ? "host-links-active text-center md:text-left"
            : "host-links text-center md:text-left"
        }
      >
        Vans
      </NavLink>
      <NavLink
        to="reviews"
        className={({ isActive }) =>
          isActive
            ? "host-links-active text-center md:text-left"
            : "host-links text-center md:text-left"
        }
      >
        Reviews
      </NavLink>
    </nav>
  );
}
