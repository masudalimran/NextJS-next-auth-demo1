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
  },
  {
    label: "Profile",
    href: "/users/123",
    icon: FaUser,
    auth: true,
  },
];
