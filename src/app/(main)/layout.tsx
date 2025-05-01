import Navbar from "@/components/shared/navbar/Navbar";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
