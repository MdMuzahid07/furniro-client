import BadgeIcon from "../icons/BadgeIcon";
import CustomerSupportIcon from "../icons/CustomerSupportIcon";
import DeliveryBoxIcon from "../icons/DeliveryBoxIcon";
import TropeIcon from "../icons/TropeIcon";

const SellingPointsData = [
  {
    _id: "sellingPointData_1",
    icon: <TropeIcon />,
    title: "High Quality",
    subtitle: "crafted from top materials",
  },
  {
    _id: "sellingPointData_2",
    icon: <BadgeIcon />,
    title: "Warranty Protection",
    subtitle: "Over 2 years",
  },
  {
    _id: "sellingPointData_3",
    icon: <DeliveryBoxIcon />,
    title: "Free Shipping",
    subtitle: "Order over 150 $",
  },
  {
    _id: "sellingPointData_4",
    icon: <CustomerSupportIcon />,
    title: "24 / 7 Support",
    subtitle: "Dedicated support",
  },
];

const SellingPointsModule = () => {
  return (
    <section className="mx-auto h-auto max-w-[1440px] bg-warning-light px-[40px] md:h-[270px] md:px-[53px]">
      <ul className="flex h-full w-full items-center justify-between">
        {SellingPointsData?.map(({ _id, icon, title, subtitle }) => (
          <li key={_id} className="flex items-center gap-[10px]">
            {icon}
            <div>
              <h1 className="text-[20px] leading-[150%] font-semibold text-quinary sm:text-[25px]">
                {title}
              </h1>
              <p className="text-[18px] leading-[150%] font-medium sm:text-[20px]">{subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SellingPointsModule;
