import { Transaction, User, UserReducer, LoginUserAction, ChangeIncomeDaysAction } from "../types";

//actions

export const loginUser = (
  user: User,
  transactions: Transaction[],
): LoginUserAction => ({
  type: "LOGIN_USER",
  payload: { user, transactions },
});

export const changeIncomeDays = (days: number): ChangeIncomeDaysAction => ({
  type: "CHANGE_INCOME_DAYS",
  payload: { days },
});

//reducer
export const hostReducer: UserReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INCOME_DAYS":
      return { ...state, incomeDays: action.payload.days };
    case "LOGIN_USER":
      return {
        ...state,
        incomeDays: 30,
        user: action.payload.user,
        transactions: action.payload.transactions,
      };
  }
  // return state;
};
