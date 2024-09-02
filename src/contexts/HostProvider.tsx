import { useReducer } from "react";
import { HostProvider as Provider } from "./hostContext";
import { hostReducer } from "../reducer/reducer";
// import { VanType } from "../types";

type HostContextProviderProps = {
    children: React.ReactNode;
}

export const HostProvider = ({children}: HostContextProviderProps) => {
    const [state, dispatch] = useReducer(hostReducer, { incomeDays: 30, user: {} , transactions: [] });
    return (
        <Provider value={{state, dispatch}}>
            {children}
        </Provider>
    )
}