import { useEffect, useRef } from "react"
import { Form, useNavigate, useActionData, useLocation } from "react-router-dom"
import { errorType, userType } from "../types"
import { useUser } from "../UserContext"
// import { LoggedIn } from "./LoggedIn"


export function Login() {

    //use context
    const { isLoggedIn, setUser } = useUser()
    
    const navigate = useNavigate()
    const location = useLocation()
    const actionData = useActionData() as userType | errorType
    const memoUrl = useRef(location.state ? location.state : "/host")
    
    
    useEffect(() => {
        
        if (typeof actionData === "object" && "userName" in actionData && !isLoggedIn) {
            setUser(() => ({
                userName: actionData.userName,
                email: actionData.email,
                userId: actionData.userId,
                isLoggedIn: true,
            }));
            localStorage.setItem('vanLife', JSON.stringify(actionData));
            navigate(memoUrl.current);
        }
        
    }, [actionData, setUser, isLoggedIn, navigate]);
    
    function isErrorType(data: userType | errorType): data is errorType {
        return (data as errorType).message !== undefined;
    }

    return (
        <div className="my-0 mx-auto bg-background">
            <Form method="post" className="flex flex-col gap-3 px-4 py-4">
                <h1 className="text-3xl font-bold">Sign in to your account</h1>
                <h2 className="text-2xl text-red-500 text-center">{actionData && isErrorType(actionData) ? actionData.message : ""}</h2>
                <input
                    className="p-2 rounded-lg"
                    type="email"
                    name="email"
                    placeholder="Email address"
                />
                <input
                    className="p-2 rounded-lg"
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="false"
                />
                <button
                    className="border py-2 rounded-lg text-white bg-rent-button"
                    type="submit"
                >
                    Log in
                </button>
            </Form>
        </div>
    )
}