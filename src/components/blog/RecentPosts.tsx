import RecentPostCard from "./RecentPostCard";

const RecentPosts = () => {
  return (
    <div className="mt-[41px] w-full space-y-[39px] px-[0px] py-[16px] sm:max-w-[393px] sm:px-[76px]">
      <h1 className="mb-[26px] text-[20px] font-medium text-dark sm:text-[24px]">Recent Posts</h1>
      <div className="space-y-[39px]">
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
