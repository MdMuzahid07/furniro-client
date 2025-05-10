import EditIcon from "@/components/icons/EditIcon";
import Image from "next/image";

const ProfileSettings = () => {
  return (
    <section className="max-h-[700px] w-full overflow-y-auto pb-[30px] transition-all md:pl-[30px]">
      <div className="relative h-[90px] w-full bg-quaternary sm:h-[120px] md:h-[150px]">
        <Image
          src="/images/LocationBar-bg-img.png"
          alt="profile-cover"
          width={900}
          height={300}
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute -bottom-[40px] flex w-full justify-center md:justify-start md:pl-[50px] lg:-bottom-[50px]">
          <label
            className="relative h-[80px] w-[80px] cursor-pointer rounded-full border-2 border-background bg-warning-light shadow transition-all sm:border-3 lg:h-[100px] lg:w-[100px]"
            htmlFor="profileImg"
          >
            <Image
              src="/images/comparison-card-img-1.png"
              alt="profile-picture"
              width={200}
              height={200}
              className="object-fit h-full w-full rounded-full object-cover"
            />

            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity hover:opacity-100">
              <EditIcon />
            </div>
          </label>
          <input type="file" className="hidden" id="profileImg" />
        </div>
      </div>

      <form className="mt-[60px] px-[10px] sm:px-[20px] md:mt-[80px] lg:px-[50px]">
        <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <label className="text-[14px] font-medium text-dark" htmlFor="your-name">
              Your Name
            </label>
            <input
              className="mt-[5px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:px-[18px] sm:text-[20px]"
              placeholder="Your Name"
              type="text"
              id="your-name"
            />
          </div>
          <div>
            <label className="text-[14px] font-medium text-dark" htmlFor="your-email">
              Your Email
            </label>
            <input
              className="mt-[5px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:px-[18px] sm:text-[20px]"
              placeholder="Your Email"
              type="email"
              id="your-email"
            />
          </div>

          <div>
            <label className="text-[14px] font-medium text-dark" htmlFor="your-phone">
              Your Phone
            </label>
            <input
              className="mt-[5px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:px-[18px] sm:text-[20px]"
              placeholder="Your Phone"
              type="number"
              id="your-phone"
            />
          </div>
        </div>

        <button className="mt-[35px] flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-primary text-[14px] font-bold text-background uppercase transition-all hover:bg-quaternary hover:text-dark active:text-[16px] active:tracking-wide sm:max-w-[150px]">
          Save
        </button>
      </form>

      <div className="mt-[40px] gap-[30px] border-t border-septenary-light px-[10px] pt-[20px] sm:flex sm:items-center sm:px-[20px] sm:pt-[40px] lg:px-[50px]">
        <h1 className="text-[16px] font-medium text-danger sm:text-[20px]">Delete My Account</h1>
        <button className="mt-[20px] flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-quaternary text-[14px] font-bold text-dark uppercase transition-all hover:bg-danger hover:text-background active:text-[16px] active:tracking-wide sm:mt-[0px] sm:max-w-[150px] sm:rounded-full">
          Delete
        </button>
      </div>
    </section>
  );
};

export default ProfileSettings;
