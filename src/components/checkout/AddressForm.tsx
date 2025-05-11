"use client";
import { ChangeEvent, useState } from "react";
import FurniroSelector from "../FurniroSelector";
import countryList from "@/constants/countryList";
import ProvinceList from "@/constants/ProvinceList";

const AddressForm = ({ btnTitle }: { btnTitle?: string }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectProvince, setSelectProvince] = useState("");

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleProvinceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectProvince(e.target.value);
  };
  return (
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

      <div className="sm:mt-[54px]">
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

      <div className="sm:mt-[56px]">
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
          className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] pt-[13px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:pt-[10px] sm:text-[20px]"
          placeholder="Additional Info (Optional)"
          id="additional-information"
        />
      </div>

      <button
        type="submit"
        className="mt-[49px] flex h-[55px] w-full cursor-pointer items-center justify-center rounded-[5px] bg-primary text-[16px] text-background sm:w-[237px]"
      >
        {btnTitle || "Submit"}
      </button>
    </form>
  );
};

export default AddressForm;
