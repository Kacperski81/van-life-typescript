import { NavLink, useNavigate } from "react-router-dom"
import { useUser } from "../UserContext"
import IconHamburgerMenu from "./IconHamburgerMenu"
import clsx from "clsx"

type HeaderProps = {
    navToggle: boolean
    handleNavToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({ navToggle, handleNavToggle }: HeaderProps) {

    const navigate = useNavigate()
    const user = useUser()

    return (

        <header className={clsx("text-xl md:text-base flex items-center justify-between flex-wrap w-full p-2")}>

            <div className={clsx("ml-4 flex-shrink-0")}>

                <NavLink end to="/">
                    {/* <span className="text-[26px] leading-[40px] font-extrabold text-black">#VANLIFE</span> */}
                    {/* #VANLIFE */}
                    <div className="w-28 md:w-52 shadow-lg">
                        <img className="" src="/logo.png" alt="VanLife Logo" />
                    </div>
                </NavLink>

            </div>

            <button
                className="md:hidden p-2 mr-4 my-2 border rounded border-grey-600"
                onClick={() => handleNavToggle(navToggle)}
            >
                <span><IconHamburgerMenu /></span>
            </button>

            <div
                className={clsx("w-full md:w-auto md:block")}
            >
                <ul className="px-4 md:px-0 md:grid md:grid-cols-[70px_70px_70px_70px]">

                    <li className="md:flex md:justify-center">
                        <NavLink
                            to="/host"
                            className={({ isActive }) => isActive ? "header-link-active" : "header-link"}
                        >
                            Host
                        </NavLink>
                    </li>
                    <li className="md:flex md:justify-center">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "header-link-active" : "header-link"}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="md:flex md:justify-center">
                        <NavLink
                            to="/vans"
                            className={({ isActive }) => isActive ? "header-link-active" : "header-link"}
                        >
                            Vans
                        </NavLink>
                    </li>
                    {user.isLoggedIn ? (
                        <li className="md:flex md:justify-center">
                            <NavLink
                                onClick={() => {
                                    user.setUser(() => {
                                        return {
                                            userName: "",
                                            email: "",
                                            userId: "",
                                            isLoggedIn: false
                                        }
                                    })
                                    localStorage.removeItem('vanLife')
                                    return navigate("/")
                                }}
                                to="/"
                                className="header-link"
                                // className="hover:text-red-500 hover:font-bold"
                            >
                                Logout
                            </NavLink>
                        </li>
                    ) : (
                        <li className="md:flex md:justify-center">
                            <NavLink
                                to="/login"
                                className={({isActive}) => isActive ? "header-link-active" : "header-link"}
                            >
                                Login
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    )
}

// <header className="flex px-4 w-full">
//     <nav className="flex flex-row flex-1 justify-between items-center">
//         <NavLink className="text-[26px] leading-[40px] font-extrabold text-black" to="/">#VANLIFE</NavLink>
//         <ul className="flex flex-row items-center text-xs leading-6 border-8">
//             <li className="mr-3">
//                 <NavLink to="/host" className={({ isActive }) => isActive ? "text-[#161616] font-bold underline" : "text-grey-500"}>Host</NavLink>
//             </li>
//             <li className="mr-3">
//                 <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#161616] font-bold underline" : "text-grey-500"}>About</NavLink>
//             </li>
//             <li className="mr-3">
//                 <NavLink to="/vans" className={({ isActive }) => isActive ? "text-[#161616] font-bold underline" : "text-grey-500"}>Vans</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/login"><span className="">{user.isLoggedIn ? (
//                     <button
//                         onClick={() => console.log("ok")}
//                     >
//                         {user.userName}
//                     </button>) : <img src="/avatar-icon.png" className="w-4" />}</span></NavLink>
//             </li>
//         </ul>
//     </nav>
// </header>