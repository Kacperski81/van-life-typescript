import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useLayout() {
  const [navToggle, setNavToggle] = useState<boolean>(true);
  const location = useLocation();
  useEffect(() => {
    setNavToggle(true);
  }, [location.pathname]);

  const handleNavToggle = () => {
    setNavToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("isLoggedIn")
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      sessionStorage.removeItem("isLoggedIn");
    }
  }, [])

  return { navToggle, handleNavToggle}
}