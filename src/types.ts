export type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
  hostId: string;
};

export type VanType = "all" | "luxury" | "rugged" | "simple";

export type Error = {
  userName?: string;
  email?: string;
  userId?: string;
  message: string;
  statusText: string;
  status: number;
  headers?: {
    map: {
      location: string;
    };
  };
};

export type InputType = {
  email: string;
  password: string;
};

export type Transaction = {
  amount: number;
  date: string;
  id: string;
  simple: number;
  rugged: number;
  luxury: number;
};



export type User = {
  userName: string;
  email: string;
  userId: string;
  isLoggedIn: boolean;
};

export type UserState = {
  incomeDays: number;
  user: User;
  transactions: Transaction[];
//   vans: Van[];
  dispatch: React.Dispatch<UserAction>;
};

export type Filter = {
  name: string;
  bg: string;
  text: string;
};

export type Review = {
  rating: number;
  name: string;
  date: string;
  text: string;
  id: string;
};

//context

//reducer
export type LoginUserAction = {
  type: "LOGIN_USER";
  payload: {
    user: User;
    transactions: Transaction[];
  };
};

export type LogoutUserAction = {
  type: "LOGOUT_USER";
};

export type ChangeIncomeDaysAction = {
  type: "CHANGE_INCOME_DAYS";
  payload: {
    days: number;
  };
};

export type UserAction = LoginUserAction | ChangeIncomeDaysAction;

export type UserReducer = (state: UserState, action: UserAction) => UserState;
