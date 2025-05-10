import ProfileNav from "@/components/profile/ProfileNav";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-[700px] max-w-[1440px] flex-col px-[20px] sm:px-[40px] md:flex-row md:px-[60px] lg:px-[70px] xl:px-[100px]">
      <ProfileNav />
      <main className="w-full 2xl:max-w-[1090px]">{children}</main>
    </div>
  );
};

export default layout;
