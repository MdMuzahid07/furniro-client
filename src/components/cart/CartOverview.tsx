import CartCard from "./CartCard";

const CartOverview = () => {
  return (
    <section className="xl:px-[100px]pt-[40px] mx-auto w-full max-w-[1440px] px-[20px] pb-[40] sm:px-[40px] sm:pt-[50px] sm:pb-[50px] md:px-[60px] md:pb-[70px] lg:px-[80px] lg:pt-[72px] lg:pb-[85px]">
      <div className="flex w-full flex-col items-center gap-[30px] 2xl:flex-row 2xl:items-start">
        <div className="w-full overflow-x-auto lg:w-auto">
          <div className="w-[817px]">
            {/* cart card => header  */}
            <div className="flex h-[55px] w-[817px] items-center justify-between bg-quaternary px-[142px]">
              <div className="flex items-center gap-[114px]">
                <p className="text-[16px] font-medium text-dark">Product</p>
                <p className="text-[16px] font-medium text-dark">Price</p>
              </div>
              <div className="flex items-center gap-[36px]">
                <p className="text-[16px] font-medium text-dark">Quantity</p>
                <p className="text-[16px] font-medium text-dark">Subtotal</p>
              </div>
            </div>

            {/* cart card  */}
            <div className="mt-[55px] h-auto w-full space-y-[30px] lg:max-h-[600px] lg:overflow-y-auto">
              <CartCard />
              <CartCard />
            </div>
          </div>
        </div>

        <aside className="h-[330px] w-full max-w-[817px] bg-quaternary px-[20px] pt-[15px] sm:h-[390px] sm:px-[75px] 2xl:max-w-[393px]">
          <h1 className="text-center text-[24px] font-semibold text-dark sm:text-[32px]">
            Cart Totals
          </h1>

          <div className="mt-[61px] flex items-center justify-between">
            <p className="text-[16px] font-medium text-dark">Subtotal</p>
            <p className="text-[16px] text-accent-light">Rs. 250,000.00</p>
          </div>
          <div className="mt-[31px] flex items-center justify-between">
            <p className="text-[16px] font-medium text-dark">Total</p>
            <p className="text-[20px] font-medium text-primary">Rs. 250,000.00</p>
          </div>

          <div className="flex justify-end 2xl:justify-center">
            <button className="mt-[42px] flex h-[58.954px] w-full items-center justify-center rounded-[15px] border border-dark sm:w-[222px]">
              Check Out
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CartOverview;
