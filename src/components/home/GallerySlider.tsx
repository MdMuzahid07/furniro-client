import Image from "next/image";
import GallerySliderActiveIndicatorIcon from "../icons/GallerySliderActiveIndicatorIcon";
import GallerySliderInactiveIndicatorIcon from "../icons/GallerySliderInactiveIndicatorIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowRightTwo from "../icons/ArrowRightTwoIcon";
import HorizontalLineIcon from "../icons/HorizontalLineIcon";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "./GallerySlider.css";

// const slideData = [
//   {
//     _id: "gallerySliderHome_1",
//     image: "/images/home/gallerySlider/gallery-img-1.png",
//     number: "01",
//     title: "Bed Room",
//     subtitle: "Inner Peace",
//     mainWidth: 404,
//     mainHeight: 582,
//     mobileWidth: 270,
//     mobileHeight: 380,
//     clickLink: ""
//   },
//   {
//     _id: "gallerySliderHome_2",
//     image: "/images/home/gallerySlider/gallery-img-2.png",
//     number: "01",
//     title: "Bed Room",
//     subtitle: "Inner Peace",
//     mainWidth: 372,
//     mainHeight: 486,
//     mobileWidth: 270,
//     mobileHeight: 328,
//     clickLink: ""
//   },
//   {
//     _id: "gallerySliderHome_3",
//     image: "/images/home/gallerySlider/gallery-img-3.png",
//     number: "01",
//     title: "Bed Room",
//     subtitle: "Inner Peace",
//     mainWidth: 372,
//     mainHeight: 486,
//     mobileWidth: 270,
//     mobileHeight: 328,
//     clickLink: ""
//   },
// ];

const GallerySlider = () => {
  return (
    <section className="mx-auto flex h-auto max-w-[1440px] flex-col items-center gap-[42px] bg-primary-light py-[44px] pl-[20px] md:pl-[40px] lg:h-[670px] lg:flex-row lg:pl-[56px] xl:pl-[100px]">
      <div className="w-full lg:max-w-[422px]">
        <h1 className="mb-[7px] text-[24px] leading-[120%] font-bold text-info sm:text-[40px]">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[14px] leading-[150%] font-medium text-muted-light sm:text-[16px]">
          Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </p>

        <button className="mt-[25px] flex h-[48px] w-[176px] items-center justify-center bg-primary text-[16px] leading-[150%] font-semibold text-background">
          Explore More
        </button>
      </div>

      {/* slider  */}
      <div className="relative flex w-full items-start gap-[24px] overflow-hidden pb-[40px] sm:pb-[0px]">
        <div className="relative h-[380] max-w-[270px] min-w-[270px] sm:h-[582px] sm:max-w-[404px] sm:min-w-[404px]">
          <Image
            src="/images/home/gallerySlider/gallery-img-1.png"
            width={500}
            height={700}
            alt="gallery-slide-image"
            priority
            className="h-full w-full"
          />

          <div className="absolute bottom-[24px] left-[24px] flex items-end">
            <div className="h-[100px] w-[180px] bg-background/72 py-[24px] pr-[17px] pl-[24px] backdrop-blur-[1.5px] sm:h-[130px] sm:w-[217px] sm:py-[32px] sm:pl-[32px]">
              <p className="mb-[8px] flex items-center gap-[5] text-[14px] leading-[150%] font-medium text-muted-light sm:gap-[8px] sm:text-[16px]">
                <span>01</span>
                <HorizontalLineIcon />
                <span>Bed Room</span>
              </p>
              <h5 className="text-[20px] leading-[120%] font-semibold text-info sm:text-[28px]">
                Inner Peace
              </h5>
            </div>
            <button className="flex h-[38px] w-[38px] items-center justify-center bg-primary sm:h-[48px] sm:w-[48px]">
              <ArrowRightTwo />
            </button>
          </div>
        </div>

        <div className="h-[328px] max-w-[270px] min-w-[270px] sm:h-[486px] sm:max-w-[372px] sm:min-w-[372px]">
          <Image
            src="/images/home/gallerySlider/gallery-img-2.png"
            width={500}
            height={700}
            alt="gallery-slide-image"
            priority
            className="h-full w-full"
          />
        </div>

        <div className="h-[328px] max-w-[270px] min-w-[270px] sm:h-[486px] sm:max-w-[372px] sm:min-w-[372px]">
          <Image
            src="/images/home/gallerySlider/gallery-img-3.png"
            width={500}
            height={700}
            alt="gallery-slide-image"
            priority
            className="h-full w-full"
          />
        </div>

        {/* slider indicator  */}
        <div className="absolute bottom-0 left-[75px] flex items-center gap-[20px] sm:bottom-[29px] sm:left-[428px]">
          <GallerySliderActiveIndicatorIcon />
          <GallerySliderInactiveIndicatorIcon />
          <GallerySliderInactiveIndicatorIcon />
        </div>

        {/* slider navigation  */}
        <div className="absolute flex h-full w-full items-center justify-between pr-[54px] pl-[24px]">
          <button className="flex h-[38px] w-[38px] rotate-180 cursor-pointer items-center justify-center rounded-full bg-background shadow-[0px_4px_14px_rgba(0,0,0,0.16)] sm:h-[48px] sm:w-[48px]">
            <ArrowRightIcon />
          </button>
          <button className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full bg-background shadow-[0px_4px_14px_rgba(0,0,0,0.16)] sm:h-[48px] sm:w-[48px]">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
