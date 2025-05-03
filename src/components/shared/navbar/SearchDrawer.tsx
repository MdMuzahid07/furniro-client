import SearchIcon from "@/components/icons/SearchIcon";
import React from "react";

const SearchDrawer = () => {
  return (
    <li>
      <div className="hidden sm:flex">
        <SearchIcon />
      </div>
      <div className="flex sm:hidden">
        <SearchIcon size={20} />
      </div>
    </li>
  );
};

export default SearchDrawer;
