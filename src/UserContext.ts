import { createContext } from "./create-context";
import { UserState, UserAction } from "./types";

const [useUser, UserProvider] = createContext<{state: UserState; dispatch: React.Dispatch<UserAction> }>();

export { useUser, UserProvider };
