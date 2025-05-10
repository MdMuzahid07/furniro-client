import Image from "next/image";

const RecentPostCard = () => {
  return (
    <div className="flex w-full items-center gap-[12px]">
      <div className="h-[80px] w-full max-w-[80px] min-w-[80px]">
        <Image
          src="/images/comparison-card-img-1.png"
          alt="recent-post-card"
          width={300}
          height={300}
          className="w-ful h-full rounded-[10px] object-cover object-center"
        />
      </div>
      <div>
        <h1 className="mb-[5px] text-[14px] text-dark">Going all-in with millennial design</h1>
        <p className="text-[12px] text-accent-light">03 Aug 2022</p>
      </div>
    </div>
  );
};

export default RecentPostCard;
