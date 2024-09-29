// import { useUser } from "../UserContext"
// import { useNavigate } from "react-router-dom"

// export function LoggedIn() {
//     const navigate = useNavigate()
//     const { setUser } = useUser()

//     return (
//         <button
//             className="bg-red-500 w-80 py-1 rounded-lg text-white"
//             onClick={() => {
//                 setUser(() => {
//                     return {
//                         userId: "",
//                         email: "",
//                         userName: "",
//                         isLoggedIn: false
//                     }
//                 })
//                 localStorage.removeItem('vanLife')
//                 return navigate("/login")
//             }}
//         >
//             Log out
//         </button>
//     )
// }