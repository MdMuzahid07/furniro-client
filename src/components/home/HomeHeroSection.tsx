import Image from "next/image";

const HomeHeroSection = () => {
  return (
    <section className="relative mx-auto h-[600px] w-full max-w-[1440px] sm:h-[600px] md:h-[716.828px]">
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

      <div className="md:left-none absolute top-[56px] right-[20px] z-20 ml-[20px] h-[450px] rounded bg-warning px-[19px] pt-[32px] pb-[32px] sm:h-[500px] sm:px-[41px] sm:pt-[62px] sm:pb-[37px] md:top-[153px] md:right-[58px] md:ml-[58px] md:h-[443px] lg:w-[643px]">
        <h6 className="text-[14px] font-semibold tracking-[3px] sm:text-[16px]">New Arrival</h6>
        <h1 className="mt-[10px] text-[35px] leading-[45px] font-bold text-primary md:text-[45px] lg:mt-[0px] lg:text-[52px] lg:leading-[65px]">
          Discover Our <br className="hidden lg:flex" /> New Collection
        </h1>
        <p className="mt-[20px] text-[16px] leading-[24px] font-medium md:text-[18px] lg:mt-[0px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </p>

        <button className="mt-[36px] flex h-[54px] w-[222px] items-center justify-center bg-primary text-[14px] font-bold text-background uppercase sm:mt-[46px] sm:h-[74px] sm:text-[16px]">
          buy now
        </button>
      </div>
    </section>
  );
};

export default HomeHeroSection;
