import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import clsx from "clsx";
import { UserProvider } from "../UserProvider";
import useLayout from "../hooks/useLayout";
import { isSafariBrowser } from "../utils";

export function Layout() {
  const { navToggle, handleNavToggle } = useLayout();
  useEffect(() => {
    if (isSafariBrowser()) {
      localStorage.removeItem("isLoggedIn");
    }
  }, []);
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
