import { createContext } from "./create-context";
import { UserState } from "./types";

const [useUser, UserProvider] = createContext<UserState>();

export { useUser, UserProvider };
