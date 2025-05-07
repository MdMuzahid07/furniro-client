import AccountSettingIcon from "@/components/icons/AccountSettingIcon";
import CloseXIcon from "@/components/icons/CloseXIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import OrderCardBoxIcon from "@/components/icons/OrderCardBoxIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import DropDown from "@/components/ui/DropDown";
import Link from "next/link";

const UserDropdown = () => {
  return (
    <li>
      <DropDown
        closeTriggerIcon={
          <>
            <div className="hidden sm:flex">
              <CloseXIcon />
            </div>
            <div className="flex sm:hidden">
              <CloseXIcon size={20} />
            </div>
          </>
        }
        trigger={
          <>
            <div className="hidden sm:flex">
              <PersonIcon />
            </div>
            <div className="flex sm:hidden">
              <PersonIcon size={20} />
            </div>
          </>
        }
        style=" w-[250px] h-[300px] bg-white relative -mr-[130px] sm:mr-[0px]"
        // closeOnOutsideClick={false}
        closeTriggerStyle="absolute right-[30px] top-[30px]"
      >
        <div className="w-full px-[30px] pt-[28px]">
          <h1 className="text-[18px] font-semibold text-dark">Hi, Muzahid</h1>

          <div className="mt-[20px] w-full space-y-[15px] border-t border-tertiary-light pt-[20px]">
            <button>
              <Link href="/" className="flex w-full items-center gap-3">
                <AccountSettingIcon size={20} />
                My Account
              </Link>
            </button>
            <br />
            <button>
              <Link href="/" className="flex w-full items-center gap-3">
                <OrderCardBoxIcon size={20} />
                Orders
              </Link>
            </button>
            <br />
            <button className="flex w-full items-center gap-3 transition-all hover:text-danger">
              <LogoutIcon size={20} />
              Logout
            </button>
          </div>
        </div>
      </DropDown>
    </li>
  );
};

export default UserDropdown;
