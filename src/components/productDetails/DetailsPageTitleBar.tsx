import React from "react";
import Link from "next/link";
import ArrowRightDarkIcon from "../icons/ArrowRightDarkIcon";

const DetailsPageTitleBar = () => {
  return (
    <section className="mx-auto flex h-auto max-w-[1440px] items-center bg-quaternary px-[20px] py-[30px] md:px-[40px] lg:h-[100px] lg:px-[100px] lg:py-[0px]">
      <div className="flex w-full flex-col-reverse items-center justify-center gap-[14px] sm:flex-row sm:justify-start sm:gap-[34px]">
        <div className="flex items-center gap-[20px]">
          <Link className="text-[14px] text-accent-light sm:text-[16px]" href="/">
            Home
          </Link>
          <ArrowRightDarkIcon />
          <Link className="text-[14px] text-accent-light sm:text-[16px]" href="/shop">
            Shop
          </Link>
          <ArrowRightDarkIcon />
        </div>
        <p className="text-[16px] text-dark sm:border-l-[2px] sm:border-accent-light sm:pl-[20px]">
          Asgaard sofa
        </p>
      </div>
    </section>
  );
};

export default DetailsPageTitleBar;
