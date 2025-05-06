import ProductCard from "../ui/ProductCard";

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
];

const RelatedProducts = () => {
  return (
    <section className="mx-auto max-w-[1440px] pt-[55px] pb-[92px] md:px-[40px] lg:px-[56px] xl:px-[102px]">
      <h1 className="text-[24px] leading-[120%] font-medium md:text-center md:text-[36px]">
        Related Products
      </h1>
      <div className="mt-[26px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 sm:gap-[32px] lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => <ProductCard key={product?._id} product={product} />)}
      </div>

      <button className="mx-auto mt-[32px] flex h-[48px] w-[245px] cursor-pointer items-center justify-center border border-primary text-[16px] leading-[150%] font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-background md:mt-[44px]">
        Show More
      </button>
    </section>
  );
};

export default RelatedProducts;
