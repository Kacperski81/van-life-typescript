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
    console.log("clicked");
    setNavToggle((prev) => !prev);
  };
  return (
    // <div className="grid grid-rows-layout font-sans max-w-screen-2xl mx-auto h-screen">
    <div
      className={clsx(
        "mx-auto grid h-screen max-w-screen-2xl grid-rows-hidden-menu font-sans text-sm transition-[grid] md:flex md:flex-col",
        { "grid grid-rows-mobile-menu transition-[grid]": !navToggle },
      )}
    >
      <UserProvider>
        <Header navToggle={navToggle} handleNavToggle={handleNavToggle} />
        <main className="flex grow bg-background bg-contain bg-center bg-no-repeat xl:bg-background-large xl:bg-mapbg">
          <Outlet />
        </main>
        <Footer />
      </UserProvider>
    </div>
  );
}
