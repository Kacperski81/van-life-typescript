import { useState, useEffect, useRef } from "react";
import {Review } from "../types";
import { convertTimestampToMoment } from "../utils";
export default function useReviewsSorter(reviews: Review[]) {
  const [sort, setSort] = useState("recent");
  const reviewsRef = useRef<HTMLDivElement>(null);
  const sortedReviews = reviews.sort((a, b) => {
    const dateA = convertTimestampToMoment(a.date);
    const dateB = convertTimestampToMoment(b.date);
    switch (sort) {
      case "recent":
        return dateB.diff(dateA);
      case "rating":
        return b.rating - a.rating;
      case "lowest":
        return a.rating - b.rating;
      default: return 0;
    }
  });

  useEffect(() => {
    const scrollToTop = (element: HTMLElement) => element.scrollTo({top:0, behavior: "smooth"});
    if(reviewsRef.current) scrollToTop(reviewsRef.current);
  }, [sort]);
  
  return {sort,setSort, sortedReviews, reviewsRef};
}