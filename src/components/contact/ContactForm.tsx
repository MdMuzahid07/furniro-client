import CallIcon from "../icons/CallIcon";
import LocationIcon from "../icons/LocationIcon";
import WatchIcon from "../icons/WatchIcon";

const contactInfo = [
  {
    icon: <LocationIcon />,
    title: "Address",
    subtitle: "236 5th SE Avenue, New York NY10000, United States",
  },
  {
    icon: <CallIcon />,
    title: "Phone",
    subtitle: `Mobile: +(84) 546-6789, Hotline: +(84) 456-6789`,
  },
  {
    icon: <WatchIcon />,
    title: "Working Time",
    subtitle: `Monday-Friday: 9:00 - 22:00
Saturday-Sunday: 9:00 - 21:00`,
  },
];

const ContactForm = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-[20px] pt-[30px] pb-[40px] sm:px-[40px] sm:pt-[45px] sm:pb-[50px] md:px-[60px] md:pt-[65px] md:pb-[63px] lg:px-[80px] lg:pt-[98px] xl:px-[120px] 2xl:px-[191px]">
      <div className="sm:text-center">
        <h1 className="mb-[7px] text-[24px] font-semibold text-dark sm:text-[36px]">
          Get In Touch With Us
        </h1>
        <p className="text-[16px] text-accent-light">
          For More Information About Our Product & Services. Please Feel Free To Drop Us{" "}
          <br className="hidden md:flex" /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>

      <div className="flex flex-col gap-[40px] pt-[70px] sm:pt-[40px] md:pt-[58px] lg:flex-row lg:gap-[30px] lg:pt-[79px] xl:pt-[128.12px]">
        {/* contact => address  */}
        <aside className="mr-[0px] flex w-full flex-col gap-[42px] pl-[0px] md:mr-[35px] md:max-w-[393px] lg:mr-[75px] lg:pl-[54px]">
          {contactInfo?.map(({ icon, title, subtitle }, index) => (
            <div key={index} className="flex gap-[30px]">
              {icon}
              <div className="-mt-[4px]">
                <h1 className="text-18px font-medium text-dark sm:text-[24px]">{title}</h1>
                <p className="text-[14px] text-dark sm:text-[16px]">{subtitle}</p>
              </div>
            </div>
          ))}
        </aside>

        {/* contact => form  */}

        <form action="" className="space-y-[36px] px-[0px] xl:px-[54px]">
          <div>
            <label className="text-[16px] font-medium text-dark" htmlFor="your-name">
              Your Name
            </label>
            <input
              className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
              placeholder="Your Name"
              type="text"
              id="your-name"
            />
          </div>

          <div>
            <label className="text-[16px] font-medium text-dark" htmlFor="email">
              Email Address
            </label>
            <input
              className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
              placeholder="Your Email Address"
              type="text"
              id="email"
            />
          </div>

          <div>
            <label className="text-[16px] font-medium text-dark" htmlFor="subject">
              Subject
            </label>
            <input
              className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:text-[20px]"
              placeholder="Subject"
              type="email"
              id="subject"
            />
          </div>

          <div>
            <label className="text-[16px] font-medium text-dark" htmlFor="message">
              Message
            </label>
            <textarea
              className="mt-[22px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] pt-[13px] text-[16px] focus:border-primary focus:outline-none sm:h-[75px] sm:px-[18px] sm:pt-[10px] sm:text-[20px]"
              placeholder="Additional Info (Optional)"
              id="message"
            />
          </div>

          <button className="mt-[49px] flex h-[55px] w-full items-center justify-center rounded-[5px] bg-primary text-[16px] text-background sm:w-[237px]">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
