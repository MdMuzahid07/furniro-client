import LocationBar from "@/components/shared/LocationBar";
import ShopFilterBar from "@/components/shop/ShopFilterBar";
import ShopProducts from "@/components/shop/ShopProducts";

const ShopPage = () => {
  return (
    <>
      <LocationBar title="Shop" link="shop" />
      <ShopFilterBar />
      <ShopProducts />
    </>
  );
};

export default ShopPage;
