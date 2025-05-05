import BrowseTheRange from "@/components/home/BrowseTheRange";
import GallerySlider from "@/components/home/GallerySlider";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import OurProducts from "@/components/home/OurProducts";
import ShareYourSetupWith from "@/components/home/ShareYourSetupWith";

const page = () => {
  return (
    <>
      <HomeHeroSection />
      <BrowseTheRange />
      <OurProducts />
      <GallerySlider />
      <ShareYourSetupWith />
    </>
  );
};

export default page;
