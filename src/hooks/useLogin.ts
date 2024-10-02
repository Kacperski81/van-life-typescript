import { useEffect, useRef } from "react";
import { useNavigate, useActionData, useLocation, useNavigation } from "react-router-dom";
import { useUser } from "../UserContext";
import { ActionData } from "../types";
import { loginUser } from "../reducer/reducer";
export default function useLogin() {
  const actionData = useActionData() as ActionData;
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  const memoUrl = useRef(location.state ? location.state : "/host");

  useEffect(() => {
    if (typeof actionData === "object" && "userName" in actionData.user) {
      const loggedUser = {
        userName: actionData.user.userName,
        email: actionData.user.email,
        userId: actionData.user.userId,
        isLoggedIn: true,
      };
      const userTransactions = actionData.transactions || [];
      const userVans = actionData.userVans || [];
      const vanType = "allVans";
      const reviews = actionData.reviews || [];
      dispatch(
        loginUser(loggedUser, vanType, userTransactions, userVans, reviews),
      );
      navigate(memoUrl.current);
    }
  }, [actionData, navigate, dispatch]);

  return {navigation};
}