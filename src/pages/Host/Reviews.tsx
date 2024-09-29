import { BsStarFill } from "react-icons/bs";
import { useReviews } from "../../hooks/useReviews";
import ReviewsChart from "../../Components/Charts/Reviews/ReviewsChart";
import ReviewsDetails from "../../Components/Charts/Reviews/ReviewsDetails";
import RangeInput from "../../Components/Host/RangeInput";
export function Reviews() {
  const { filteredReviews2, averageRating } = useReviews();

  return (
    <section className="mx-auto max-w-[550px] px-4 py-3 md:mx-0 md:min-w-[600px] md:py-0 lg:max-w-[800px]">
      <h2 className="text-4xl">Your reviews</h2>
      <RangeInput />
      <div className="flex items-center gap-2">
        <h3 className="my-3 text-[32px] font-bold">
          {averageRating.toFixed(1)}
        </h3>
        <BsStarFill fill="orange" />
        <p className="text-base font-normal">overall rating</p>
      </div>
      <ReviewsChart reviews={filteredReviews2} />
      <h3 className="text-lg font-bold">Reviews ({filteredReviews2.length})</h3>
      <div className="lg:h-[320px] lg:w-[550px] lg:px-2 lg:overflow-y-auto custom-scrollbar">
        <ReviewsDetails reviews={filteredReviews2} />
      </div>
    </section>
  );
}
