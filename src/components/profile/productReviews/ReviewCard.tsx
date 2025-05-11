import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Accordion from "@/components/ui/Accordion";
import Image from "next/image";
import React, { useState } from "react";
import ReviewForm from "./ReviewForm";

const fakeOrders = [
  {
    _id: "ORD123456",
    status: "Delivered",
    paymentMethod: "Cash on Delivery",
    totalAmount: 89.97,
    orderDate: "2025-05-10T14:30:00Z",
    items: [
      {
        _id: "prod1",
        title: "Snake Plant",
        image: "/images/details-page-image-sofa.png",
        price: 29.99,
        quantity: 1,
      },
      {
        _id: "prod2",
        title: "Peace Lily",
        image: "/images/details-page-image-sofa.png",
        price: 19.99,
        quantity: 2,
      },
    ],
  },
  {
    _id: "ORD123456",
    status: "Delivered",
    paymentMethod: "Cash on Delivery",
    totalAmount: 89.97,
    orderDate: "2025-05-10T14:30:00Z",
    items: [
      {
        _id: "prod1",
        title: "Snake Plant",
        image: "/images/details-page-image-sofa.png",
        price: 29.99,
        quantity: 1,
      },
    ],
  },
];

const ReviewCard = () => {
  const [writeReview, setWriteReview] = useState<string | null>(null);

  return (
    <div className="relative max-h-[658px] w-full overflow-y-auto">
      <button className="absolute top-0 right-0 flex h-[30px] w-[30px] rotate-180 cursor-pointer items-center justify-center">
        <ArrowRightIcon />
      </button>

      <div className="space-y-[40px]">
        {fakeOrders?.map((myOrder) => (
          <div key={myOrder?._id} className="border-b border-accent-light pb-[30px]">
            <div className="mt-[10px] mb-[20px]">
              <p>
                <span className="text-[14px] font-medium">Order ID:</span> {myOrder._id}
              </p>
              <p>
                <span className="text-[14px] font-medium">Status:</span>{" "}
                <span className="text-success">{myOrder.status}</span>
              </p>
            </div>

            <Accordion title="Products To Rating">
              <div className="space-y-4">
                {myOrder?.items?.map((item) => (
                  <div key={item._id}>
                    <div className="flex items-center gap-[16px] border-b border-septenary-light pb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-20 rounded object-cover"
                        width={200}
                        height={200}
                      />
                      <div className="flex-1">
                        <h4 className="text-[16px] font-medium">{item.title}</h4>
                        <p className="text-[14px] text-gray-600">Price: ${item.price}</p>
                        <p className="text-[14px] text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-[14px] font-medium">
                        ${(item.price * item.quantity)?.toFixed(2)}
                      </div>

                      <button
                        onClick={() => setWriteReview(item?._id)}
                        className="h-[30px] w-fit cursor-pointer rounded-[5px] bg-quaternary px-2 font-semibold text-primary"
                      >
                        Write Review
                      </button>
                    </div>
                    {writeReview === item._id && <ReviewForm />}
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
