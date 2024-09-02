import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiSaveDown1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { popularVideos } from "@/libs/LearnSliderSettings";
import { products } from "@/utils/static-data/dummyProducts";
import { generateSlug } from "@/utils/generateSlug";

const ProductsSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-8 latest-products">
      <Slider {...popularVideos}>
        {products?.length > 0
          ? products?.map((product) => (
              <div key={product?.id} className="w-full pr-4">
                <div
                  className="latest-product-item h-auto flex flex-col gap-2 group border p-1 rounded-md"
                  onClick={() => {
                    navigate(`/cart/${generateSlug(product?.title)}`, {
                      state: { product },
                    });
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <div className="img w-full aspect-[1.25] max-h-[240px] overflow-hidden relative z-40 bg-red-100 rounded-md">
                    <div className="absolute right-0 top-[-50px] group-hover:top-0 pt-3 z-50 bg-transparent flex flex-col items-center gap-2 group-hover:bg-black group-hover:bg-opacity-55 rounded-bl-md opacity-0 group-hover:opacity-100 transition-all-300 w-12 h-auto pb-4 overflow-hidden">
                      <div className="w-8 min-w-8 h-8 min-h-8 flex items-center justify-center z-40 hover:bg-[var(--blue-700)] transition-all-150 group rounded-full border cursor-pointer p-1">
                        <CiHeart className="w-5 h-5 text-white hover:text-white" />
                      </div>
                      <div className="w-8 min-w-8 h-8 min-h-8 flex items-center justify-center z-40 hover:bg-[var(--blue-700)] transition-all-150 group rounded-full border cursor-pointer p-1">
                        <CiSaveDown1 className="w-5 h-5 text-white hover:text-white" />
                      </div>
                      <div className="w-8 min-w-8 h-8 min-h-8 flex items-center justify-center z-40 hover:bg-[var(--blue-700)] transition-all-150 group rounded-full border cursor-pointer p-1">
                        <IoCartOutline className="w-5 h-5 text-white hover:text-white" />
                      </div>
                    </div>
                    {product?.discount && (
                      <div className="absolute top-2 left-2">
                        <div className="px-2 py-1 text-center rounded-sm bg-[var(--blue-700)] text-white text-[14px]">
                          -{product?.discount}
                        </div>
                      </div>
                    )}
                    <img
                      src={product?.coverImg}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all-150 cursor-pointer"
                      alt="product-img"
                    />
                  </div>
                  <div className="content p-2">
                    <p className="text-[16px] font-[500] text-[var(--black-600)]">
                      Sub-Category
                    </p>
                    <p className="text-[16px] font-[500] text-[var(--black-800)] line-clamp-2 mt-1 ">
                      Product one short title
                    </p>
                    <div className="flex items-center gap-1  mt-2">
                      <FaStar className="text-[var(--orange-400)]" />
                      <p className="text-[var(--black-600)] text-[14px]">
                        4.8 (79)
                      </p>{" "}
                    </div>
                    <div className="flex items-end gap-2 mt-2">
                      <p className="text-[14px] font-[400] text-[var(--black-800)] stroke-current line-through">
                        PKR 3999
                      </p>
                      <p className="font-[500] text-[var(--blue-700)]">
                        PKR 2999
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
