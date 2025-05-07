import CartOverview from "@/components/cart/CartOverview";
import LocationBar from "@/components/shared/LocationBar";
import SellingPointsModule from "@/components/shared/SellingPointsModule";

const Cart = () => {
  return (
    <>
      <LocationBar link="cart" title="Cart" />
      <CartOverview />
      <SellingPointsModule />
    </>
  );
};

export default Cart;
