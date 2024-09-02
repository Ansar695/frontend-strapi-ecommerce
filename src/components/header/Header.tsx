import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";

import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

import useScrollY from "../../hooks/useScroll";
import Checkout from "./Checkout";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Hamburger from "./Hamburger";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);
  const scrollY = useScrollY();

  const { items } = useSelector((state: RootState) => state.cart);

  const handleOpenDrawer = () => setOpen(!open);
  const handleOpenHamburger = () => setOpenHamburger(!openHamburger);

  return (
    <div
      className={`w-full shadow-sm  h-[80px] bg-white ${
        scrollY > 60 ? "sticky top-0 sticky-animation" : "relative"
      } transition-all duration-150 ease-linear z-40`}
    >
      <div className="container bg-white h-full flex items-center justify-between">
        <Logo />
        <div className="h-full hidden md:flex items-center gap-5">
          <NavLink
            to="/"
            className="text-[var(--black-600)] leading-[80px] font-[400] hover:font-[600] px-2 h-full link-border-animation"
          >
            Home
          </NavLink>
          {/* <NavLink
            to="/categories"
            className="text-[var(--black-600)] leading-[80px] font-[400] hover:font-[600] px-2 h-full link-border-animation"
          >
            Category
          </NavLink> */}
          <NavLink
            to="/about-us"
            className="text-[var(--black-600)] leading-[80px] font-[400] hover:font-[600] px-2 h-full link-border-animation"
          >
            About Us
          </NavLink>
          <NavLink
            to="/faqs"
            className="text-[var(--black-600)] leading-[80px] font-[400] hover:font-[600] px-2 h-full link-border-animation"
          >
            FAQs
          </NavLink>
          {/* <NavLink
            to="/blogs"
            className="text-[var(--black-600)] leading-[80px] font-[400] hover:font-[600] px-2 h-full link-border-animation"
          >
            Blog
          </NavLink> */}
          <NavLink
            to="contact-us"
            className="text-[var(--black-600)] leading-[80px] font-[400] hover:font-[600] px-2 h-full link-border-animation"
          >
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <CiSearch className="text-[30px] cursor-pointer text-[var(--black-600)] md:block hidden" />
          <div className="relative" onClick={handleOpenDrawer}>
            {items?.length > 0 && (
              <div className="absolute top-[-6px] right-[-6px] w-5 h-5 rounded-full bg-red-700 text-white text-[10px] flex items-center justify-center">
                {items?.length}
              </div>
            )}
            <IoCartOutline className="text-[30px] cursor-pointer text-[var(--black-600)]" />
          </div>
          <Checkout open={open} handleOpenDrawer={handleOpenDrawer} />

          <RxHamburgerMenu
            className="text-[var(--black-600)] text-[30px] cursor-pointer sm:hidden block"
            onClick={handleOpenHamburger}
          />
          <Hamburger
            open={openHamburger}
            handleOpenHamburger={handleOpenHamburger}
          />

          <LuUser className="text-[30px] cursor-pointer text-[var(--black-600)] hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Header;
