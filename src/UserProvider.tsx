// UserProvider.tsx
import { PropsWithChildren, useReducer } from "react";
import { UserProvider as Provider } from "./UserContext";
import { hostReducer } from "./reducer/reducer";
// import { UserState } from "./types";
import { initialUserState } from "./utils";
// const initialState: UserState = {
//   incomeDays: 10,
//   vanType: "allVans",
//   user: {
//       userName: "",
//       email: "",
//       userId: "",
//       isLoggedIn: false,
//   },
//   transactions: [
//       {
//           total: 0,
//           date: "",
//           id: "",
//           userId: "",
//           simple: {
//             name: "",
//             price: 0,
//             reviewId: "",
//           },
//           rugged: {
//             name: "",
//             price: 0,
//             reviewId: "",
//           },
//           luxury: {
//             name: "",
//             price: 0,
//             reviewId: "",
//           },
//       }
//   ],
//   userVans: [
//       {
//           id: "",
//           name: "",
//           price: 0,
//           description:"",
//           imageUrl: "",
//           type: "",
//           hostId: ""
//       }
//   ],
//   reviews: [
//       {
//           rating: 0,
//           name: "",
//           date: "",
//           text: "",
//           id: "",
//           vanId: "",
//       }
//   ],
// }
const initialState = initialUserState;

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(hostReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
