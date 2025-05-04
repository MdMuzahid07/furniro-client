import Image from "next/image";
import CompareIcon from "../icons/CompareIcon";
import HeartIcon from "../icons/HeartIcon";
import ShareIcon from "../icons/ShareIcon";

interface IProduct {
  image: string;
  name: string;
  title: string;
  price: string;
  discountPrice: string;
  _id: string;
  tag: string;
}

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="group relative h-[446px] w-full overflow-hidden bg-senary transition-all duration-300 xl:max-w-[285px]">
      {/* card image */}
      <div className="h-[301px] w-full">
        <Image
          src={product?.image}
          width={400}
          height={500}
          alt={`${product?.name}-image`}
          priority
          className="h-full w-full object-cover object-center"
        />

        {/* badge */}
        <div
          className={`absolute top-[24px] right-[24px] flex h-[48px] w-[48px] items-center justify-center rounded-full ${product?.tag === "New" ? "bg-success" : "bg-danger"} text-white`}
        >
          <span className="text-sm font-medium">{product?.tag}</span>
        </div>
      </div>

      {/* card contents */}
      <div className="h-[145px] w-full p-[16px]">
        <h3 className="text-[24px] leading-[120%] font-semibold text-info">{product?.name}</h3>
        <p className="my-[8px] text-[16px] leading-[150%] font-medium text-accent">
          {product?.title}
        </p>
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] leading-[150%] font-semibold">Rp {product?.price}</h2>
          {product?.discountPrice?.length > 0 && (
            <h3 className="text-[16px] leading-[150%] text-tertiary line-through">
              Rp {product?.discountPrice}
            </h3>
          )}
        </div>
      </div>

      {/* hover overlay*/}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button className="flex h-[48px] w-[202px] cursor-pointer items-center justify-center bg-background text-[16px] leading-[150%] font-semibold text-primary">
          Add to cart
        </button>

        <div className="mt-[24px] flex items-center gap-[20px]">
          <button className="flex cursor-pointer items-center gap-[2px] text-background">
            <ShareIcon />
            <span className="text-[16px] leading-[150%] font-semibold">Share</span>
          </button>
          <button className="flex cursor-pointer items-center gap-[2px] text-background">
            <CompareIcon />
            <span className="text-[16px] leading-[150%] font-semibold">Compare</span>
          </button>
          <button className="flex cursor-pointer items-center gap-[2px] text-background">
            <HeartIcon size={16} />
            <span className="text-[16px] leading-[150%] font-semibold">Like</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
