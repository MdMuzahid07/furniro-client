"use client";
import HeartIcon from "@/components/icons/HeartIcon";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "./UserDropdown";
import MobileNav from "./MobileNav";
import CartDropdown from "./CartDropdown";
import SearchDrawer from "./SearchDrawer";

const Navbar = () => {
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

        {/* desktop, nav links  */}
        <ul className="hidden items-center gap-[35px] md:ml-[106px] lg:flex xl:gap-[75px]">
          {navLinks?.map(({ label, ref }, index) => (
            <li key={index}>
              <Link href={ref} className="text-[16px] font-medium text-dark">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* navbar right dropdowns, and drawers  */}
        <ul className="flex items-center gap-[15px] sm:gap-[25] lg:gap-[45px]">
          <UserDropdown />
          <SearchDrawer />
          <li>
            <Link href="/">
              <div className="hidden sm:flex">
                <HeartIcon />
              </div>
              <div className="flex sm:hidden">
                <HeartIcon size={20} />
              </div>
            </Link>
          </li>
          <CartDropdown />
          <MobileNav />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
