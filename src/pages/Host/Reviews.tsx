import { BsStarFill } from "react-icons/bs";
import { useUser } from "../../UserContext";
import ReviewsChart from "../../Components/Charts/Reviews/ReviewsChart";
import ReviewsDetails from "../../Components/Charts/Reviews/ReviewsDetails";
import { changeReviewsDays } from "../../reducer/reducer";
export function Reviews() {
  const {
    state: { reviewsDays, reviews, transactions}, dispatch
  } = useUser();
  function stringToDate(dateString: string) {
    const [day, month] = dateString.split("/").map(Number);
    return new Date(2024, month - 1, day);
  }
  const filteredReviews2 = reviews.filter((review) => {
    const firstDay = transactions.slice(transactions.length - reviewsDays)[0].date;

    const date = stringToDate(firstDay);
    if (new Date(stringToDate(review.date)) >= date) {
      return true;
    }
  });
  const averageRating =
    filteredReviews2.reduce((acc, curr) => acc + curr.rating, 0) /
    filteredReviews2.length;

  return (
    <section className="mx-auto max-w-[550px] px-4 py-3 md:mx-0 md:min-w-[600px] md:py-0 lg:max-w-[800px]">
      <h2>Your reviews</h2>
      <div className="my-4 flex gap-1">
        <span>Last </span>
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={reviewsDays}
          onChange={(e) => dispatch(changeReviewsDays(Number(e.target.value)))}
        />
        <span>{reviewsDays} days</span>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="my-3 text-[32px] font-bold">
          {averageRating.toFixed(1)}
        </h3>
        <BsStarFill fill="orange" />
        <p className="text-base font-normal">overall rating</p>
      </div>
      <ReviewsChart reviews={filteredReviews2} />
      <h3 className="text-lg font-bold">Reviews ({filteredReviews2.length})</h3>
      <div className="custom-scrollbar md:-[320px] md:w-[550px] md:h-[320px] md:overflow-y-auto md:px-2">
        <ReviewsDetails reviews={filteredReviews2} />
      </div>
    </section>
  );
}
