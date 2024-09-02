import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import React from "react";

export interface SubMenusProps {
  id: number;
  title: string;
  link?: string;
  icon?: React.FC | null;
}

export interface FooterMenusProps {
  id: number;
  title: string;
  menus?: SubMenusProps[];
}

export const footerMenus = [
  {
    id: 1,
    title: "Get to Know Us",
    menus: [
      {
        id: 1,
        icon: null,
        title: "Home",
        link: "/",
      },
      {
        id: 2,
        icon: null,
        title: "About Us",
        link: "/",
      },
      {
        id: 3,
        icon: null,
        title: "Products",
        link: "/",
      },
      {
        id: 4,
        icon: null,
        title: "Contact Us",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Get to Know Us",
    menus: [
      {
        id: 1,
        icon: null,
        title: "Home",
        link: "/",
      },
      {
        id: 2,
        icon: null,
        title: "About Us",
        link: "/",
      },
      {
        id: 3,
        icon: null,
        title: "Products",
        link: "/",
      },
      {
        id: 4,
        icon: null,
        title: "Contact Us",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Contact Us",
    menus: [
      {
        id: 1,
        icon: <IoIosCall className="text-[20px] text-[var(--blue-700)]" />,
        title: "0308 9275988",
        link: "/",
      },
      {
        id: 2,
        icon: <MdEmail className="text-[var(--blue-700)]" />,
        title: "ansarsaeed988@gmail.com",
        link: "/",
      },
      {
        id: 3,
        icon: <FaLocationDot className="text-[var(--blue-700)]" />,
        title: "E-11/2 Islamabad",
        link: "/",
      },
    ],
  },
];
