import SearchIcon from "../icons/SearchIcon";

const BlogCategory = () => {
  return (
    <div className="mt-[40px] h-[450px] w-full px-[0px] md:mt-[0px] md:h-[537px] lg:max-w-[393px] xl:px-[41px]">
      <div className="relative w-full">
        <input
          className="h-[45px] w-full rounded-[10px] border border-accent-light pr-[75px] pl-[20px] text-[16px] text-dark placeholder:text-[20px] placeholder:text-accent-light focus:outline-none md:h-[58px] md:text-[20px]"
          type="text"
          name=""
          id=""
          placeholder="Search here..."
        />
        <button className="absolute top-[17px] right-[10px] cursor-pointer md:top-[30%]">
          <SearchIcon size={24} />
        </button>
      </div>

      <ul className="mt-[43px] w-full lg:px-[36px]">
        <li>
          <h1 className="mb-[33px] text-[18px] font-medium text-dark md:text-[24px]">Categories</h1>
        </li>
        <li className="mb-[24px] flex w-full items-center justify-between sm:mb-[41px]">
          <p className="text-[14px] text-accent-light sm:text-[16px]">Crafts</p>
          <p className="text-[14px] text-accent-light sm:text-[16px]">2</p>
        </li>
        <li className="mb-[24px] flex w-full items-center justify-between sm:mb-[41px]">
          <p className="text-[14px] text-accent-light sm:text-[16px]">Design</p>
          <p className="text-[14px] text-accent-light sm:text-[16px]">8</p>
        </li>
        <li className="mb-[24px] flex w-full items-center justify-between sm:mb-[41px]">
          <p className="text-[14px] text-accent-light sm:text-[16px]">Handmade</p>
          <p className="text-[14px] text-accent-light sm:text-[16px]">7</p>
        </li>
        <li className="mb-[24px] flex w-full items-center justify-between sm:mb-[41px]">
          <p className="text-[14px] text-accent-light sm:text-[16px]">Interior</p>
          <p className="text-[14px] text-accent-light sm:text-[16px]">1</p>
        </li>
        <li className="flex w-full items-center justify-between">
          <p className="text-[14px] text-accent-light sm:text-[16px]">Wood</p>
          <p className="text-[14px] text-accent-light sm:text-[16px]">6</p>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategory;
