import CopyrightIcon from "@/components/icons/CopyrightIcon";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-tertiary-light bg-background">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
        <div className="flex gap-[145px] py-[24px] sm:py-[30px] md:py-[48px]">
          <div className="flex gap-[144.5px]">
            <div>
              <h1 className="text-[24px] font-bold text-dark">Furniro.</h1>
              <p className="mt-[30px] text-[14px] text-accent-light sm:mt-[50px] sm:text-[16px]">
                400 University Drive Suite 200 Coral <br className="hidden sm:flex" /> Gables,
                <br />
                FL 33134 USA
              </p>
            </div>
            <ul>
              <li className="mb-[55px] text-[16px] font-medium text-accent-light">Links</li>
              <li className="mb-[46px]">
                <Link href="" className="capitalized text-[16px] font-medium text-dark">
                  Home
                </Link>
              </li>
              <li className="mb-[46px]">
                <Link href="" className="capitalized text-[16px] font-medium text-dark">
                  Shop
                </Link>
              </li>
              <li className="mb-[46px]">
                <Link href="" className="capitalized text-[16px] font-medium text-dark">
                  About
                </Link>
              </li>
              <li>
                <Link href="" className="capitalized text-[16px] font-medium text-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-[72px]">
            <ul>
              <li className="mb-[55px] text-[16px] font-medium text-accent-light">Help</li>
              <li className="mb-[46px]">
                <Link href="" className="capitalized text-[16px] font-medium text-dark">
                  Payment Options
                </Link>
              </li>
              <li className="mb-[46px]">
                <Link href="" className="capitalized text-[16px] font-medium text-dark">
                  Returns
                </Link>
              </li>
              <li className="mb-[46px]">
                <Link href="" className="capitalized text-[16px] font-medium text-dark">
                  Privacy Policies
                </Link>
              </li>
            </ul>

            <ul>
              <li className="mb-[55px] text-[16px] font-medium text-accent-light">Newsletter</li>
              <li className="flex items-center gap-[11px]">
                <input
                  className="w-full max-w-[200px] border-b border-dark pb-[1px] text-[14px] placeholder:text-[14px] placeholder:text-accent-light focus:outline-none"
                  type="text"
                  placeholder="Enter Your Email Address"
                />
                <button className="border-b border-dark pb-[1px] text-[14px] font-medium text-dark">
                  SUBSCRIBE
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* footer bottom , copyright area */}
        <div className="flex h-[40px] items-center border-t border-tertiary-light sm:h-[65px] md:h-[97px]">
          <CopyrightIcon size={18} />{" "}
          <p className="text-[12px] text-dark sm:text-[16px]">{year} furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
