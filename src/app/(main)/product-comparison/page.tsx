import Comparison from "@/components/productComparison/Comparison";
import LocationBar from "@/components/shared/LocationBar";
import SellingPointsModule from "@/components/shared/SellingPointsModule";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniro | Comparison",
  description: "",
};

const ProductComparison = () => {
  return (
    <>
      <LocationBar link="" title="Comparison" />
      <Comparison />
      <SellingPointsModule />
    </>
  );
};

export default ProductComparison;
