import { UserState } from "./types";
// import { useUser } from "./hooks/useUser";

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function stringToDate(dateString: string) {
  const [day, month] = dateString.split("/").map(Number);
  return new Date(2024, month - 1, day);
}

export async function requireAuth() {
  const isLoggedIn = JSON.parse(
    sessionStorage.getItem("isLoggedIn") || "false",
  );
  // console.log(str)
  console.log({ isLoggedIn });
  if (!isLoggedIn) {
    throw {
      redirect: "/login",
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
      date: "",
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
      date: "",
      text: "",
      id: "",
      vanId: "",
    },
  ],
};
