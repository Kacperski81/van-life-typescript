import { Review } from "../../../types";

export default function ChartItem({ value, reviews }: { value: number, reviews: Review[] }) {
  const totalReviews = reviews.length;
  const fiveStarReviews = reviews.filter(
    (review) => review.rating === 5,
  ).length;
  const fourStarReviews = reviews.filter(
    (review) => review.rating === 4,
  ).length;
  const threeStarReviews = reviews.filter(
    (review) => review.rating === 3,
  ).length;
  const twoStarReviews = reviews.filter((review) => review.rating === 2).length;
  const oneStarReviews = reviews.filter((review) => review.rating === 1).length;

  function reviewPercentage(num: number) {
    switch (num) {
      case 5:
        return (fiveStarReviews / totalReviews) * 100;
      case 4:
        return (fourStarReviews / totalReviews) * 100;
      case 3:
        return (threeStarReviews / totalReviews) * 100;
      case 2:
        return (twoStarReviews / totalReviews) * 100;
      case 1:
        return (oneStarReviews / totalReviews) * 100;
      default:
        return 0;
    }
  }

  const getPercent = (value: number) => {
    switch (value) {
      case 1:
        return reviewPercentage(1);
      case 2:
        return reviewPercentage(2);
      case 3:
        return reviewPercentage(3);
      case 4:
        return reviewPercentage(4);
      case 5:
        return reviewPercentage(5);
    }
  };

  const percent = getPercent(value)?.toFixed();
  return (
    <div className="grid grid-cols-[3fr_9fr_3fr] sm:grid sm:grid-cols-[2fr_10fr_2fr] items-center py-1 text-base text-[#4D4D4D] lg:grid lg:grid-cols-[60px_400px_100px]">
      <h4 className="text-left">
        {value} star{value === 1 ? "" : "s"}
      </h4>
      <span className="flex h-1/3 items-center bg-[#B9B9B9] rounded-lg">
        <span
          className={`h-full rounded-lg bg-orange-500`}
          style={{ width: `${percent}%`, transition: "width .5s" }}
        ></span>
      </span>
      <h4 className="text-center">{percent}%</h4>
    </div>
  );
}
