import { BsStarFill } from "react-icons/bs";
import { Await, useLoaderData } from "react-router-dom";
import { Review } from "../../types";
import { Suspense } from "react";

export function Reviews() {
  const { reviews } = useLoaderData() as { reviews: Review[] };
  // const reviewsData = [
  //     {
  //         rating: 5,
  //         name: "Elliot",
  //         date: "January 3, 2023",
  //         text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
  //         id: "1",
  //     },
  //     {
  //         rating: 5,
  //         name: "Sandy",
  //         date: "December 12, 2022",
  //         text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
  //         id: "2",
  //     },
  // ]

  function renderReviews(reviews: Review[]) {
    console.log(reviews);
    return <div>abc</div>;
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={reviews}>{renderReviews}</Await>
      </Suspense>
    </div>
    // <section className="text-base p-2 flex flex-col gap-4">
    //     <div className="flex items-center gap-4">
    //         <h2 className="text-[32px]">Your reviews</h2>
    //         <p className="text-[#4D4D4D]">last <span className="underline font-bold">30 days</span></p>
    //     </div>
    //     <div>
    //         <img src="/reviews-graph.png" alt="Reviews graph" />
    //     </div>
    //     <div className="flex flex-col gap-4">
    //         <h3 className="text-lg font-bold">Reviews ({reviewsData.length})</h3>
    //         <div className="flex flex-col gap-4 mb-8">

    //             {reviewsData.map((review) => {
    //                 return (
    //                     <div key={review.id} className="flex flex-col border-b p-4 gap-3">
    //                         <div key={review.id} className="flex">
    //                             {[...Array(review.rating)].map((_, index) => {
    //                                 return <BsStarFill key={index} className="fill-orange-500" />
    //                             })}
    //                         </div>

    //                         <p className="font-semibold">{review.name} <span className="text-[#4D4D4D]">{review.date}</span></p>
    //                         <p>{review.text}</p>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     </div>
    // </section>
  );
}
