import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <form className="my-[30px]">
      <div className="mb-[20px]">
        <Rating
          onClick={handleRating}
          initialValue={rating}
          size={24}
          allowHover={true}
          SVGstyle={{ display: "inline-block" }}
          transition
          className="flex"
        />
        <span className="ml-3 text-[14px] font-medium">
          {rating === 1 && "Disappointed"}
          {rating === 2 && "Bad"}
          {rating === 3 && "Good"}
          {rating === 4 && "Great"}
          {rating === 5 && "Excellent Product"}
        </span>
      </div>

      <div>
        <label className="text-[14px] font-medium text-dark" htmlFor="additional-information">
          Write About This Product
        </label>
        <textarea
          className="mt-[10px] h-[30px] w-full rounded-[10px] border border-accent-light px-[12px] pt-[13px] text-[12px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:pt-[10px] sm:text-[14px]"
          placeholder="Write about the product"
          id="additional-information"
        />
      </div>
      <button
        type="submit"
        className="mt-[20px] flex h-[35px] w-full cursor-pointer items-center justify-center rounded-[5px] bg-primary text-[16px] text-background sm:w-[150px]"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
