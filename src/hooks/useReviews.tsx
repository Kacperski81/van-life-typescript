// import { Review, Transaction } from "../types";
import { useUser } from "../UserContext";
export function useReviews() {
  // const filteredReviews = reviews.slice(reviews.length - reviewsDays);
  // const firstDay = transactions.slice(transactions.length - reviewsDays)[0].date;
  // const [day,month] = firstDay.split("/").map(Number);
  // const date = new Date(2024,month-1,day);
  const {
    state: { reviews, dashboardDays, transactions },
  } = useUser();
  function stringToDate(dateString: string) {
    const [day, month] = dateString.split("/").map(Number);
    return new Date(2024, month - 1, day);
  }
  const filteredReviews2 = reviews.filter((review) => {
    const firstDay = transactions.slice(transactions.length - dashboardDays)[0].date;

    const date = stringToDate(firstDay);
    // console.log({date})
    // console.log(new Date(stringToDate(review.date)))
    if (new Date(stringToDate(review.date)) >= date) {
      return true;
    }
  });
  const averageRating =
    filteredReviews2.reduce((acc, curr) => acc + curr.rating, 0) /
    filteredReviews2.length;
  //
  return { filteredReviews2, averageRating };
}
