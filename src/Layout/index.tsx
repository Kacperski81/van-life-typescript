import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import clsx from "clsx"

export function Layout() {
    const [navToggle, setNavToggle] = useState<boolean>(true)
    const location = useLocation()
        
    useEffect(() => {
        setNavToggle(true)
    }, [location.pathname])
    
    const handleNavToggle = () => {
        console.log('clicked')
        setNavToggle(prev => !prev)
    }
    return (
        // <div className="grid grid-rows-layout font-sans max-w-screen-2xl mx-auto h-screen">
        <div
            className={clsx("bg-background transition-[grid] grid grid-rows-hidden-menu font-sans text-sm max-w-screen-2xl mx-auto h-screen",
                { "transition-[grid] grid grid-rows-mobile-menu": !navToggle })}
        >
            <Header navToggle={navToggle} handleNavToggle={handleNavToggle} />
            <main className="flex bg-background">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}