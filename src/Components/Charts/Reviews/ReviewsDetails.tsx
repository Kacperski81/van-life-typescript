import { Review } from "../../../types"
import ReviewDetails from "./ReviewDetails"

export default function ReviewsDetails({reviews} : {reviews: Review[]}) {
  
  return (
    <div className="max-w-[548px]">
      {reviews.map((review) => (
        <div key={review.id}>
          <ReviewDetails review={review} />
        </div>
      ))}
    </div>
  )
}