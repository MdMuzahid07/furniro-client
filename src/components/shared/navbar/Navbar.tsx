import CartClose from "@/components/icons/CartClose";
import CartIcon from "@/components/icons/CartIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import DropDown from "@/components/ui/DropDown";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import CartDropDownCard from "./CartDropDownCard";

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

const Navbar = () => {
  return (
    <header className="bg-background sticky top-0 z-50">
      <nav className="relative mx-auto flex h-[70px] max-w-[1440px] items-center justify-between pr-[54px] pl-[40px] md:h-[100px] md:pr-[100px] md:pl-[54px]">
        {/* logo */}
        <Link href="/" className="flex items-center gap-[5.5px]">
          <Image
            src="/logo/furniro-logo.png"
            alt="furniro-main-logo"
            width={100}
            height={100}
            className="h-[32px] w-[50px]"
          />
          <h1 className="text-dark font-montserrat text-[34px] font-bold">Furniro</h1>
        </Link>

        {/* nav links  */}
        <ul className="hidden items-center gap-[55px] sm:flex md:ml-[106px] md:gap-[75px]">
          {navLinks?.map(({ label, ref }, index) => (
            <li key={index}>
              <Link href={ref} className="text-dark text-[16px] font-medium">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* toggles  */}
        <ul className="flex items-center gap-[35] md:gap-[45px]">
          <li>
            <PersonIcon />
          </li>
          <li>
            <SearchIcon />
          </li>
          <li>
            <HeartIcon />
          </li>
          <li>
            <DropDown
              closeTriggerIcon={<CartClose />}
              trigger={<CartIcon />}
              style=" -top-[75px] right-0 w-[300px] md:w-[417px] h-[500px] md:h-[746px] bg-white relative"
              closeOnOutsideClick={false}
            >
              <>
                <div className="pt-[28px] pr-[30px] pl-[30px] md:pr-[40px]">
                  {/* dropdown header  */}
                  <div className="border-tertiary-light w-full max-w-[287px] border-b">
                    <h1 className="text-dark pb-[26px] text-[18px] font-semibold md:text-[24px]">
                      Shopping Cart
                    </h1>
                  </div>

                  {/* dropdown main content */}
                  <div className="mt-[42px] mb-[23px] min-h-full space-y-[20px] overflow-y-auto md:max-h-[460px]">
                    {fakeCart?.map((product) => (
                      <CartDropDownCard key={product?._id} product={product} />
                    ))}
                  </div>
                </div>

                {/* dropdown footer  */}
                <div className="absolute bottom-0">
                  <div className="mb-[23px] flex items-center gap-[101px] pl-[30px]">
                    <h3 className="text-dark text-[16px]">Subtotal</h3>
                    <h1 className="text-primary text-[16px] font-semibold">Rs. 520,000.00</h1>
                  </div>
                  <div className="border-tertiary-light flex flex-col items-center gap-[14px] border-t px-[27px] py-[28px] sm:flex-row">
                    <button className="border-dark w-full rounded-full border px-[24px] py-[6px] text-[12px] md:px-[30px]">
                      Cart
                    </button>
                    <button className="border-dark w-full rounded-full border px-[24px] py-[6px] text-[12px] md:px-[30px]">
                      Checkout
                    </button>
                    <button className="border-dark w-full rounded-full border px-[24px] py-[6px] text-[12px] md:px-[30px]">
                      Comparison
                    </button>
                  </div>
                </div>
              </>
            </DropDown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
