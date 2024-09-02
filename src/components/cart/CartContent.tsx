import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Heading24 from "../common/Heading24";
import CartCountBox from "./CartCountBox";
import Divider from "../common/Divider";

import { MdFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductsProps } from "../../utils/static-data/dummyProducts";
import { RootState } from "@/redux/store";

const CartContent = ({ content }: { content: ProductsProps }) => {
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const items = useSelector((state: RootState) => state.cart);
  console.log("items ", items);

  const productCounter = (status?: string) => {
    if (status) {
      setProductCount(
        status === "inc"
          ? productCount + 1
          : productCount === 0
          ? 0
          : productCount - 1
      );
      setIsAdded(false);
    }
  };

  const handleAddToCart = () => {
    const item = {
      id: content?.id,
      title: content?.title,
      price: content?.price,
      coverImg: content?.coverImg,
      quantity: productCount,
      description: content?.description,
    };
    dispatch(addToCart(item));

    setIsAdded(true);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  return (
    <div className="w-full md:w-[50%] p-0 md:p-5">
      <Heading24 title={content?.title} classes="font-[600]" />
      <p className="text-[20px] text-[var(--blue-700)] font-[600] mt-2">
        ${content?.price}
      </p>
      <p className="text-[var(--black-600)] mt-2">{content?.description}</p>

      <div className="flex items-center gap-3 mt-8">
        <CartCountBox
          value="-"
          status="dec"
          id={content?.id ?? ""}
          onClick={productCounter}
          classes="text-[20px] w-9 h-8"
        />
        <CartCountBox
          value={productCount}
          status="dec"
          id={content?.id ?? ""}
          onClick={productCounter}
          classes="text-[14px] w-9 h-8"
        />
        <CartCountBox
          value="+"
          status="inc"
          id={content?.id ?? ""}
          onClick={productCounter}
          classes="text-[20px] w-9 h-8"
        />
      </div>

      <button
        className={`w-full h-[48px] ${
          isAdded
            ? "bg-[var(--blue-100)]"
            : "bg-[var(--blue-700)] hover:bg-[var(--blue-800)] hover:scale-[1.01]"
        }  transition-all-150 border-none outline-none text-white mt-12 rounded-md text-[16px] flex items-center justify-center gap-3 mb-6`}
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        <IoCartOutline className="text-white text-[24px]" />
        ADD TO CART
      </button>

      {showTooltip && (
        <div className="absolute bottom-[100%] left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded">
          Item added to cart
        </div>
      )}

      <Divider />

      <div className="mt-8">
        <p className="text-[var(--black-600)]">
          <strong className="text-[var(--black-800)]">Category : </strong>
          test Camera category
        </p>
        <p className="text-[var(--black-600)] mt-4">
          <strong className="text-[var(--black-800)]">Brand : </strong>
          Test Brand
        </p>

        <div className="flex items-center gap-5 mt-5">
          <p className="font-bold">Share : </p>
          <MdFacebook className="text-[22px] cursor-pointer text-[var(--blue-700)]" />
          <FaSquareInstagram className="text-[18px] cursor-pointer text-[var(--blue-700)]" />
          <FaLinkedin className="text-[18px] cursor-pointer text-[var(--blue-700)]" />
          <BsTwitterX className="text-[18px] cursor-pointer text-[var(--blue-700)]" />
          <IoLogoWhatsapp className="text-[18px] cursor-pointer text-[var(--blue-700)]" />
        </div>
      </div>
    </div>
  );
};

export default CartContent;
