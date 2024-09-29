import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import clsx from "clsx";
import { UserProvider } from "../UserProvider";

export function Layout() {
  const [navToggle, setNavToggle] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setNavToggle(true);
  }, [location.pathname]);

  const handleNavToggle = () => {
    setNavToggle((prev) => !prev);
  };
  
  return (
    <div
      className={clsx(
        "grid h-screen grid-rows-hidden-menu bg-background font-sans text-sm transition-[grid] lg:bg-transparent",
        { "grid grid-rows-mobile-menu transition-[grid]": !navToggle },
      )}
    >
      <UserProvider>
        <Header navToggle={navToggle} handleNavToggle={handleNavToggle} />
        <main className="flex bg-contain bg-center bg-no-repeat lg:bg-mapbg">
          <Outlet />
        </main>
        <Footer />
      </UserProvider>
    </div>
  );
}
