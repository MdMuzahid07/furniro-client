import LocationBar from "@/components/shared/LocationBar";
import ShopFilterBar from "@/components/shop/ShopFilterBar";

const ShopPage = () => {
  return (
    <>
      <LocationBar title="Shop" link="shop" />
      <ShopFilterBar />
    </>
  );
};

export default ShopPage;
