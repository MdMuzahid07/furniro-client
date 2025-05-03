import CloseXIcon from "@/components/icons/CloseXIcon";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartDropDownCard = ({ product }: Record<string, any>) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[15px] sm:gap-[32px]">
        <Image
          src={product?.image}
          width={300}
          height={300}
          alt={`${product?.name}-image`}
          className="h-[80px] w-[80px] rounded-[10px] sm:h-[105px] sm:w-[105px]"
        />

        <div>
          <h4>{product?.name}</h4>
          <div className="mt-[11px] flex items-center gap-[10px] md:gap-[15px]">
            <h5 className="text-[16px] font-light text-dark">{product?.quantity}</h5>
            <p className="text-[12px] font-[300] text-dark">X</p>
            <h5 className="text-[12px] font-medium text-primary">
              <span>Rs.</span> {product?.price}
            </h5>
          </div>
        </div>
      </div>
      <button className="cursor-pointer">
        <CloseXIcon />
      </button>
    </div>
  );
};

export default CartDropDownCard;
