// import { useUser } from "../../UserContext";
import { changeReviewsDays } from "../../reducer/reducer";
import { useDashboardReviews } from "../../hooks/useDashboardReviews";
export default function RangeInput() {

  const { reviewsDays, dispatch } = useDashboardReviews()

  return (
    <div className="flex gap-1 my-4">
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
  );
}
