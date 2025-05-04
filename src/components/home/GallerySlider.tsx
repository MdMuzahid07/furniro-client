import Image from "next/image";
import GallerySliderActiveIndicatorIcon from "../icons/GallerySliderActiveIndicatorIcon";
import GallerySliderInactiveIndicatorIcon from "../icons/GallerySliderInactiveIndicatorIcon";

const GallerySlider = () => {
  return (
    <section className="mx-auto flex max-w-[1440px] items-center gap-[42px] bg-primary-light py-[44px] pl-[20px] md:h-[670px] md:pl-[40px] lg:pl-[56px] xl:pl-[100px]">
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
      <div className="relative flex w-full items-start gap-[24px] overflow-hidden">
        <div className="h-[582px] max-w-[404px] min-w-[404px]">
          <Image
            src="/images/home/gallerySlider/gallery-img-1.png"
            width={500}
            height={700}
            alt="gallery-slide-image"
            priority
            className="h-full w-full"
          />
        </div>

        <div className="h-[486px] max-w-[372px] min-w-[372px]">
          <Image
            src="/images/home/gallerySlider/gallery-img-2.png"
            width={500}
            height={700}
            alt="gallery-slide-image"
            priority
            className="h-full w-full"
          />
        </div>

        <div className="h-[486px] max-w-[372px] min-w-[372px]">
          <Image
            src="/images/home/gallerySlider/gallery-img-2.png"
            width={500}
            height={700}
            alt="gallery-slide-image"
            priority
            className="h-full w-full"
          />
        </div>

        {/* slider indicator  */}
        <div className="absolute bottom-[29px] left-[428px] flex items-center gap-[20px]">
          <GallerySliderActiveIndicatorIcon />
          <GallerySliderInactiveIndicatorIcon />
          <GallerySliderInactiveIndicatorIcon />
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
