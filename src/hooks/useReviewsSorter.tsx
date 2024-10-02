import { useState, useEffect, useRef } from "react";
import {Review } from "../types";
export default function useReviewsSorter(reviews: Review[]) {
  const [sort, setSort] = useState("recent");
  const reviewsRef = useRef<HTMLDivElement>(null);
  const sortedReviews = reviews.sort((a, b) => {
    switch (sort) {
      case "recent":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
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