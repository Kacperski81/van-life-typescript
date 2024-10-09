import { BsStarFill } from "react-icons/bs";
// import { useUser } from "../../UserContext";
import ReviewsChart from "../../Components/Charts/Reviews/ReviewsChart";
import { changeReviewsDays } from "../../reducer/reducer";
import ReviewsSorter from "../../Components/Host/ReviewsSorter";
// import { convertTimestampToMoment } from "../../utils";
import useReviews from "../../hooks/useReviews";
export function Reviews() {
  const {averageRating, filteredReviews2, reviewsDays, dispatch} = useReviews();
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
      <ReviewsSorter reviews={filteredReviews2} />
    </section>
  );
}
