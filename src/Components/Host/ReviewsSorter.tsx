import useReviewsSorter from "../../hooks/useReviewsSorter";
import { Review } from "../../types";
import ReviewsDetails from "../Charts/Reviews/ReviewsDetails";
export default function ReviewsSorter({ reviews }: { reviews: Review[] }) {
  const { sort, setSort, sortedReviews, reviewsRef } = useReviewsSorter(reviews);
  return (
    <>
      <div className="flex items-baseline justify-between px-2 py-2 md:w-[550px]">
        <h3 className="text-lg font-bold">Reviews ({sortedReviews.length})</h3>
        <div className="flex gap-1">
          <span className="">sort by: </span>
          <select
            className="border-none bg-background py-0 text-sm"
            value={sort}
            onChange={(e) => setSort(() => e.target.value)}
          >
            <option value="recent">Most recent</option>
            <option value="rating">Highest rating</option>
            <option value="lowest">Lowest rating</option>
          </select>
        </div>
      </div>
      <div
        ref={reviewsRef}
        className="custom-scrollbar md:h-[320px] md:w-[550px] md:overflow-y-auto md:px-2"
      >
        <ReviewsDetails reviews={sortedReviews} />
      </div>
    </>
  );
}
