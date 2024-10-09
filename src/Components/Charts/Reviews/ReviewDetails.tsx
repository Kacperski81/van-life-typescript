import { Review } from "../../../types";
import { BsStarFill } from "react-icons/bs";
import { convertTimestampToMoment } from "../../../utils";
export default function ReviewDetails({ review }: { review: Review }) {
  const [day, month] = convertTimestampToMoment(review.date).format("DD/MM").split("/").map(Number);
  const reviewDate = new Date(2024, month-1, day).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return (
    <section className="border-b py-3 mb-1">
      <div className="flex pb-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <BsStarFill key={index} fill={index < review.rating ? "orange" : "grey"} />
        ))}
      </div>
      <p className="text-base py-2">
        <span className="font-bold">{review.name}</span>{" "}
        <span className="ml-2 font-semibold text-[#8C8C8C]">{reviewDate}</span>
      </p>
      <p className="leading-6 text-base font-normal">{review.text}</p>
    </section>
  );
}
