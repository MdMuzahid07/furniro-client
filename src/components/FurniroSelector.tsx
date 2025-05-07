// components/CountrySelector.jsx
import React from "react";
import ArrowDownBlackIcon from "./icons/ArrowDownBlackIcon";

interface IFurniroSelector {
  name?: string;
  id?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  style?: string;
  iconStyle?: string;
  label: string;
  options: { value: string; label: string }[];
  placeholderText: string;
}

const FurniroSelector = ({
  name = "country",
  id = "country-name",
  onChange,
  value,
  style,
  iconStyle,
  label,
  options,
  placeholderText,
}: IFurniroSelector) => {
  return (
    <div>
      <label className="text-[16px] font-medium text-dark" htmlFor={id}>
        {label || "Country / Region"}
      </label>
      <div className="relative h-[75px] w-full">
        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={`${style || "mt-[22px] h-[75px] w-full appearance-none rounded-[10px] border border-accent-light px-[18px] pr-[40px] pl-[18px] text-[20px] leading-[126.5%] focus:border-primary focus:outline-none"}`}
        >
          <option className="text-accent-light" value="" disabled>
            {placeholderText || "Choose a Country"}
          </option>
          {options?.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
        <div className={`${iconStyle || "absolute top-[50px] right-[27px]"}`}>
          <ArrowDownBlackIcon />
        </div>
      </div>
    </div>
  );
};

export default FurniroSelector;
