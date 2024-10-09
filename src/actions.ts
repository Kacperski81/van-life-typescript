import { getUser, getTransactions, getHostVans, getReviews } from "./api";

export async function loginAction() {
  const email = "b@b.com" as string;
  const password = "w123" as string;
  const creds = { email, password };

  try {
    const user = await getUser(creds);
    const transactions = await getTransactions(user.id);
    console.log({transactions})
    const vans = await getHostVans(user.id);
    const reviews = await getReviews(user.id);
    sessionStorage.setItem("isLoggedIn", "true");
    return {
      incomeDays: 0,
      reviewsDays: 0,
      dashboardDays: 0,
      vanType: "allVans",
      user: {
        userName: user.name,
        email: user.email,
        userId: user.id,
        isLoggedIn: true,
      },
      transactions: transactions,
      userVans: vans,
      reviews: reviews,
    };
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Failed to fetch user");
  }
}