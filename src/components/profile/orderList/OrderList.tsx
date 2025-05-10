"use client";

import { useState } from "react";
import OrderTable from "./OrderTable";
import OrderDetails from "./OrderDetails";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Order = any; // Replace 'any' with your actual order type if available

const OrderList = () => {
  const [showDetails, setShowDetails] = useState<{ show: boolean; order?: Order | null }>({
    show: false,
    order: null,
  });

  return (
    <section className="w-full px-[10px] sm:px-[20px] lg:px-[50px]">
      <h1 className="mt-[30px] text-[20px] font-medium text-info sm:text-[24px] md:mt-[0px] md:text-[28px]">
        {showDetails?.show ? "Order Details" : " My Orders"}
      </h1>
      {showDetails?.show ? (
        <OrderDetails setShowDetails={setShowDetails} />
      ) : (
        <OrderTable setShowDetails={setShowDetails} />
      )}
    </section>
  );
};

export default OrderList;
