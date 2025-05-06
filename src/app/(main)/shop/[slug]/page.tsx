import DetailsPageTitleBar from "@/components/productDetails/DetailsPageTitleBar";
import ProductDetailsSlider from "@/components/productDetails/ProductDetailsSlider";
import ProductInfoAndReviews from "@/components/productDetails/productInfoTab/ProductInfoAndReviews";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniro | Product Details",
  description:
    "Compare furniture products, explore detailed specifications, prices, and customer reviews. Make informed decisions on your furniture purchases with our comprehensive product comparison feature.",
};

const ProductDetailsPage = () => {
  return (
    <>
      <DetailsPageTitleBar />
      <ProductDetailsSlider />
      <ProductInfoAndReviews />
      <RelatedProducts />
    </>
  );
};

export default ProductDetailsPage;
