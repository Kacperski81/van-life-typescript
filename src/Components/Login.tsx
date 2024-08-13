import { useEffect, useRef } from "react"
import { Form, useNavigate, useActionData, useLocation } from "react-router-dom"
import { Error, userType } from "../types"
import { useUser } from "../UserContext"
// import { LoggedIn } from "./LoggedIn"


export function Login() {

    //use context
    const { isLoggedIn, setUser } = useUser()
    
    const navigate = useNavigate()
    const location = useLocation()
    const actionData = useActionData() as userType | Error
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
    
    function isErrorType(data: userType | Error): data is Error {
        return (data as Error).message !== undefined;
    }

    return (
        <div className="my-0 w-full max-w-[500px] mx-auto bg-background xl:bg-[transparent] xl:flex xl:justify-center xl:items-center px-4">
            <Form method="post" className="xl:grow flex flex-col justify-center px-3 py-4 bg-red-500 rounded-full aspect-square">
                <h1 className="text-3xl font-bold text-center text-white mb-4">Sign in to your account</h1>
                <h2 className="text-2xl text-white mb-3 text-center">{actionData && isErrorType(actionData) ? actionData.message : ""}</h2>
                <input
                    className="p-4 rounded-t-lg"
                    type="email"
                    name="email"
                    placeholder="Email address"
                />
                <input
                    className="p-4 rounded-b-lg"
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="false"
                />
                <button
                    className="w-[80%] max-w-[80%] mx-auto py-2 rounded-lg text-black bg-white hover:bg-black hover:text-white mt-4"
                    type="submit"
                >
                    Log in
                </button>
            </Form>
        </div>
    )
}