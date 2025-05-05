import React from "react";
import FilterIcon from "../icons/FilterIcon";
import GridIcon from "../icons/GridIcon";
import ListIcon from "../icons/ListIcon";

const ShopFilterBar = () => {
  return (
    <section className="mx-auto flex h-auto max-w-[1440px] items-center bg-quaternary px-[20px] py-[30px] md:px-[40px] lg:h-[100px] lg:px-[100px] lg:py-[0px]">
      <div className="flex w-full flex-col-reverse items-center justify-between sm:flex-col lg:flex-row">
        <div className="mb-[20px] flex flex-col-reverse sm:flex-row lg:mb-[0px]">
          <div className="flex items-center gap-[24px] border-accent-light pr-[30px] sm:border-r-[2px]">
            <button className="flex items-center gap-[12px] text-[20px] text-dark">
              <FilterIcon />
              Filter
            </button>
            <button>
              <GridIcon />
            </button>
            <button>
              <ListIcon />
            </button>
          </div>
          <p className="mb-[14px] text-[16px] text-dark sm:mb-[0px] sm:pl-[30px]">
            Showing 1–16 of 32 results
          </p>
        </div>

        <div className="mb-[20px] flex flex-col items-center gap-[14px] sm:mb-[0px] sm:flex-row sm:gap-[30px]">
          <div className="flex items-center gap-[17px]">
            <p className="text-[20px] text-dark">Show</p>
            <select className="flex h-[40px] w-[40px] appearance-none items-center justify-center bg-background focus:outline-none sm:h-[55px] sm:w-[55px]">
              <option value="16" className="text-center" selected>
                16
              </option>
              <option value="16" className="text-center">
                24
              </option>
              <option value="16" className="text-center">
                32
              </option>
              <option value="16" className="text-center">
                40
              </option>
              <option value="16" className="text-center">
                48
              </option>
              <option value="16" className="text-center">
                56
              </option>
            </select>
          </div>
          <div className="flex items-center gap-[17px]">
            <p className="text-[20px] text-dark">Short By</p>
            <select className="flex h-[40px] w-[160px] appearance-none items-center justify-center bg-background focus:outline-none sm:h-[55px] sm:w-[180px]">
              <option value="Low>High" className="text-center" selected>
                Default
              </option>
              <option value="Low>High" className="text-center">
                Price: {`High > Low`}{" "}
              </option>
              <option value="High>Low" className="text-center">
                Price: {`Low > High`}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopFilterBar;
