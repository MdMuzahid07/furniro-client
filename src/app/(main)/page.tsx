import BrowseTheRange from "@/components/home/BrowseTheRange";
import GallerySlider from "@/components/home/GallerySlider";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import OurProducts from "@/components/home/OurProducts";

const page = () => {
  return (
    <>
      <HomeHeroSection />
      <BrowseTheRange />
      <OurProducts />
      <GallerySlider />
    </>
  );
};

export default page;
