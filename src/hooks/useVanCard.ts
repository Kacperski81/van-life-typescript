import { useState, useEffect } from "react";

export default function useVanCard() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1280);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[isLargeScreen]);

    return { isLargeScreen };
}
