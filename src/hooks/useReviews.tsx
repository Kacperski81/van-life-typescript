import { stringToDate } from "../utils";
import { useUser } from "../UserContext";
export function useReviews() {
  const {
    state: { dashboardDays,reviewsDays, reviews, transactions}, dispatch
  } = useUser();

  const filteredReviews2 = reviews.filter((review) => {
    const firstDay = transactions.slice(transactions.length - dashboardDays)[0].date;

    const date = stringToDate(firstDay);
    if (new Date(stringToDate(review.date)) >= date) {
      return true;
    }
  });
  const averageRating =
    filteredReviews2.reduce((acc, curr) => acc + curr.rating, 0) /
    filteredReviews2.length;
  //
  return { reviewsDays,filteredReviews2, averageRating, dispatch };
}
