import { convertTimestampToMoment } from "../utils";
import { useUser } from "../UserContext";
export function useDashboardReviews() {
  const {
    state: { dashboardDays,reviewsDays, reviews, transactions },
    dispatch,
  } = useUser();
  const sortedTransactions = transactions.sort((a, b) => {
    const dateA = convertTimestampToMoment(a.date);
    const dateB = convertTimestampToMoment(b.date);
    return dateA.diff(dateB);
  });
  const sortedReviews = reviews.sort((a, b) => {
    const dateA = convertTimestampToMoment(a.date);
    const dateB = convertTimestampToMoment(b.date);
    return dateB.diff(dateA);
  });
  const firstDay = sortedTransactions.slice(sortedTransactions.length - dashboardDays)[0].date;
  const filteredReviews2 = sortedReviews.filter((review) => {
    const date = convertTimestampToMoment(firstDay).format("DD/MM");
    const reviewDate = convertTimestampToMoment(review.date).format("DD/MM");
    if (reviewDate >= date) {
      return review;
    }
  });
  const averageRating =
    filteredReviews2.reduce((acc, curr) => acc + curr.rating, 0) /
    filteredReviews2.length;
  //
  return { reviewsDays, filteredReviews2, averageRating, dispatch };
}
