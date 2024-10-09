import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useLayout() {
  const [navToggle, setNavToggle] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();
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

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate])

  return { navToggle, handleNavToggle}
}