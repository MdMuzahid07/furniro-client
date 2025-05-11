import CheckoutAside from "./CheckoutAside";
import AddressForm from "./AddressForm";

const BillingForm = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-[20px] pt-[40px] pb-[40px] sm:px-[40px] sm:pt-[50px] md:px-[60px] lg:px-[52px] lg:pt-[63px] lg:pb-[52px] xl:px-[100px]">
      <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-2">
        {/* billing => form */}
        <div className="px-[0px] pt-[25] pb-[40px] sm:px-[30px] sm:pt-[35px] sm:pb-[50px] md:px-[40px] md:pb-[71px] lg:px-[77.5px]">
          <h1 className="mb-[36px] text-[24px] font-semibold text-dark sm:text-[36px]">
            Billing details
          </h1>

          <AddressForm />
        </div>

        {/* billing => info  */}
        <CheckoutAside />
      </div>
    </section>
  );
};

export default BillingForm;
