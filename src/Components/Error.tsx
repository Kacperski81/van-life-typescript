import { useRouteError } from "react-router-dom"
import { errorType } from "../types"

export function Error() {
    const error = useRouteError() as errorType

    return (
        <div>
            {error ? <h1>{error.message}</h1> : ""}
            <h1>Error</h1>
        </div>
    )
}