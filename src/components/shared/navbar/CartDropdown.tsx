import React from "react";
import CartDropDownCard from "./CartDropDownCard";
import DropDown from "@/components/ui/DropDown";
import CartClose from "@/components/icons/CartClose";
import CartIcon from "@/components/icons/CartIcon";

const fakeCart = [
  {
    image: "/images/navbar/cart-drop-dummy-product-1.png",
    name: "Asgaard sofa",
    quantity: 1,
    price: "250,000.00",
    _id: "90v9V",
  },
  {
    image: "/images/navbar/cart-drop-dummy-product-2.png",
    name: "Casaliving Wood",
    quantity: 1,
    price: "270,000.00",
    _id: "jhy%9^",
  },
];
const CartDropdown = () => {
  return (
    <li>
      <DropDown
        closeTriggerIcon={
          <>
            <div className="hidden sm:flex">
              <CartClose />
            </div>
            <div className="flex sm:hidden">
              <CartClose size={20} />
            </div>
          </>
        }
        trigger={
          <>
            <div className="hidden sm:flex">
              <CartIcon />
            </div>
            <div className="flex sm:hidden">
              <CartIcon size={20} />
            </div>
          </>
        }
        style="w-[340px] md:w-[417px] h-[560px] sm:h-[650px] md:h-[746px] bg-white relative  -mr-[50px] sm:mr-[0px]"
        closeOnOutsideClick={false}
      >
        <>
          <div className="pt-[28px] pr-[30px] pl-[30px] md:pr-[40px]">
            {/* dropdown header  */}
            <div className="w-full max-w-[287px] border-b border-tertiary-light">
              <h1 className="pb-[26px] text-[18px] font-semibold text-dark md:text-[24px]">
                Shopping Cart
              </h1>
            </div>

            {/* dropdown main content */}
            <div className="mt-[42px] mb-[23px] max-h-[360px] min-h-full space-y-[20px] overflow-y-auto md:max-h-[460px]">
              {fakeCart?.map((product) => (
                <CartDropDownCard key={product?._id} product={product} />
              ))}
            </div>
          </div>

          {/* dropdown footer  */}
          <div className="absolute bottom-0 w-full">
            <div className="mb-[23px] flex items-center gap-[101px] pl-[30px]">
              <h3 className="text-[16px] text-dark">Subtotal</h3>
              <h1 className="text-[16px] font-semibold text-primary">Rs. 520,000.00</h1>
            </div>
            <div className="flex items-center gap-[14px] border-t border-tertiary-light px-[27px] py-[28px]">
              <button className="px-auto w-full rounded-full border border-dark py-[6px] text-[12px] md:px-[30px]">
                Cart
              </button>
              <button className="px-auto w-full rounded-full border border-dark py-[6px] text-[12px] md:px-[30px]">
                Checkout
              </button>
              <button className="px-auto w-full rounded-full border border-dark py-[6px] text-[12px] md:px-[30px]">
                Comparison
              </button>
            </div>
          </div>
        </>
      </DropDown>
    </li>
  );
};

export default CartDropdown;
