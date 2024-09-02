import { FaStar } from "react-icons/fa6";
import TopProductCommonBox from "../../components/home/TopProductCommonBox";
import { swiperImages } from "./Hero";

const TopProductBanner = () => {
  return (
    <div className="py-16">
      <div className="container h-[450px] sm:h-[500px] bg-[var(--primary)] sm:rounded-md p-6 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between">
        <TopProductCommonBox product={swiperImages?.[2]} />
        <div className="w-full sm:w-[40%] flex items-center justify-center sm:gap-0 gap-1">
          <div className="block sm:hidden">
            <div className="flex items-center gap-2 mb-2">
              <div className="min-w-6 w-6 min-h-6 h-6 bg-[var(--blue-700)] rounded-full flex items-center justify-center">
                <FaStar className="text-[18px] text-white" />
              </div>
              <p className="text-[var(--blue-700)] text-start text-[12px] sm:text-[16px] font-bold">
                Top products of the month
              </p>
            </div>
            <h1 className="text-[20px] sm:text-[35px] md:text-[55px] leading-8 sm:leading-14 md:leading-[70px] font-[600] text-start text-[var(--black-800)] mt-2 mb-4">
              {swiperImages?.[2]?.title}
            </h1>
          </div>
          <img
            src={swiperImages?.[2].img}
            className="aspect-auto w-[50%] sm:w-auto h-[200px] sm:h-[500px] object-contain"
            alt="product-img"
          />
        </div>
      </div>
    </div>
  );
};

export default TopProductBanner;
