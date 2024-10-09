import { UserState } from "./types";
// import { useUser } from "./hooks/useUser";
import moment from "moment";

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function stringToDate(dateString: string) {
  return dateString;
}
export function isSafariBrowser() {
  const userBrowser = navigator.userAgent.toLocaleLowerCase();
  return userBrowser.includes("safari")
}

export async function requireAuth() {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || "false");
  if (!isLoggedIn) {
    throw {
      redirect: "/login",
      // state: {abc: "dev"},
    };
  }
  // console.log(isLoggedIn)
  return isLoggedIn;
}

export const initialUserState: UserState = {
  incomeDays: 10,
  dashboardDays: 10,
  reviewsDays: 10,
  vanType: "allVans",
  user: {
    userName: "",
    email: "",
    userId: "",
    isLoggedIn: false,
  },
  transactions: [
    {
      total: 0,
      date: { seconds: 0, nanoseconds: 0 },
      id: "",
      userId: "",
      simple: {
        name: "",
        price: 0,
        reviewId: "",
      },
      rugged: {
        name: "",
        price: 0,
        reviewId: "",
      },
      luxury: {
        name: "",
        price: 0,
        reviewId: "",
      },
    },
  ],
  userVans: [
    {
      id: "",
      name: "",
      price: 0,
      description: "",
      imageUrl: "",
      type: "",
      hostId: "",
    },
  ],
  reviews: [
    {
      rating: 0,
      name: "",
      date: { seconds: 0, nanoseconds: 0 },
      text: "",
      id: "",
      vanId: "",
    },
  ],
};

export const convertTimestampToMoment = (timestamp: {
  seconds: number;
  nanoseconds: number;
}) => {
  return moment.unix(timestamp.seconds);
};
