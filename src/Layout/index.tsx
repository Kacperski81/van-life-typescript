import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import clsx from "clsx"

export function Layout() {
    const [navToggle, setNavToggle] = useState<boolean>(true)
    const location = useLocation()

    const handleNavToggle = () => {
        console.log('clicked')
        setNavToggle(prev => !prev)
    }

    useEffect(() => {
        setNavToggle(true)
    }, [location.pathname])
    
    return (
        // <div className="grid grid-rows-layout font-sans max-w-screen-2xl mx-auto h-screen">
        <div
            className={clsx("bg-background transition-[grid] grid grid-rows-hiddenMenu font-sans max-w-screen-2xl mx-auto h-screen",
                { "transition-[grid] grid grid-rows-shownMenu": !navToggle })}
        >
            <Header navToggle={navToggle} handleNavToggle={handleNavToggle} />
            <main className="flex">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}