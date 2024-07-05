// UserContext.ts
import { createContext } from "./create-context";
import { Dispatch, SetStateAction } from "react";
import { userType } from "./types";

type UserState = {
    userName: string;
    isLoggedIn: boolean;
    setUser: Dispatch<SetStateAction<userType>>;
}

const [useUser, UserProvider] = createContext<UserState>();

export { useUser, UserProvider };