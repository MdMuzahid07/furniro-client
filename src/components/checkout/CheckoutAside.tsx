import Link from "next/link";
import BorderedCircleDotIcon from "../icons/BorderedCircleDotIcon";
import CircleBlackDotIcon from "../icons/CircleBlackDotIcon";

const CheckoutAside = () => {
  return (
    <aside className="w-full px-[0px] pt-[35px] pb-[35px] sm:px-[40px] sm:pt-[50px] sm:pb-[50px] md:pt-[70px] md:pb-[70px] lg:pt-[87px] lg:pb-[86px]">
      <ul className="border-b border-tertiary-light pb-[33.5px]">
        <li className="mb-[14px] flex items-center justify-between">
          <h4 className="text-[20px] font-medium text-dark sm:text-[24px]">Product</h4>
          <h4 className="text-[20px] font-medium text-dark sm:text-[24px]">Product</h4>
        </li>
        <li className="mb-[22px] flex items-center justify-between">
          <div className="items-cent flex gap-[10px]">
            <p className="text-[14px] text-accent-light sm:text-[16px]">Product</p>
            <p className="text-[14px] text-dark sm:text-[16px]">X</p>
            <p className="text-[14px] text-dark sm:text-[16px]">1</p>
          </div>
          <p className="text-[14px] font-light text-dark sm:text-[16px]">Rs. 250,000.00</p>
        </li>
        <li className="mb-[22px] flex items-center justify-between">
          <p className="text-[14px] text-dark sm:text-[16px]">Subtotal</p>
          <p className="text-[14px] font-light text-dark sm:text-[16px]">Rs. 250,000.00</p>
        </li>

        <li className="mb-[22px] flex items-center justify-between">
          <p className="text-[14px] text-dark sm:text-[16px]">Total</p>
          <h3 className="text-[20px] font-bold text-primary sm:text-[24px]">Rs. 250,000.00</h3>
        </li>
      </ul>

      <div className="mt-[22.5px] mb-[11px] flex items-center gap-[15px]">
        <CircleBlackDotIcon />
        <h1 className="text-[16px] text-dark">Direct Bank Transfer</h1>
      </div>

      <p className="text-justify text-[16px] font-light text-accent-light">
        Make your payment directly into our bank account. Please use your Order ID as the payment
        reference. Your order will not be shipped until the funds have cleared in our account.
      </p>

      <div className="mt-[25px] mb-[22px] space-y-[11px]">
        <button className="flex cursor-pointer items-center gap-[15px] text-[16px] font-medium text-accent-light hover:text-dark">
          <BorderedCircleDotIcon />
          <p>Direct Bank Transfer</p>
        </button>
        <button className="flex cursor-pointer items-center gap-[15px] text-[16px] font-medium text-accent-light hover:text-dark">
          <BorderedCircleDotIcon />
          <p>Cash On Delivery</p>
        </button>
      </div>

      <p className="text-[16px] font-light text-dark">
        Your personal data will be used to support your experience throughout this website, to
        manage access to your account, and for other purposes described in our{" "}
        <Link href="/privacy-policy" className="cursor-pointer font-semibold hover:underline">
          privacy policy.
        </Link>
      </p>

      <div className="w-full sm:flex sm:justify-center">
        <button className="mt-[39px] h-[50px] w-full rounded-[15px] border border-dark text-[20px] text-dark sm:h-[64px] sm:max-w-[318px]">
          Place order
        </button>
      </div>
    </aside>
  );
};

export default CheckoutAside;
