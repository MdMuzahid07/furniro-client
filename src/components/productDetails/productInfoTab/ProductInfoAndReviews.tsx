"use client";
import { useState } from "react";
import DetailsTabDescription from "./DetailsTabDescription";
import DetailsTabAdditionalInfo from "./DetailsTabAdditionalInfo";
import DetailsTabReview from "./DetailsTabReview";

const ProductInfoAndReviews = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: "Description",
      content: <DetailsTabDescription />,
    },
    {
      title: "Additional Information",
      content: <DetailsTabAdditionalInfo />,
    },
    {
      title: "Reviews [5]",
      content: <DetailsTabReview />,
    },
  ];

  return (
    <section className="mx-auto max-w-[1440px] border-t border-b border-tertiary-light pt-[30px] pb-[40px] sm:pt-[48px] sm:pb-[50px] md:pb-[66px]">
      {/* // tab nav  */}

      <div className="flex w-full items-center justify-center gap-[10px] sm:gap-[52px]">
        {tabs?.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer ${
              activeTab === index ? "text-dark" : "text-accent-light"
            } text-[12px] font-medium sm:text-[16px] md:text-[24px]`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="mt-[20px] sm:mt-[27] md:mt-[37px]">{tabs[activeTab].content}</div>
    </section>
  );
};

export default ProductInfoAndReviews;
