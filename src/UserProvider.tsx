// UserProvider.tsx
import { PropsWithChildren, useReducer } from "react";
import { UserProvider as Provider } from "./UserContext";
import { hostReducer } from "./reducer/reducer";
import { UserState } from "./UserContext";
const initialState: UserState = {
  incomeDays: 0,
  user: {
    userName: "",
    email: "",
    userId: "",
    isLoggedIn: false,
  },
  transactions: [],
  dispatch: () => {},
};

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(hostReducer, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};
