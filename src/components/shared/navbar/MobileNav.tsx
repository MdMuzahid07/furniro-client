import NavIcon from "@/components/icons/NavIcon";
import XIcon from "@/components/icons/XIcon";
import Drawer from "@/components/ui/Drawer";
import { navLinks } from "@/constants";
import Link from "next/link";
import { useState } from "react";
const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
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
  );
};

export default MobileNav;
