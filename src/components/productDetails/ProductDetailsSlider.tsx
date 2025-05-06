"use client";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import StartIcon from "../icons/StartIcon";
import FaceBookIcon from "../icons/FaceBookIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import TwitterIcon from "../icons/TwitterIcon";

const ProductDetailsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/home/product/product-1.png",
    "/images/home/product/product-2.png",
    "/images/home/product/product-3.png",
    "/images/home/product/product-4.png",
  ];

  return (
    <section className="mx-auto max-w-[1440px] bg-background px-5 pt-9 md:px-10 lg:px-14 lg:pb-[85px] xl:px-[100px]">
      <div className="flex w-full flex-col gap-[40px] lg:flex-row lg:gap-[20px] xl:gap-[105px]">
        <div className="flex flex-col-reverse gap-[24px] lg:flex-row xl:gap-[32px]">
          {/* thumbnail images ,vertical on desktop, horizontal on mobile */}
          <div className="lg:w-[80px]">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="horizontal"
              spaceBetween={12}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="thumbnail-slider h-[80px] w-full gap-[32px] lg:h-auto"
              breakpoints={{
                1024: {
                  direction: "vertical",
                  spaceBetween: 16,
                  slidesPerView: 4,
                },
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="!h-[80px] !w-[76px]">
                  <div
                    className={`relative h-[80px] w-[76px] cursor-pointer overflow-hidden rounded-[10px] border-2 transition-all duration-300 ${
                      activeIndex === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      width={76}
                      height={200}
                      className="h-full w-full object-cover"
                      alt={`Thumbnail ${index + 1}`}
                      priority={index < 2}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* main Image */}
          <div className="h-[400px] w-full sm:h-[500px] lg:w-[350px] xl:w-[423px]">
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Thumbs]}
              className="main-slider h-full w-full overflow-hidden rounded-[10px]"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              initialSlide={activeIndex}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full rounded-[10px] bg-gray-100">
                    <Image
                      src={img}
                      fill
                      sizes="(max-width: 768px) 100vw, 423px"
                      className="object-cover"
                      alt={`Product image ${index + 1}`}
                      priority={index < 2}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div>
          <h1 className="text-[32px] text-dark md:text-[42px]">Asgaard sofa</h1>
          <h5 className="text-[18px] font-medium text-accent-light md:text-[24px]">
            Rs. 250,000.00
          </h5>

          {/* // start , review  */}
          <div className="mt-[10px] mb-[13px] flex items-center gap-[22px]">
            <div className="flex items-center gap-[6px] border-r border-accent-light py-[8px] pr-[18px]">
              {[1, 2, 3, 4, 5]?.map((star, index) => <StartIcon key={index} />)}
            </div>
            <p className="text-[13px] text-accent-light">5 Customer Review</p>
          </div>

          <p className="w-full text-[13px] text-dark lg:max-w-[424px]">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </p>

          {/* // size */}
          <div className="mt-[22px] mb-[18px]">
            <p className="mb-[12px] text-[13px] text-accent-light">Size</p>

            <div className="flex items-center gap-[16px]">
              <button className="h-[30px] w-[30px] cursor-pointer rounded-[5px] bg-primary">
                L
              </button>
              <button className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[5px] bg-quaternary text-[13px] text-dark">
                XL
              </button>
              <button className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[5px] bg-quaternary text-[13px] text-dark">
                XS
              </button>
            </div>
          </div>

          {/* color  */}
          <div className="mb-[32px]">
            <p className="mb-[12px] text-[14px] text-accent-light">Color</p>

            <div className="flex items-center gap-[16px]">
              <button className="h-[30px] w-[30px] cursor-pointer rounded-full bg-[#816DFA]"></button>
              <button className="h-[30px] w-[30px] cursor-pointer rounded-full bg-dark"></button>
              <button className="h-[30px] w-[30px] cursor-pointer rounded-full bg-primary"></button>
            </div>
          </div>

          {/* actions  */}
          <div className="flex flex-col items-center gap-[18px] sm:flex-row">
            <div className="flex w-full items-center gap-[18px] sm:w-fit">
              <div className="flex h-[64px] w-[100px] items-center justify-between rounded-[10px] border border-accent-light px-[15px] sm:w-[123px]">
                <button className="cursor-pointer">-</button>
                <span className="text-[16px] font-medium text-dark">1</span>
                <button className="cursor-pointer">+</button>
              </div>

              <button className="flex h-[64px] w-full cursor-pointer items-center justify-center rounded-[15px] border border-dark text-[20px] text-dark sm:w-[180px] lg:w-[170px] xl:w-[215px]">
                Add To Cart
              </button>
            </div>
            <button className="flex h-[64px] w-full cursor-pointer items-center justify-center rounded-[15px] border border-dark text-[20px] text-dark sm:w-[180px] lg:w-[170px] xl:w-[215px]">
              + Compare
            </button>
          </div>

          {/* product specifications */}
          <div className="mt-[40px] border-t border-tertiary-light pt-[30px] sm:pt-[41px] md:mt-[50px] lg:mt-[60px]">
            <ul className="space-y-[12px]">
              <li className="flex items-center text-[16px] text-accent-light">
                <p className="pr-[61px]">SKU</p> : <span className="pl-[12px]">SS001</span>
              </li>

              <li className="flex items-center text-[16px] text-accent-light">
                <p className="pr-[16px]">Category</p> : <span className="pl-[12px]">Sofas</span>
              </li>

              <li className="flex items-center text-[16px] text-accent-light">
                <p className="pr-[52px]">Tags</p> :{" "}
                <span className="pl-[12px]">Sofa, Chair, Home, Shop</span>
              </li>

              <li className="flex items-center text-[16px] text-accent-light">
                <p className="pr-[44px]">Share</p> :{" "}
                <div className="flex items-center gap-[25px] pl-[12px]">
                  <FaceBookIcon />
                  <LinkedInIcon />
                  <TwitterIcon />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSlider;
