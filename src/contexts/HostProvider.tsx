import { useReducer } from "react";
import { HostProvider as Provider } from "./hostContext";
import { hostReducer } from "../reducer/reducer";
// import { VanType } from "../types";

type HostContextProviderProps = {
  children: React.ReactNode;
};

export const HostProvider = ({ children }: HostContextProviderProps) => {
  const [state, dispatch] = useReducer(hostReducer, {
    incomeDays: 30,
    vanType: "all",
    user: {
        userName: "",
        email: "",
        userId: "",
        isLoggedIn: false,
    },
    transactions: [
        {
            amount: 0,
            date: "",
            id: "",
            simple: 0,
            rugged: 0,
            luxury: 0,
        }
    ],
    userVans: [
        {
            id: "",
            name: "",
            price: 0,
            description:"",
            imageUrl: "",
            type: "",
            hostId: ""
        }
    ],
    reviews: [
        {
            rating: 0,
            name: "",
            date: "",
            text: "",
            id: "",
            vanId: "",
        }
    ],
  });
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
