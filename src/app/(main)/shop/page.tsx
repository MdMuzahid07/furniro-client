import LocationBar from "@/components/shared/LocationBar";
import SellingPointsModule from "@/components/shared/SellingPointsModule";
import ShopFilterBar from "@/components/shop/ShopFilterBar";
import ShopProducts from "@/components/shop/ShopProducts";

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
