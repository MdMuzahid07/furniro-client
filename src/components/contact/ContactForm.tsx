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
    <section className="mx-auto max-w-[1440px] px-[20px] pt-[30px] pb-[40px] sm:px-[40px] sm:pt-[45px] sm:pb-[50px] md:px-[70px] md:pt-[65px] md:pb-[63px] lg:px-[130px] lg:pt-[98px] xl:px-[191px]">
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

      <div className="flex flex-col gap-[30px] pt-[30px] sm:pt-[40px] md:flex-row md:pt-[58px] lg:pt-[79px] xl:pt-[128.12px]">
        {/* contact => address  */}
        <aside className="flex w-full flex-col gap-[42px] pl-[0px] sm:flex-row sm:pl-[35px] md:max-w-[393px] md:flex-col md:pl-[54px]">
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

        <form action=""></form>
      </div>
    </section>
  );
};

export default ContactForm;
