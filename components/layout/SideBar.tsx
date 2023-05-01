import { sideBarItems } from "./SideBarData";
import SideBarItem from "./SideBarItem";
import SideBarLogo from "./SideBarLogo";
import { BiLogOut } from "react-icons/bi";
import SideBarTweetBtn from "./SideBarTweetBtn";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="cold-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SideBarLogo />
          {sideBarItems.map((item, index) => (
            <SideBarItem
              key={index}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SideBarItem label="Logout" icon={BiLogOut} onClick={() => {}} />
          <SideBarTweetBtn />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
