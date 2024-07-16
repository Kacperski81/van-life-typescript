import { 
    // Navigate, 
    useRouteError, 
    // useLocation 
} from "react-router-dom"
// import { errorType } from "../types"

export function VansError() {
    // const location = useLocation()
    const error = useRouteError() as {message: string, redirect: string}
    // console.log(error)
    // return <Navigate to={error.redirect} state={location.pathname} />
    return (
        <div className="bg-background p-4">
            <h1 className="font-bold">Error: <span className="font-normal">{error?.message}</span></h1>
        </div>
    )

}