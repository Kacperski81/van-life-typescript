import { 
    Navigate, 
    useRouteError, 
} from "react-router-dom"

export function Error() {
    const error = useRouteError() as {message: string, redirect: string}
    return <Navigate to={error.redirect} state={location.pathname} />
}