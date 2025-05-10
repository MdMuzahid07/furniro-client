import React from "react";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import PaginationBar from "@/components/shared/PaginationBar";
import { useState } from "react";

// Define ShowDetailsType if not already defined or import it from the correct module
type ShowDetailsType = {
  show: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  order: any;
};

const OrderTable = ({ setShowDetails }: { setShowDetails: (details: ShowDetailsType) => void }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handleShowDetails = (order: { unknown: unknown }) => {
    setShowDetails({
      show: true,
      order: order,
    });
  };

  return (
    <>
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((order, index) => (
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
                  <button
                    onClick={() => handleShowDetails({ unknown: order })}
                    className="flex cursor-pointer items-center gap-[5px]"
                  >
                    View More <ArrowRightIcon size={16} />{" "}
                  </button>
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
        nextBtnStyle="h-[40px] w-[60px] bg-quaternary cursor-pointer hover:bg-primary hover:text-background"
      />
    </>
  );
};

export default OrderTable;
