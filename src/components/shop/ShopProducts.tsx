"use client";
import React, { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import PaginationBar from "../shared/PaginationBar";

const products = [
  {
    image: "/images/home/product/product-1.png",
    name: "Syltherine",
    title: "Stylish cafe chair",
    price: "2.500.000",
    discountPrice: "3.500.000",
    _id: "ad324sf",
    tag: "New",
  },
  {
    image: "/images/home/product/product-2.png",
    name: "Leviosa",
    title: "Stylish cafe chair",
    price: "2.500.000",
    discountPrice: "",
    _id: "ads23f",
    tag: "-32%",
  },
  {
    image: "/images/home/product/product-3.png",
    name: "Lolito",
    title: "Luxury big sofa",
    price: "7.000.000",
    discountPrice: "14.000.000",
    _id: "ads26f",
    tag: "New",
  },
  {
    image: "/images/home/product/product-4.png",
    name: "Respira",
    title: "Outdoor bar table and stool",
    price: "500.000",
    discountPrice: "",
    _id: "a34dsf",
    tag: "-40%",
  },
  {
    image: "/images/home/product/product-5.png",
    name: "Grifo",
    title: "Night lamp",
    price: "1.500.000",
    discountPrice: "",
    _id: "ad7sf",
    tag: "New",
  },
  {
    image: "/images/home/product/product-6.png",
    name: "Muggo",
    title: "Small mug",
    price: "150.000",
    discountPrice: "",
    _id: "a686dsf",
    tag: "New",
  },
  {
    image: "/images/home/product/product-7.png",
    name: "Pingky",
    title: "Cute bed set",
    price: "7.000.000",
    discountPrice: "14.000.000",
    _id: "ads6786784f",
    tag: "-50%",
  },
  {
    image: "/images/home/product/product-8.png",
    name: "Potty",
    title: "Minimalist flower pot",
    price: "500.000",
    discountPrice: "",
    _id: "ad35654sf",
    tag: "New",
  },
  {
    image: "/images/home/product/product-1.png",
    name: "Syltherine",
    title: "Stylish cafe chair",
    price: "2.500.000",
    discountPrice: "3.500.000",
    _id: "ad225324sf",
    tag: "New",
  },
  {
    image: "/images/home/product/product-2.png",
    name: "Leviosa",
    title: "Stylish cafe chair",
    price: "2.500.000",
    discountPrice: "",
    _id: "ads273f",
    tag: "-32%",
  },
  {
    image: "/images/home/product/product-3.png",
    name: "Lolito",
    title: "Luxury big sofa",
    price: "7.000.000",
    discountPrice: "14.000.000",
    _id: "ads354626f",
    tag: "New",
  },
  {
    image: "/images/home/product/product-4.png",
    name: "Respira",
    title: "Outdoor bar table and stool",
    price: "500.000",
    discountPrice: "",
    _id: "a34634dsf",
    tag: "-40%",
  },
  {
    image: "/images/home/product/product-5.png",
    name: "Grifo",
    title: "Night lamp",
    price: "1.500.000",
    discountPrice: "",
    _id: "ad37sf",
    tag: "New",
  },
  {
    image: "/images/home/product/product-6.png",
    name: "Muggo",
    title: "Small mug",
    price: "150.000",
    discountPrice: "",
    _id: "a686d4654sf",
    tag: "New",
  },
  {
    image: "/images/home/product/product-7.png",
    name: "Pingky",
    title: "Cute bed set",
    price: "7.000.000",
    discountPrice: "14.000.000",
    _id: "adss6786784f",
    tag: "-50%",
  },
  {
    image: "/images/home/product/product-8.png",
    name: "Potty",
    title: "Minimalist flower pot",
    price: "500.000",
    discountPrice: "",
    _id: "ad35df654sf",
    tag: "New",
  },
];

const ShopProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <section className="mx-auto max-w-[1440px] bg-background px-[20px] pb-[40px] sm:pb-[45px] md:px-[40px] md:pb-[65] lg:px-[56px] lg:pb-[85px] xl:px-[102px]">
      <div className="mt-[32px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 sm:gap-[32px] lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => <ProductCard key={product?._id} product={product} />)}
      </div>

      <div className="mt-[40px] flex w-full justify-center sm:mt-[50px] md:mt-[60px] lg:mt-[70px]">
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default ShopProducts;
