import { IoMdClose } from "react-icons/io";
import profile from "@/assets/images/Mouse.png";
import { NavLink } from "react-router-dom";

interface CheckoutDrawerProps {
  open: boolean;
  handleOpenHamburger: () => void;
}

const Hamburger = (props: CheckoutDrawerProps) => {
  const { open, handleOpenHamburger } = props;

  return (
    <div>
      {open && (
        <div
          className="fixed top-0 right-0 left-0 bottom-0 z-10"
          style={{ background: "rgba(0,0,0,0.4)" }}
        />
      )}
      <div
        className={`fixed top-0 ${
          open ? "left-6 right-0" : "left-[105%] right-[-150px]"
        } z-40 h-screen overflow-y-auto bg-white transition-all-150`}
        aria-labelledby="drawer-right-label"
        style={{ boxShadow: "-1px 5px 10px rgba(0,0,0,0.5)" }}
      >
        <div
          className="w-full sm:w-[400px] flex flex-col h-full bg-white float-end transition-all-150"
          style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.5)" }}
        >
          <div className="flex items-start justify-between p-6 border-b border-[var(--black-100)]">
            <div className="flex items-center gap-2">
              <div className="img w-16 h-16 rounded-full overflow-hidden bg-[var(--black-100)]">
                <img
                  src={profile}
                  className="w-full h-full object-cover"
                  alt="profile-img"
                />
              </div>
              <div>
                <p className="text-[14px] text-[var(--black-600)] font-bold">
                  Ultra Seller
                </p>
                <p className="text-[14px] text-[var(--black-600)] ">
                  test123@gmail.com
                </p>
              </div>
            </div>
            <IoMdClose
              className="text-[var(--black-600)] text-[24px] cursor-pointer"
              onClick={handleOpenHamburger}
            />
          </div>
          <div className="h-full flex flex-col items-center">
            <NavLink
              to="/"
              onClick={handleOpenHamburger}
              className="text-[var(--black-600)] leading-6 hover:font-[600] pl-8 bg-[var(--light)] p-6 font-[500] text-start w-full border-b border-[var(--black-100)]"
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={handleOpenHamburger}
              className="text-[var(--black-600)] leading-6 hover:font-[600] pl-8 bg-[var(--light)] p-6 font-[500] text-start w-full border-b border-[var(--black-100)]"
            >
              About Us
            </NavLink>
            <NavLink
              to="/faqs"
              onClick={handleOpenHamburger}
              className="text-[var(--black-600)] leading-6 hover:font-[600] pl-8 bg-[var(--light)] p-6 font-[500] text-start w-full border-b border-[var(--black-100)]"
            >
              FAQs
            </NavLink>
            <NavLink
              to="/contact-us"
              onClick={handleOpenHamburger}
              className="text-[var(--black-600)] leading-6 hover:font-[600] pl-8 bg-[var(--light)] p-6 font-[500] text-start w-full border-b border-[var(--black-100)]"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
