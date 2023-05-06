import { sideBarItems } from "./SideBarData";
import SideBarItem from "./SideBarItem";
import SideBarLogo from "./SideBarLogo";
import { BiLogOut } from "react-icons/bi";
import SideBarTweetBtn from "./SideBarTweetBtn";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

type Props = {};

const SideBar = (props: Props) => {
  const { data: currentUser } = useCurrentUser();
  // console.log("from SideBar.tsx", currentUser);

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
              auth={item.auth}
            />
          ))}
          {currentUser && (
            <SideBarItem label="Logout" icon={BiLogOut} onClick={signOut} />
          )}
          <SideBarTweetBtn />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
