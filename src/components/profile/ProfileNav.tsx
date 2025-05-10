"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const userProfileNavLinks = [
  {
    label: "Profile",
    link: "/profile",
  },
  {
    label: "Orders",
    link: "/orders",
  },
  {
    label: "Address",
    link: "/address",
  },
  {
    label: "Reviews",
    link: "/reviews",
  },
];

const ProfileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-quaternary px-[20px] pt-[20px] md:max-w-[250px] md:min-w-[250px] md:px-[30px]">
      <h1 className="mb-[20px] font-montserrat text-[18px] font-medium sm:mb-[30px] sm:text-[30px]">
        My Profile
      </h1>
      <div className="flex flex-row gap-[20px] md:flex-col md:gap-[0px]">
        {userProfileNavLinks?.map(({ label, link }, index) => (
          <Link
            href={link}
            key={index}
            className={`mb-[14px] w-fit border-b border-quaternary text-[12px] font-medium text-info hover:border-b hover:border-tertiary sm:text-[16px] md:inline-block md:w-full ${pathname === link ? "border-b border-tertiary text-primary" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default ProfileNav;
