import Image from "next/image";
import PersonTwoIcon from "../icons/PersonTwoIcon";
import CalenderIcon from "../icons/CalenderIcon";
import TagIcon from "../icons/TagIcon";

const BlogFeedCard = () => {
  return (
    <div className="w-full">
      <div className="w-full xl:h-[500px]">
        <Image
          src="/images/blog/laptop-big-image-1.png"
          width={900}
          height={800}
          alt="blog-feeds-blog-thumbnail"
          className="h-full w-full"
          priority
        />
      </div>
      <ul className="mt-[17px] flex items-center gap-[10px] sm:gap-[35px]">
        <li className="flex items-center gap-[7px]">
          <PersonTwoIcon size=" size-[16px] sm:size-[20px]" />
          <p className="font-accent-light text-[12px] sm:text-[16px]">Admin</p>
        </li>
        <li className="flex items-center gap-[7px]">
          <CalenderIcon size=" size-[14px] sm:size-[20px]" />
          <p className="font-accent-light text-[12px] sm:text-[16px]">14 Oct 2022</p>
        </li>
        <li className="flex items-center gap-[7px]">
          <TagIcon size=" size-[16px] sm:size-[24px]" />
          <p className="font-accent-light text-[12px] sm:text-[16px]">Wood</p>
        </li>
      </ul>

      <h1 className="mt-[15px] mb-[12px] text-[20px] font-medium text-dark sm:text-[30px]">
        Going all-in with millennial design
      </h1>

      <p className="text-[14px] text-accent-light sm:text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In
        nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
        tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at
        erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper
        dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
      </p>

      <button className="pb-12px mt-[20px] border-b border-dark text-[16px] text-dark sm:mt-[25px] md:mt-[30px]">
        Read More
      </button>
    </div>
  );
};

export default BlogFeedCard;
