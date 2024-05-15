import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export function Layout() {
    return (
        <div className="grid grid-rows-layout font-sans max-w-screen-2xl mx-auto h-screen">
            <Header />
            <main className="flex">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}