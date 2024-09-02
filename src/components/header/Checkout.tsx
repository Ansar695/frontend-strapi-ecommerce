/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import CheckoutItem from "./CheckoutItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";

interface CheckoutDrawerProps {
  open: boolean;
  handleOpenDrawer: () => void;
}

const Checkout = (props: CheckoutDrawerProps) => {
  const dispatch = useDispatch();
  const { open, handleOpenDrawer } = props;
  const { items } = useSelector((state: RootState) => state.cart);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  console.log("items ", items);

  const [productCount, setProductCount] = useState<{ [key: string]: number }>(
    {}
  );

  console.log("product-count ", productCount);

  const productCounter = (status: string | undefined, id: string | number) => {
    console.log("status ", status);
    const currentCount = productCount[id] || 0;
    console.log("product-counter ", currentCount);
    const newCount =
      status === "inc" ? currentCount + 1 : Math.max(currentCount - 1, 0);

    console.log("new-count ", newCount);

    setProductCount((prevCounts) => {
      return { ...prevCounts, [id]: newCount };
    });

    const findItem = items.find((item) => item?.id === id);
    const item = {
      ...findItem,
      quantity: newCount,
    };
    console.log("udapted item ", item);
    dispatch(addToCart(item as any));
    console.log("productCount?.[id] ", productCount?.[id]);
    if (newCount === 0) {
      removeItemFromCart(id);
    }
  };

  const removeItemFromCart = (id: string | number) => {
    const sure = window.confirm("Are you sure you want to remove this item?");
    if (!sure) return;
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    // Initialize product counts based on items
    const initialCounts = items.reduce((acc, item) => {
      acc[item.id] = item.quantity || 0;
      return acc;
    }, {} as { [key: string]: number });
    setProductCount(initialCounts);

    let price = 0;
    items?.map((item) => {
      price += item.price * item.quantity;
    });

    setTotalPrice(price);
  }, [items]);

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
          open
            ? "left-0 md:left-[calc(100%_-_400px)] right-0"
            : "left-[105%] right-[-150px]"
        } z-40 h-screen overflow-y-auto bg-white transition-all-150`}
        aria-labelledby="drawer-right-label"
        style={{ boxShadow: "-1px 5px 10px rgba(0,0,0,0.5)" }}
      >
        <div
          className="w-full md:w-[400px] flex flex-col h-full bg-white float-end transition-all-150"
          style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.5)" }}
        >
          <div className="flex items-center justify-between p-6 border-b border-[var(--black-100)]">
            <p className="text-[18px] font-[500] text-[var(--black-600)]">
              Shopping Cart
            </p>
            <IoMdClose
              className="text-[var(--black-600)] text-[24px] cursor-pointer"
              onClick={handleOpenDrawer}
            />
          </div>
          <div className="h-[calc(100%_-_140px)] overflow-y-auto">
            {items?.length > 0 ? (
              items?.map((item) => (
                <CheckoutItem
                  key={item?.id}
                  product={item as any}
                  productCounter={productCounter}
                  productCount={productCount?.[item?.id]}
                  removeItemFromCart={removeItemFromCart}
                />
              ))
            ) : (
              <div className="px-5 py-4">Your cart is empty.</div>
            )}
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between px-6 pb-4 sm:pb-0">
            <div className="flex w-full sm:w-auto items-center gap-2">
              <p className="font-bold text-[var(--black-800)]">
                Total Amount :
              </p>
              <p className="text-[var(--blue-700)] text-[20px] font-bold">
                ${totalPrice}
              </p>
            </div>
            <button className="px-5 hover:bg-[var(--blue-800)] hover:scale-[1.01] w-full sm:w-auto h-[44px] bg-[var(--blue-700)] outline-none border-none rounded-md text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
