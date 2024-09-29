import {
  Transaction,
  User,
  VanType,
  UserReducer,
  LoginUserAction,
  LogoutUserAction,
  ChangeDaysAction,
  ChangeDashboardDaysAction,
  Van,
  Review,
  ChangeVanAction,
  UserState,
  UserAction,
} from "../types";
import { initialUserState } from "../utils";
//actions

export const loginUser = (
  user: User,
  vanType: VanType,
  transactions: Transaction[],
  userVans: Van[],
  reviews: Review[],
): LoginUserAction => ({
  type: "LOGIN_USER",
  payload: { user, vanType, transactions, userVans, reviews },
});

export const logoutUser = (): LogoutUserAction => ({
  type: "LOGOUT_USER",
});

export const changeIncomeDays = (days: number): ChangeDaysAction => ({
  type: "CHANGE_INCOME_DAYS",
  payload: { days },
});

export const changeReviewsDays = (days: number): ChangeDaysAction => ({
  type: "CHANGE_REVIEWS_DAYS",
  payload: { days },
});

export const changeDashboardDays = (
  days: number,
): ChangeDashboardDaysAction => ({
  type: "CHANGE_DASHBOARD_DAYS",
  payload: { days },
});

export const changeVan = (vanType: VanType): ChangeVanAction => ({
  type: "CHANGE_VAN",
  payload: { vanType },
});

//reducer
export const hostReducer: UserReducer = (
  state: UserState,
  action: UserAction,
) => {
  switch (action.type) {
    case "CHANGE_INCOME_DAYS":
      return { ...state, incomeDays: action.payload.days };
    case "CHANGE_REVIEWS_DAYS":
      return { ...state, reviewsDays: action.payload.days };
    case "CHANGE_DASHBOARD_DAYS":
      return {
        ...state,
        dashboardDays: action.payload.days,
        incomeDays: action.payload.days,
        reviewsDays: action.payload.days,
      };
    case "LOGIN_USER":
      return {
        ...state,
        incomeDays: 10,
        user: action.payload.user,
        vanType: "allVans",
        transactions: action.payload.transactions,
        userVans: action.payload.userVans,
        reviews: action.payload.reviews,
      };
    case "LOGOUT_USER":
      return initialUserState;
        // ...state,
        // user: {
        //   userName: "",
        //   email: "",
        //   userId: "",
        //   isLoggedIn: false,
        // },
        // incomeDays: 0,
        // reviewsDays: 0,
        // dashboardDays: 0,
        // vanType: "allVans",
        // transactions: [],
        // userVans: [],
        // reviews: [],
      // };
    case "CHANGE_VAN":
      return { ...state, vanType: action.payload.vanType };
  }
  // return state;
};
