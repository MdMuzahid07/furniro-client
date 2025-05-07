import BillingForm from "@/components/checkout/BillingForm";
import LocationBar from "@/components/shared/LocationBar";
import SellingPointsModule from "@/components/shared/SellingPointsModule";

const Checkout = () => {
  return (
    <>
      <LocationBar link="checkout" title="Checkout" />
      <BillingForm />
      <SellingPointsModule />
    </>
  );
};

export default Checkout;
