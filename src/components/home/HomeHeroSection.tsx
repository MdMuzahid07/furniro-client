import Image from "next/image";

const HomeHeroSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] lg:h-[716.828px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/home-top-hero-banner-green-tree.png"
          width={1440}
          height={716}
          alt="home-hero-section-image"
          className="h-full w-full"
          priority
        />
      </div>

      <div className="absolute top-[153px] right-[58px] z-20 rounded bg-warning px-[41px] pt-[62px] pb-[37px] lg:h-[443px] lg:w-[643px]">
        <h6 className="text-[14px] font-semibold tracking-[3px] sm:text-[16px]">New Arrival</h6>
        <h1 className="text-[35px] leading-[20px] font-bold text-primary md:text-[45px] md:leading-[35px] lg:text-[52px] lg:leading-[65px]">
          Discover Our New Collection
        </h1>
        <p className="text-[16px] leading-[16px] font-medium md:text-[18px] md:leading-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </p>

        <button className="mt-[46px] flex h-[74px] w-[222px] items-center justify-center bg-primary text-[14px] font-bold text-background uppercase sm:text-[16px]">
          buy now
        </button>
      </div>
    </section>
  );
};

export default HomeHeroSection;
