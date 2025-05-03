"use client";
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
import { useState } from "react";
import Drawer from "@/components/ui/Drawer";
import NavIcon from "@/components/icons/NavIcon";
import XIcon from "@/components/icons/XIcon";
import CloseXIcon from "@/components/icons/CloseXIcon";

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="relative mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between pr-[20px] pl-[20px] sm:pr-[54px] sm:pl-[40px] md:h-[100px] md:pl-[54px] xl:pr-[100px]">
        {/* logo */}
        <Link href="/" className="flex items-center gap-[5.5px]">
          <Image
            src="/logo/furniro-logo.png"
            alt="furniro-main-logo"
            width={100}
            height={100}
            className="h-auto w-[30px] md:h-[32px] md:w-[50px]"
          />
          <h1 className="font-montserrat text-[18px] font-bold text-dark sm:text-[34px]">
            Furniro
          </h1>
        </Link>

        {/* nav links  */}
        <ul className="hidden items-center gap-[35px] md:ml-[106px] lg:flex xl:gap-[75px]">
          {navLinks?.map(({ label, ref }, index) => (
            <li key={index}>
              <Link href={ref} className="text-[16px] font-medium text-dark">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* toggles  */}
        <ul className="flex items-center gap-[15px] sm:gap-[25] lg:gap-[45px]">
          <li>
            <DropDown
              closeTriggerIcon={
                <>
                  <div className="hidden sm:flex">
                    <CloseXIcon />
                  </div>
                  <div className="flex sm:hidden">
                    <CloseXIcon size={20} />
                  </div>
                </>
              }
              trigger={
                <>
                  <div className="hidden sm:flex">
                    <PersonIcon />
                  </div>
                  <div className="flex sm:hidden">
                    <PersonIcon size={20} />
                  </div>
                </>
              }
              style=" w-[250px] h-[300px] bg-white relative"
              closeOnOutsideClick={false}
              closeTriggerStyle="absolute right-[30px] top-[30px]"
            >
              <div className="w-full px-[30px] pt-[28px]">
                <h1 className="text-[18px] font-semibold text-dark">My Profile</h1>

                <div className="mt-[20px] w-full space-y-[15px] border-t border-tertiary-light pt-[20px]">
                  <button>
                    <Link href="/" className="w-full">
                      My Account
                    </Link>
                  </button>
                  <br />
                  <button>Logout</button>
                </div>
              </div>
            </DropDown>
          </li>
          <li>
            <div className="hidden sm:flex">
              <SearchIcon />
            </div>
            <div className="flex sm:hidden">
              <SearchIcon size={20} />
            </div>
          </li>
          <li>
            <div className="hidden sm:flex">
              <HeartIcon />
            </div>
            <div className="flex sm:hidden">
              <HeartIcon size={20} />
            </div>
          </li>
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
              style="-mt-[75px] w-[300px] md:w-[417px] h-[500px] md:h-[746px] bg-white relative"
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
                  <div className="mt-[42px] mb-[23px] min-h-full space-y-[20px] overflow-y-auto md:max-h-[460px]">
                    {fakeCart?.map((product) => (
                      <CartDropDownCard key={product?._id} product={product} />
                    ))}
                  </div>
                </div>

                {/* dropdown footer  */}
                <div className="absolute bottom-0">
                  <div className="mb-[23px] flex items-center gap-[101px] pl-[30px]">
                    <h3 className="text-[16px] text-dark">Subtotal</h3>
                    <h1 className="text-[16px] font-semibold text-primary">Rs. 520,000.00</h1>
                  </div>
                  <div className="flex flex-col items-center gap-[14px] border-t border-tertiary-light px-[27px] py-[28px] sm:flex-row">
                    <button className="w-full rounded-full border border-dark px-[24px] py-[6px] text-[12px] md:px-[30px]">
                      Cart
                    </button>
                    <button className="w-full rounded-full border border-dark px-[24px] py-[6px] text-[12px] md:px-[30px]">
                      Checkout
                    </button>
                    <button className="w-full rounded-full border border-dark px-[24px] py-[6px] text-[12px] md:px-[30px]">
                      Comparison
                    </button>
                  </div>
                </div>
              </>
            </DropDown>
          </li>
          <li className="flex lg:hidden">
            <button className="w-[32px]" onClick={() => setIsDrawerOpen(true)}>
              {!isDrawerOpen ? (
                <>
                  <div className="hidden sm:flex">
                    <NavIcon size={32} />
                  </div>
                  <div className="flex sm:hidden">
                    <NavIcon size={24} />
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden sm:flex">
                    <XIcon size={32} />
                  </div>
                  <div className="flex sm:hidden">
                    <XIcon />
                  </div>
                </>
              )}
            </button>

            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
              <div className="relative w-full p-[27px]">
                <div className="absolute top-[27px] right-[27px]">
                  <button onClick={() => setIsDrawerOpen(false)}>
                    <XIcon size={24} />
                  </button>
                </div>

                <ul className="mt-[50px] space-y-[20px]">
                  {navLinks?.map(({ label, ref }, index) => (
                    <li key={index}>
                      <Link href={ref} className="text-[16px] font-medium text-dark">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Drawer>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
