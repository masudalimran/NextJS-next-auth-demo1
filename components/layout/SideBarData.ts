import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export const sideBarItems = [
  {
    label: "Home",
    href: "/",
    icon: BsHouseFill,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: BsBellFill,
    auth: true,
    alert: true,
  },
  {
    label: "Profile",
    href: "{profile_url}",
    icon: FaUser,
    auth: true,
  },
];
