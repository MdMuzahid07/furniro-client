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

const ProductDetailsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
  ];

  return (
    <section className="mx-auto max-w-[1440px] bg-background px-5 pt-9 md:px-10 lg:px-14 lg:pb-[85px] xl:px-[100px]">
      <div className="flex flex-col-reverse gap-[24px] lg:flex-row lg:gap-[32px]">
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
        <div className="h-[400px] w-full sm:h-[500px] lg:w-[423px]">
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

      <div></div>
    </section>
  );
};

export default ProductDetailsSlider;
