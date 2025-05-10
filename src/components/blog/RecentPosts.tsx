import RecentPostCard from "./RecentPostCard";

const RecentPosts = () => {
  return (
    <div className="w-full space-y-[39px] px-[0px] py-[16px] lg:min-w-[393px] lg:pl-[37px] xl:px-[76px]">
      <h1 className="mb-[26px] text-[20px] font-medium text-dark sm:text-[24px]">Recent Posts</h1>
      <div className="grid min-w-full grid-cols-1 gap-[0] space-y-[24px] sm:grid-cols-2 sm:gap-[10px] sm:space-y-[39px] md:grid-cols-1 md:gap-[0px]">
        <RecentPostCard />
        <RecentPostCard />
        <RecentPostCard />
        <RecentPostCard />
        <RecentPostCard />
      </div>
    </div>
  );
};

export default RecentPosts;
