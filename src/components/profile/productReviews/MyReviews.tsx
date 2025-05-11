"use client";
import { useState } from "react";
import ProductsToReview from "./ProductsToReview";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  const [addReview, setAddReview] = useState(false);

  return (
    <section className="w-full px-[10px] sm:px-[20px] lg:px-[50px]">
      <h1 className="mt-[30px] text-[20px] font-medium text-info sm:text-[24px] md:mt-[0px] md:text-[28px]">
        {addReview ? "Add Review" : "My Reviews"}
      </h1>
      {addReview ? <ReviewCard /> : <ProductsToReview setAddReview={setAddReview} />}
    </section>
  );
};

export default MyReviews;
