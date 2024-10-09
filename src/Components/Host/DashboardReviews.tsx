import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDashboardReviews } from "../../hooks/useDashboardReviews";
export default function DashboardReviews() {
  
  const { averageRating } = useDashboardReviews();
  return (
    <section className="flex w-full items-center gap-2 bg-[#FFDDB2] px-4 py-8 md:col-start-1 md:min-w-[600px]">
      <h3 className="text-2xl font-bold">Review score</h3>
      <BsStarFill className="fill-[#FF8C38] text-3xl" />
      <p>
        {averageRating.toFixed(1)}
        <span className="text-[#4D4D4D]">/5</span>
      </p>

      <p className="grow text-xl"></p>

      <Link to="reviews" className="text-base text-[#161616]">
        Details
      </Link>
    </section>
  );
}
