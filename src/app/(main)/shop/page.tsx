import LocationBar from "@/components/shared/LocationBar";
import SellingPointsModule from "@/components/shared/SellingPointsModule";
import ShopFilterBar from "@/components/shop/ShopFilterBar";
import ShopProducts from "@/components/shop/ShopProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniro | Shop",
  description:
    "Explore our curated collection of high-quality furniture. Browse through modern, classic, and contemporary pieces for your home and office spaces.",
};

const ShopPage = () => {
  return (
    <>
      <LocationBar title="Shop" link="shop" />
      <ShopFilterBar />
      <ShopProducts />
      <SellingPointsModule />
    </>
  );
};

export default ShopPage;
