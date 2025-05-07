import Image from "next/image";
import StartIcon from "../icons/StartIcon";
import HalfStartIcon from "../icons/HalfStartIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const Comparison = () => {
  return (
    <section className="mx-auto max-w-[1440px] overflow-x-auto px-[20px] pt-[34px] pb-[40px] sm:pb-[50px] md:px-[40px] md:pb-[70px] lg:px-[54px] lg:pb-[90px] xl:pb-[112px]">
      <div className="flex w-full">
        {/* left side => product information panel */}
        <div className="w-[301px] max-w-[301px]">
          {/* header  */}
          <div className="h-[350px] w-full px-[36px] pt-[21px] pb-[172px]">
            <h1 className="text-[28px] leading-[126.5%] font-medium text-dark">
              Go to Product page for more Products
            </h1>

            <button className="mt-[21px] h-[30px] w-[115px] cursor-pointer border-b-[2px] border-septenary text-left text-[20px] font-medium text-septenary hover:border-dark hover:text-dark">
              View More
            </button>
          </div>

          {/* main content */}

          <div className="w-[301px] border-t border-r border-septenary-light pl-[42px]">
            <h1 className="mt-[42px] mb-[28px] text-[28px] leading-[126.5%] font-medium text-dark">
              General{" "}
            </h1>

            <ul className="mb-[96px] space-y-[34px]">
              <li className="text-[20px] leading-[126.5%] text-dark">Sales Package</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Model Number</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Secondary Material</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Configuration</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Upholstery Material</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Upholstery Color</li>
            </ul>

            <h1 className="mt-[42px] mb-[28px] text-[28px] leading-[126.5%] font-medium text-dark">
              Product
            </h1>

            <ul className="mb-[96px] space-y-[34px]">
              <li className="text-[20px] leading-[126.5%] text-dark">Filling Material</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Finish Type</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Adjustable Headrest</li>
              <li className="text-[20px] leading-[126.5%] text-dark">
                Maximum Load <br /> Capacity
              </li>
              <li className="text-[20px] leading-[126.5%] text-dark">Origin of Manufacture</li>
            </ul>

            <h1 className="mt-[42px] mb-[28px] text-[28px] leading-[126.5%] font-medium text-dark">
              Dimensions
            </h1>

            <ul className="mb-[96px] space-y-[34px]">
              <li className="text-[20px] leading-[126.5%] text-dark">Width</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Height</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Depth</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Weight</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Seat Height</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Leg Height</li>
            </ul>

            <h1 className="mt-[42px] mb-[28px] text-[28px] leading-[126.5%] font-medium text-dark">
              Warranty
            </h1>

            <ul>
              <li className="mb-[63px] text-[20px] leading-[126.5%] text-dark">Warranty Summary</li>
              <li className="mb-[109px] text-[20px] leading-[126.5%] text-dark">
                Warranty Service
                <br />
                Type
              </li>
              <li className="mb-[121px] text-[20px] leading-[126.5%] text-dark">
                Covered in Warranty
              </li>
              <li className="mb-[159px] text-[20px] leading-[126.5%] text-dark">
                Not Covered in
                <br /> Warranty
              </li>
              <li className="pb-[124px] text-[20px] leading-[126.5%] text-dark">
                Domestic Warranty
              </li>
            </ul>
          </div>
        </div>

        {/* product => comparison card start ===========> */}
        <div className="w-full max-w-[344px]">
          {/* header  */}
          <div className="h-[350px] pr-[25px] pl-[39px]">
            <div className="h-[177px] w-[280px]">
              <Image
                src="/images/comparison-card-img-1.png"
                width={400}
                height={400}
                alt="product-card-image"
                priority
                className="h-full w-full rounded-[10px] object-cover object-center"
              />

              <h1 className="mt-[18px] mb-[6px] text-[24px] leading-[126.5%] font-medium text-dark">
                Asgaard Sofa
              </h1>
              <h6 className="mb-[10px] text-[18px] font-medium text-dark">Rs. 250,000.00</h6>
              <h6 className="mb-[60px] flex items-center">
                <span className="text-[18px] font-medium text-dark">4.7</span>
                <div className="ml-[5px] flex items-center gap-[6px]">
                  <StartIcon />
                  <StartIcon />
                  <StartIcon />
                  <StartIcon />
                  <HalfStartIcon />
                </div>
                <span className="border-l border-accent-light pl-[8px] text-[13px] text-accent-light">
                  204 Review
                </span>
              </h6>
            </div>
          </div>

          {/* product => comparison info  */}
          <div className="w-full border-t border-r border-septenary-light pt-[105px] pl-[62px]">
            <ul className="mb-[159px] space-y-[34px]">
              <li className="text-[20px] leading-[126.5%] text-dark">1 sectional sofa</li>
              <li className="text-[20px] leading-[126.5%] text-dark">TFCBLIGRBL6SRHS</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Solid Wood</li>
              <li className="text-[20px] leading-[126.5%] text-dark">L-shaped</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Fabric + Cotton</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Bright Grey & Lion</li>
            </ul>

            <ul className="mb-[159px] space-y-[34px]">
              <li className="text-[20px] leading-[126.5%] text-dark">Foam</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Bright Grey & Lion</li>
              <li className="text-[20px] leading-[126.5%] text-dark">No</li>
              <li className="text-[20px] leading-[126.5%] text-dark">280 KG</li>
              <li className="mt-[60px] text-[20px] leading-[126.5%] text-dark">India</li>
            </ul>

            <ul className="mb-[163px] space-y-[34px]">
              <li className="text-[20px] leading-[126.5%] text-dark">265.32 cm</li>
              <li className="text-[20px] leading-[126.5%] text-dark">76 cm</li>
              <li className="text-[20px] leading-[126.5%] text-dark">167.76 cm</li>
              <li className="text-[20px] leading-[126.5%] text-dark">45 KG</li>
              <li className="text-[20px] leading-[126.5%] text-dark">41.52 cm</li>
              <li className="text-[20px] leading-[126.5%] text-dark">5.46 cm</li>
            </ul>

            <ul className="mb-[60px] max-w-[241px] space-y-[34px] overflow-hidden">
              <li className="text-[20px] leading-[126.5%] text-dark">
                1 Year Manufacturing Warranty
              </li>
              <li className="text-[20px] leading-[126.5%] text-dark">
                For Warranty Claims or Any Product Related Issues Please Email at
                operations@trevifurniture.com
              </li>
              <li className="mt-[60px] text-[20px] leading-[126.5%] text-dark">
                Warranty Against Manufacturing Defect
              </li>
              <li className="mt-[95px] text-[20px] leading-[126.5%] text-dark">
                The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended
                Use And Wear & Tear In The Natural Course Of Product Usage.
              </li>
              <li className="text-[20px] leading-[126.5%] text-dark">1 Year</li>
            </ul>

            <button className="flex h-[64px] w-[215px] items-center justify-center bg-primary text-background">
              Add To Cart
            </button>
          </div>
        </div>

        <div className="w-full max-w-[344px]">
          {/* header  */}
          <div className="h-[350px] pr-[25px] pl-[39px]">
            <div className="h-[177px] w-[280px]">
              <Image
                src="/images/comparison-card-img-1.png"
                width={400}
                height={400}
                alt="product-card-image"
                priority
                className="h-full w-full rounded-[10px] object-cover object-center"
              />

              <h1 className="mt-[18px] mb-[6px] text-[24px] leading-[126.5%] font-medium text-dark">
                Asgaard Sofa
              </h1>
              <h6 className="mb-[10px] text-[18px] font-medium text-dark">Rs. 250,000.00</h6>
              <h6 className="mb-[60px] flex items-center">
                <span className="text-[18px] font-medium text-dark">4.7</span>
                <div className="ml-[5px] flex items-center gap-[6px]">
                  <StartIcon />
                  <StartIcon />
                  <StartIcon />
                  <StartIcon />
                  <HalfStartIcon />
                </div>
                <span className="border-l border-accent-light pl-[8px] text-[13px] text-accent-light">
                  204 Review
                </span>
              </h6>
            </div>
          </div>

          {/* product => comparison info  */}
          <div className="w-full border-t border-r border-septenary-light pt-[105px] pl-[62px]">
            <ul className="mb-[159px] space-y-[34px]">
              <li className="text-[20px] leading-[126.5%] text-dark">1 sectional sofa</li>
              <li className="text-[20px] leading-[126.5%] text-dark">TFCBLIGRBL6SRHS</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Solid Wood</li>
              <li className="text-[20px] leading-[126.5%] text-dark">L-shaped</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Fabric + Cotton</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Bright Grey & Lion</li>
            </ul>

            <ul className="mb-[159px] space-y-[34px]">
              <li className="text-[20px] leading-[126.5%] text-dark">Foam</li>
              <li className="text-[20px] leading-[126.5%] text-dark">Bright Grey & Lion</li>
              <li className="text-[20px] leading-[126.5%] text-dark">No</li>
              <li className="text-[20px] leading-[126.5%] text-dark">280 KG</li>
              <li className="mt-[60px] text-[20px] leading-[126.5%] text-dark">India</li>
            </ul>

            <ul className="mb-[163px] space-y-[34px]">
              <li className="text-[20px] leading-[126.5%] text-dark">265.32 cm</li>
              <li className="text-[20px] leading-[126.5%] text-dark">76 cm</li>
              <li className="text-[20px] leading-[126.5%] text-dark">167.76 cm</li>
              <li className="text-[20px] leading-[126.5%] text-dark">45 KG</li>
              <li className="text-[20px] leading-[126.5%] text-dark">41.52 cm</li>
              <li className="text-[20px] leading-[126.5%] text-dark">5.46 cm</li>
            </ul>

            <ul className="mb-[60px] max-w-[241px] space-y-[34px] overflow-hidden">
              <li className="text-[20px] leading-[126.5%] text-dark">
                1 Year Manufacturing Warranty
              </li>
              <li className="text-[20px] leading-[126.5%] text-dark">
                For Warranty Claims or Any Product Related Issues Please Email at
                operations@trevifurniture.com
              </li>
              <li className="mt-[60px] text-[20px] leading-[126.5%] text-dark">
                Warranty Against Manufacturing Defect
              </li>
              <li className="mt-[95px] text-[20px] leading-[126.5%] text-dark">
                The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended
                Use And Wear & Tear In The Natural Course Of Product Usage.
              </li>
              <li className="text-[20px] leading-[126.5%] text-dark">1 Year</li>
            </ul>

            <button className="flex h-[64px] w-[215px] items-center justify-center bg-primary text-background">
              Add To Cart
            </button>
          </div>
        </div>
        {/* product => comparison card end <=========== */}

        {/* right side, add a product => choose product selector */}

        <div className="w-full max-w-[344px]">
          {/* header  */}
          <div className="h-[301px] pr-[25px] pl-[39px]">
            <h1 className="mt-[49px] mb-[14px] text-[24px] leading-[126.5%] font-semibold text-dark">
              Add A Product
            </h1>

            <div className="relative w-[242px]">
              <select
                name=""
                id=""
                className="h-[39px] w-full appearance-none rounded-[6px] bg-primary pr-[40px] pl-[18px] text-[14px] leading-[126.5%] font-semibold text-background focus:outline-none"
              >
                <option value="">Choose a Product</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <ArrowDownIcon />
              </div>
            </div>
          </div>

          {/* product => comparison info  */}
          <div className="w-full border-t border-septenary-light pt-[105px] pl-[62px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
