import { HomeProductProps } from "@/pages/home/Hero";
import { FaStar } from "react-icons/fa6";

const TopProductCommonBox = ({ product }: { product: HomeProductProps }) => {
  return (
    <div className="w-full sm:w-[60%] flex flex-col items-start">
      <div className="hidden sm:flex items-center gap-2 mb-2">
        <div className="w-6 h-6 bg-[var(--blue-700)] rounded-full flex items-center justify-center">
          <FaStar className="text-[18px] text-white" />
        </div>
        <p className="text-[var(--blue-700)] font-bold">
          Top products of the month
        </p>
      </div>
      <h1 className="hidden sm:block text-[35px] md:text-[55px] leading-14 md:leading-[70px] font-[600] text-start text-[var(--black-800)] mt-2 mb-4">
        {product?.title}
      </h1>
      <p className="text-[var(--black-600)] text-[16px] sm:text-[14px] text-start">
        {product?.description}
      </p>
      <button className="w-full sm:w-auto px-8 hover:bg-[var(--blue-800)] hover:scale-[1.01] h-[48px] bg-[var(--blue-700)] outline-none border-none rounded-md mt-8 text-white">
        Shop Now
      </button>
    </div>
  );
};

export default TopProductCommonBox;
