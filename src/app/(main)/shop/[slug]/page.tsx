import DetailsPageTitleBar from "@/components/productDetails/DetailsPageTitleBar";
import ProductDetailsSlider from "@/components/productDetails/ProductDetailsSlider";
import ProductInfoAndReviews from "@/components/productDetails/productInfoTab/ProductInfoAndReviews";
import RelatedProducts from "@/components/productDetails/RelatedProducts";

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
