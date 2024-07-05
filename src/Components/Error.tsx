import { Navigate, useRouteError, useLocation } from "react-router-dom"
// import { errorType } from "../types"

type routeError = {
    redirect: string,
    url: string
}

export function Error() {
    const location = useLocation()
    const error = useRouteError() as routeError
    if(error) {
        return <Navigate to={error.redirect} state={location.pathname} />
    }

}