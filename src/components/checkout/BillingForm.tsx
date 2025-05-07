"use client";
import { ChangeEvent, useState } from "react";
import FurniroSelector from "../FurniroSelector";
import countryList from "@/constants/countryList";
import ProvinceList from "@/constants/ProvinceList";
import CheckoutAside from "./CheckoutAside";

const BillingForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectProvince, setSelectProvince] = useState("");

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleProvinceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectProvince(e.target.value);
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-[20px] pt-[40px] pb-[40px] sm:px-[40px] sm:pt-[50px] md:px-[60px] lg:px-[52px] lg:pt-[63px] lg:pb-[52px] xl:px-[100px]">
      <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-2">
        {/* billing => form */}
        <div className="px-[0px] pt-[25] pb-[40px] sm:px-[30px] sm:pt-[35px] sm:pb-[50px] md:px-[40px] md:pb-[71px] lg:px-[77.5px]">
          <h1 className="mb-[36px] text-[24px] font-semibold text-dark sm:text-[36px]">
            Billing details
          </h1>

          <form action="" className="space-y-[36px]">
            <div className="flex flex-col gap-[31px] sm:flex-row">
              <div>
                <label className="text-[16px] font-medium text-dark" htmlFor="fname">
                  First Name
                </label>
                <input
                  className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
                  placeholder="Your First Name"
                  type="text"
                  id="fname"
                />
              </div>
              <div>
                <label className="text-[16px] font-medium text-dark" htmlFor="lname">
                  Last Name
                </label>
                <input
                  className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
                  placeholder="Your Last Name"
                  type="text"
                  id="lname"
                />
              </div>
            </div>

            <div>
              <label className="text-[16px] font-medium text-dark" htmlFor="company-name">
                Company Name (Optional)
              </label>
              <input
                className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
                placeholder="Your Company Name"
                type="text"
                id="company-name"
              />
            </div>

            {/* country => region selector  */}

            <div>
              <FurniroSelector
                placeholderText="Select Country"
                options={countryList}
                label="Country / Region"
                value={selectedCountry}
                onChange={handleCountryChange}
              />
            </div>

            <div className="mt-[54px]">
              <label className="text-[16px] font-medium text-dark" htmlFor="street-address">
                Street Address
              </label>
              <input
                className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
                placeholder="Your Street Address"
                type="text"
                id="street-address"
              />
            </div>

            <div>
              <label className="text-[16px] font-medium text-dark" htmlFor="town-city">
                Town / City
              </label>
              <input
                className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
                placeholder="Your Town/City"
                type="text"
                id="town-city"
              />
            </div>

            <div>
              <FurniroSelector
                placeholderText="Select Province"
                options={ProvinceList}
                label="Province"
                value={selectProvince}
                onChange={handleProvinceChange}
              />
            </div>

            <div className="mt-[56px]">
              <label className="text-[16px] font-medium text-dark" htmlFor="zip-code">
                ZIP Code
              </label>
              <input
                className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
                placeholder="Your Zip Code"
                type="text"
                id="zip-code"
              />
            </div>

            <div>
              <label className="text-[16px] font-medium text-dark" htmlFor="phone">
                Phone
              </label>
              <input
                className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
                placeholder="Your Phone Number"
                type="text"
                id="phone"
              />
            </div>

            <div>
              <label className="text-[16px] font-medium text-dark" htmlFor="email-address">
                Email Address
              </label>
              <input
                className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
                placeholder="Your Email-Address"
                type="email"
                id="email-address"
              />
            </div>

            <div>
              <label className="text-[16px] font-medium text-dark" htmlFor="additional-information">
                Additional Information
              </label>
              <textarea
                className="mt-[22px] h-[75px] w-full rounded-[10px] border border-accent-light px-[18px] pt-[10px] text-[20px] focus:border-primary focus:outline-none"
                placeholder="Additional Info (Optional)"
                id="additional-information"
              />
            </div>
          </form>
        </div>

        {/* billing => info  */}
        <CheckoutAside />
      </div>
    </section>
  );
};

export default BillingForm;
