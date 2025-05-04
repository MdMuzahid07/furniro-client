import Image from "next/image";

const rangeData = [
  {
    image: "/images/home/browse-the-range-card-1.png",
    title: "Dining",
    slug: "dining",
    _id: "ads245fdining",
  },
  {
    image: "/images/home/browse-the-range-card-2.png",
    title: "Living",
    slug: "living",
    _id: "a4dsflining",
  },
  {
    image: "/images/home/browse-the-range-card-3.png",
    title: "Bedroom",
    slug: "bedroom",
    _id: "ad5sfbedroom",
  },
];

const BrowseTheRange = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-[20px] py-[46px] md:px-[40px] md:py-[56px] lg:px-[56px] xl:px-[131px]">
      <h1 className="text-left text-[24px] font-bold text-secondary md:text-center md:text-[32px]">
        Browse The Range
      </h1>
      <p className="text-left text-[16px] text-muted md:text-center md:text-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="mt-[45px] grid grid-cols-1 gap-[19.39px] md:mt-[62.29px] md:grid-cols-2 lg:grid-cols-3">
        {rangeData?.map(({ _id, image, title }, index) => (
          <div
            className={`w-full ${(index + 1) % 3 === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            key={_id}
          >
            <div
              className={`w-full ${(index + 1) % 3 === 0 ? "md:max-w-full lg:max-w-[381px]" : "xl:max-w-[381px]"} h-[480px] rounded-[10px]`}
            >
              <Image
                src={image}
                width={500}
                height={500}
                alt={`${title}-image`}
                priority
                className="h-full w-full rounded-[10px] object-cover object-center"
              />
            </div>
            <h1 className="mt-[20px] text-center text-[20px] font-semibold sm:mt-[30px] sm:text-[24px]">
              {title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseTheRange;
