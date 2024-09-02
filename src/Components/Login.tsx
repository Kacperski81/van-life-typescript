import { useEffect, useRef } from "react";
import {
  Form,
  useNavigate,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";

import { Error, Transaction } from "../types";
import { loginUser } from "../reducer/reducer";
import { useUser } from "../UserContext";
type ActionData = {
  user: {
    userName: string;
    email: string;
    userId: string;
    isLoggedIn: boolean;
  };
  transactions: Transaction[];
};

export function Login() {
  //data form actions
  const actionData = useActionData() as ActionData;
  // console.log("Action data: " , actionData);
  const { dispatch } = useUser();
  // console.log(user);
  // useNavigate for redirecting
  const navigate = useNavigate();
  // useNavigation for getting state of the router
  const navigation = useNavigation();

  // console.log({navigation})
  // useLoaction for getting where to redirect the user (to whre he is comming from)
  const location = useLocation();
  // useActionData for getting data
  const memoUrl = useRef(location.state ? location.state : "/host");

  useEffect(() => {
    if (typeof actionData === "object" && "userName" in actionData.user) {
      console.log("bac");
      console.log(actionData);
      const loggedUser = {
        userName: actionData.user.userName,
        email: actionData.user.email,
        userId: actionData.user.userId,
        isLoggedIn: true,
      };
      const userTransactions = actionData.transactions || [];
      dispatch(loginUser(loggedUser, userTransactions));
      navigate(memoUrl.current);
    }
  }, [actionData, navigate, dispatch]);

  function isErrorType(data: ActionData | Error): data is Error {
    return (data as Error).message !== undefined;
  }

  return (
    <div className="mx-auto my-0 w-full max-w-[500px] bg-background px-4 xl:flex xl:items-center xl:justify-center xl:bg-[transparent]">
      <Form
        method="post"
        className="flex aspect-square flex-col justify-center rounded-full border border-4 border-white bg-red-500 px-3 py-4 shadow-xl xl:grow"
      >
        <h1 className="mb-4 text-center text-2xl font-bold text-white">
          Sign in to your account
        </h1>
        <h2 className="mb-3 text-center text-xl text-white">
          {actionData && isErrorType(actionData) ? actionData.message : ""}
        </h2>
        <input
          className="rounded-t-lg p-4"
          type="email"
          name="email"
          placeholder="Email address"
        />
        <input
          className="rounded-b-lg p-4"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="false"
        />
        <button
          className="mx-auto mt-4 w-[80%] max-w-[80%] rounded-lg bg-white py-2 text-black hover:bg-black hover:text-white"
          type="submit"
        >
          {navigation.state !== "idle" ? "Loading..." : "Login"}
        </button>
      </Form>
    </div>
  );
}
