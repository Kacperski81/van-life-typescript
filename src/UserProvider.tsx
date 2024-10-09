import { PropsWithChildren, useReducer } from "react";
import { UserProvider as Provider } from "./UserContext";
import { hostReducer } from "./reducer/reducer";
import { UserState } from "./types";
import { initialUserState } from "./utils";

const initialState: UserState =initialUserState;

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(hostReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
