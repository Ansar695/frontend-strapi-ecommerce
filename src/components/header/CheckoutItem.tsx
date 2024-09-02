import { SlClose } from "react-icons/sl";
import CartCountBox from "../cart/CartCountBox";
import { IoMdClose } from "react-icons/io";
import { ProductsProps } from "@/utils/static-data/dummyProducts";

interface CheckoutItemProps {
  productCount: number;
  productCounter: (status: string | undefined, id: number | string) => void;
  removeItemFromCart: (id: string | number) => void;
  product?: ProductsProps;
}

const CheckoutItem = (props: CheckoutItemProps) => {
  const { productCount, productCounter, removeItemFromCart, product } = props;

  return (
    <div className="w-full flex items-center justify-between gap-4 px-6 py-3 border-b border-[var(--black-100)]">
      <div className="flex items-center gap-4">
        <div className="w-[60px] min-w-[60px] h-[60px] bg-[var(--blue-50)] rounded-sm">
          <img
            src={product?.coverImg}
            className="w-full h-full object-contain"
            alt="checkout-product-img"
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-[14px] font-bold text-[var(--black-600)] line-clamp-1">
            {product?.title}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <CartCountBox
              value="-"
              status="dec"
              id={product?.id ?? ""}
              onClick={productCounter}
              classes="text-[20px] w-7 h-6"
            />
            <CartCountBox
              value={productCount}
              status="count"
              id={product?.id ?? ""}
              onClick={() => console.log("clicked")}
              classes="text-[14px] w-7 h-6"
            />
            <CartCountBox
              value="+"
              status="inc"
              id={product?.id ?? ""}
              onClick={productCounter}
              classes="text-[20px] w-7 h-6"
            />
          </div>
          <div className="flex items-center gap-1 mt-2">
            <p className="text-[14px] text-[var(--black-600)]">
              {productCount}
            </p>
            <IoMdClose className="text-[var(--black-600)] text-[14px]" />
            <p className="text-[14px] text-[var(--black-600)]">
              ${product?.price}
            </p>
          </div>
        </div>
      </div>
      <SlClose
        className="text-[var(--black-600)] text-[18px] min-w-6 min-h-6 cursor-pointer"
        onClick={() => (product ? removeItemFromCart(product?.id) : null)}
      />
    </div>
  );
};

export default CheckoutItem;
