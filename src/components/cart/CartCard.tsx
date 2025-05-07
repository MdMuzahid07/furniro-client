import Image from "next/image";
import DeleteIcon from "../icons/DeleteIcon";

const CartCard = () => {
  return (
    <div className="flex w-full items-center">
      <div className="size-[105px]">
        <Image
          src="/images/comparison-card-img-1.png"
          alt="cart-product-image"
          width={600}
          height={600}
          className="h-full w-full rounded-[10px] object-cover object-center"
        />
      </div>

      <h4 className="mr-[69px] ml-[34px] text-[16px] text-accent-light">Asgaard sofa</h4>

      <h4 className="text-[16px] text-accent-light">Rs. 250,000.00</h4>

      <div className="mr-[56px] ml-[84px] flex size-[32px] items-center justify-center rounded-[5px] border border-accent-light">
        1
      </div>

      <h1 className="mr-[49px] text-[16px] text-dark">Rs. 250,000.00</h1>

      <button className="size-[28px]">
        <DeleteIcon />
      </button>
    </div>
  );
};

export default CartCard;
