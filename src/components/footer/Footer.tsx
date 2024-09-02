import Logo from "../common/Logo";

import { MdFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { footerMenus } from "../../utils/static-data/footer";

const logos = [
  {
    id: 1,
    logo: (
      <MdFacebook className="text-[18px] cursor-pointer text-[var(--black-600)] group-hover:text-white transition-all-150" />
    ),
  },
  {
    id: 2,
    logo: (
      <FaSquareInstagram className="text-[18px] cursor-pointer text-[var(--black-600)] group-hover:text-white transition-all-150" />
    ),
  },
  {
    id: 3,
    logo: (
      <FaLinkedin className="text-[18px] cursor-pointer text-[var(--black-600)] group-hover:text-white transition-all-150" />
    ),
  },
  {
    id: 4,
    logo: (
      <IoLogoWhatsapp className="text-[18px] cursor-pointer text-[var(--black-600)] group-hover:text-white transition-all-150" />
    ),
  },
];

const Footer = () => {
  return (
    <div className="w-full border-t border-[var(--black-100)] pt-12 md:pt-16 pb-12 bg-white">
      <div className="w-full mx-auto flex px-4 flex-col mb-10 lg:hidden">
        <Logo />
        <div className="flex items-center gap-3 mt-2">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-sm p-1 bg-[var(--blue-50)] group hover:bg-[var(--blue-700)] transition-all-150 flex items-center justify-center"
            >
              {logo.logo}
            </div>
          ))}
        </div>
      </div>
      <div className="container grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4 items-center">
        <div className="hidden lg:block">
          <Logo />
          <div className="flex items-center gap-3 mt-2">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-sm p-1 bg-[var(--blue-50)] group hover:bg-[var(--blue-700)] transition-all-150 flex items-center justify-center"
              >
                {logo.logo}
              </div>
            ))}
          </div>
        </div>
        {footerMenus.map((menus) => (
          <div key={menus.id} className=" h-full">
            <p className="text-[18px] font-bold text-[var(--black-800)]">
              {menus.title}
            </p>
            <div className="flex flex-col gap-3 mt-3">
              {menus?.menus?.map((menu) => (
                <div
                  key={menu.id}
                  className="flex items-center gap-2 group hover:scale-105 transition-all-150"
                >
                  {menu?.icon && <span>{menu?.icon}</span>}
                  <NavLink
                    to={menu.link}
                    className="text-[var(--black-600)] group-hover:font-[600]"
                  >
                    {menu.title}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
