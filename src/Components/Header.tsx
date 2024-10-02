import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import IconHamburgerMenu from "./IconHamburgerMenu";
import clsx from "clsx";
import { logoutUser } from "../reducer/reducer";

type HeaderProps = {
  navToggle: boolean;
  handleNavToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Header({ navToggle, handleNavToggle }: HeaderProps) {
  const navigate = useNavigate();
  const {state: {user}, dispatch }  = useUser();
  return (
    <header className="flex w-full flex-wrap items-center justify-between bg-background p-2 lg:bg-[#e9dbc0]">
      <div className="ml-4 flex-shrink-0">
        <NavLink end to="/">
          {/* <span className="text-[26px] leading-[40px] font-extrabold text-black">#VANLIFE</span> */}
          {/* #VANLIFE */}
          <div className="mb-3 flex w-[100px] items-center lg:w-[120px]">
            <img className="" src="/logo-base.png" alt="VanLife Logo" />
            <img className="" src="/logo.png" alt="Text logo" />
          </div>
        </NavLink>
      </div>

      <button
        className="border-grey-600 my-2 mr-4 rounded border p-2 md:hidden"
        onClick={() => handleNavToggle(navToggle)}
      >
        <span>
          <IconHamburgerMenu />
        </span>
      </button>

      <div className={clsx("w-full md:block md:w-auto")}>
        <ul className="px-4 text-lg md:grid md:grid-cols-[70px_70px_70px_70px] md:px-0 md:text-base">
          <li className="md:flex md:justify-center">
            <NavLink
              to="/host"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              state={{abc: "dev"}}
            >
              Host
            </NavLink>
          </li>
          <li className="md:flex md:justify-center">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="md:flex md:justify-center">
            <NavLink
              to="/vans"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
            >
              Vans
            </NavLink>
          </li>
          {user.isLoggedIn ? (
            <li className="md:flex md:justify-center">
              <NavLink
                onClick={() => {
                  sessionStorage.removeItem("isLoggedIn");
                  dispatch(logoutUser());
                  return navigate("/");
                }}
                to="/"
                className="header-link">
                Logout
              </NavLink>
            </li>
          ) : (
            <li className="md:flex md:justify-center">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "header-link-active" : "header-link"
                }
                
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

