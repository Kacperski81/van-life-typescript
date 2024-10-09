import ChartItem from "./ChartItem";
import { Review } from "../../../types";

export default function ReviewsChart({reviews}: {reviews: Review[]}) {

  return (
    <div className="mt-3 min-w-[300px] max-w-[548px] p-2">
      <div className="flex flex-col-reverse gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <ChartItem key={index + 1} value={index + 1} reviews={reviews}/>
        ))}
      </div>
    </div>
  );
}
