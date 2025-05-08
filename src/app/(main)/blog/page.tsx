import BlogFeed from "@/components/blog/BlogFeed";
import LocationBar from "@/components/shared/LocationBar";
import SellingPointsModule from "@/components/shared/SellingPointsModule";

const Blog = () => {
  return (
    <>
      <LocationBar link="blog" title="Blog" />
      <BlogFeed />
      <SellingPointsModule />
    </>
  );
};

export default Blog;
