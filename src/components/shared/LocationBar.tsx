import Image from "next/image";
import Link from "next/link";
import ArrowRightDarkIcon from "../icons/ArrowRightDarkIcon";

const LocationBar = ({ title, link }: { title: string; link: string }) => {
  return (
    <section className="relative mx-auto h-[180px] max-w-[1440px] sm:h-[220px] md:h-[280px] lg:h-[316px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/LocationBar-bg-img.png"
          width={1440}
          height={316}
          alt="home-hero-section-image"
          className="h-full w-full object-cover object-left md:object-center"
          priority
        />
      </div>

      <div className="absolute flex h-full w-full flex-col items-center justify-center">
        <h1 className="mb-[4px] text-[35px] font-medium text-dark sm:text-[40px] md:text-[48px]">
          {title}
        </h1>
        <div className="flex items-center gap-[6px]">
          <Link href="/" className="text-[16px] font-medium text-dark">
            Home
          </Link>
          <ArrowRightDarkIcon />
          <Link href={`/${link}`} className="text-[16px] font-light text-dark">
            {title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationBar;
