import { useNavigate } from "react-router-dom"
import { useUser } from "../UserContext"


export function LoggedIn() {
    const { setUser } = useUser()
    return (
        <button
            className="bg-red-500 w-80 py-1 rounded-lg text-white"
            onClick={() => {
                setUser(() => {
                    return {
                        userName: "",
                        isLoggedIn: false
                    }
                })
                localStorage.removeItem('vanLife')
                return navigate("/login")
            }}
        >
            Log out
        </button>
    )
}