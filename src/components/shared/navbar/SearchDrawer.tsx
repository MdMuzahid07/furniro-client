import SearchIcon from "@/components/icons/SearchIcon";
import ProductSearchDrawer from "@/components/ui/ProductSearchDrawer";
import React, { useState } from "react";

const SearchDrawer = () => {
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <li>
      <button className="w-[32px]" onClick={() => setIsSearchDrawerOpen(!isSearchDrawerOpen)}>
        <div className="hidden sm:flex">
          <SearchIcon />
        </div>
        <div className="flex sm:hidden">
          <SearchIcon size={20} />
        </div>
      </button>

      <ProductSearchDrawer isOpen={isSearchDrawerOpen} onClose={() => setIsSearchDrawerOpen(false)}>
        <div className="mx-auto max-w-[1440px] pt-[50px] md:pt-[60px]">
          {/* search input  */}
          <div className="relative mx-auto w-full max-w-[700px]">
            <input
              className="h-[50px] w-full rounded-[10px] border border-accent-light pr-[75px] pl-[20px] text-[20px] text-dark placeholder:text-[25px] placeholder:text-accent-light focus:outline-none md:h-[70px] md:text-[25px]"
              type="text"
              name=""
              id=""
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute top-[30%] right-[30px] cursor-pointer">
              <SearchIcon />
            </button>
          </div>
        </div>
      </ProductSearchDrawer>
    </li>
  );
};

export default SearchDrawer;
