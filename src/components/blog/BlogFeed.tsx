"use client";
import { useState } from "react";
import PaginationBar from "../shared/PaginationBar";
import BlogCategory from "./BlogCategory";
import BlogFeedCard from "./BlogFeedCard";
import RecentPosts from "./RecentPosts";

const BlogFeed = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 10;

  return (
    <section className="xl:px-[100px]pt-[40px] mx-auto max-w-[1440px] bg-background px-[20px] pb-[30px] sm:pt-[50px] sm:pb-[40px] md:px-[40px] md:pt-[60px] md:pb-[58] lg:px-[60px] lg:pt-[80px] xl:pt-[106px]">
      <div className="flex gap-[30px]">
        <div className="max-w-[817px] space-y-[54px]">
          <BlogFeedCard />
          <BlogFeedCard />
          <BlogFeedCard />

          <div className="flex w-full justify-end">
            <PaginationBar
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        <aside>
          <BlogCategory />
          <RecentPosts />
        </aside>
      </div>
    </section>
  );
};

export default BlogFeed;
