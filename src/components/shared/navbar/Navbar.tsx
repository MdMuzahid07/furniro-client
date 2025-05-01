import CartIcon from "@/components/icons/CartIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-background mx-auto flex h-[70px] max-w-[1440px] items-center justify-between pr-[54px] pl-[40px] md:h-[100px] md:pr-[100px] md:pl-[54px]">
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
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
