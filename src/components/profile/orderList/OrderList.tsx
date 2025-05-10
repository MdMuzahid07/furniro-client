"use client";
import PaginationBar from "@/components/shared/PaginationBar";
import { useState } from "react";

const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <section className="w-full px-[10px] sm:px-[20px] lg:px-[50px]">
      <h1 className="mt-[30px] text-[20px] font-medium text-info sm:text-[24px] md:mt-[0px] md:text-[28px]">
        My Orders
      </h1>

      <div className="mt-[20px] w-full overflow-x-auto">
        <table className="w-[890px] border-collapse">
          <thead>
            <tr className="bg-quaternary">
              <th className="border border-quaternary px-4 py-3 text-left text-[14px]">Order ID</th>
              <th className="border border-quaternary px-4 py-3 text-left text-[14px]">Date</th>
              <th className="border border-quaternary px-4 py-3 text-left text-[14px]">Status</th>
              <th className="border border-quaternary px-4 py-3 text-left text-[14px]">Total</th>
              <th className="border border-quaternary px-4 py-3 text-left text-[14px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((index) => (
              <tr key={index} className="hover:bg-septenary-light">
                <td className="border border-quaternary px-4 py-3">#12345</td>
                <td className="border border-quaternary px-4 py-3">2023-10-15</td>
                <td className="border border-quaternary px-4 py-3">
                  <span className="rounded-full bg-success px-2 py-0.5 text-[10px] text-background">
                    Delivered
                  </span>
                </td>
                <td className="border border-quaternary px-4 py-3">$299.99</td>
                <td className="border border-quaternary px-4 py-3">
                  <button className="">View More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        style="my-[20px] flex justify-end"
        btnStyle="w-[40px] h-[40px]"
        nextBtnStyle="h-[40px] w-[60px] bg-quaternary"
      />
    </section>
  );
};

export default OrderList;
