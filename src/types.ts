export type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
  hostId: string;
};
export type FirestoreTimestamp = {
  seconds: number;
  nanoseconds: number;
}
export type Creds = {
    name: string;
    id: string;
    email: string;
};

export type VanType = "allVans" | "luxury" | "rugged" | "simple";

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

// export type Transaction = {
//   // amount: number;
//   date: string;
//   id: string;
//   simple: number;
//   rugged: number;
//   luxury: number;
//   //added this property to the transaction type
//   allVans: number;
// };

export type Transaction = {
  userId: string;
  date: FirestoreTimestamp;
  id: string;
  total: number;
  simple: {
    name: string;
    price: number;
    reviewId: string;
  };
  rugged: {
    name: string;
    price: number;
    reviewId: string;
  };
  luxury: {
    name: string;
    price: number;
    reviewId: string;
  };
};

export type Review = {
  rating: number;
  name: string;
  date: FirestoreTimestamp;
  text: string;
  id: string;
  vanId: string;
};

export type User = {
  userName: string;
  email: string;
  userId: string;
  isLoggedIn: boolean;
};

export type UserState = {
  incomeDays: number;
  dashboardDays: number;
  reviewsDays: number;
  vanType: VanType;
  user: User;
  transactions: Transaction[];
  userVans: Van[];
  reviews: Review[];
  // dispatch: React.Dispatch<UserAction>;
};

export type Filter = {
  name: string;
  bg: string;
  text: string;
};

//context

//reducer
export type LoginUserAction = {
  type: "LOGIN_USER";
  payload: {
    user: User;
    vanType: VanType;
    transactions: Transaction[];
    userVans: Van[];
    reviews: Review[];
  };
};

export type LogoutUserAction = {
  type: "LOGOUT_USER";
};

export type ChangeDaysAction = {
  type: "CHANGE_INCOME_DAYS" | "CHANGE_REVIEWS_DAYS";
  payload: {
    days: number;
  };
};

export type ChangeVanAction = {
  type: "CHANGE_VAN";
  payload: {
    vanType: VanType;
  };
};

export type ChangeDashboardDaysAction = {
  type: "CHANGE_DASHBOARD_DAYS";
  payload: {
    days: number;
  };
};

export type UserAction =
  | LoginUserAction
  | LogoutUserAction
  | ChangeDaysAction
  | ChangeVanAction
  | ChangeDashboardDaysAction;

export type UserReducer = (state: UserState, action: UserAction) => UserState;

export type ActionData = {
  user: {
    userName: string;
    email: string;
    userId: string;
    isLoggedIn: boolean;
  };
  transactions: Transaction[];
  userVans: Van[];
  reviews: Review[];
};
