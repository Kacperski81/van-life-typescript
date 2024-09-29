import { useState, useEffect } from "react";
import { useLocation, useLoaderData, useSearchParams } from "react-router-dom";
import useVanCard from "./useVanCard";
import { Van } from "../types";

export default function useVans() {
  const location = useLocation();
  const { isLargeScreen } = useVanCard();
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const { vans } = useLoaderData() as { vans: Van[] };
  const [searchParams, setSearchParams] = useSearchParams();
  const activeVan: number = location.state?.activeVan;
  useEffect(() => {
    if (activeVan) {
      const vanIndex = activeVan;
      setActiveCardIndex(() => {
        if (vanIndex > 0 && isLargeScreen) {
          return vanIndex;
        } else {
          return 0;
        }
      });
    } else {
      setActiveCardIndex(0);
    }
  }, [activeVan, isLargeScreen]);

  return {activeCardIndex, setActiveCardIndex, vans, searchParams, setSearchParams}
}
