import { useLocation } from "react-router-dom";
import CartContent from "../../components/cart/CartContent";
import CartImages from "../../components/cart/CartImages";
import RelatedProducts from "./RelatedProducts";
import { useState } from "react";
import Description from "@/components/cart/Description";
import Reviews from "@/components/cart/Reviews";
import Footer from "@/components/footer/Footer";

const Cart = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(1);
  const state = location.state || {};
  console.log("product is ", state?.product);
  return (
    <div className="w-full bg-[var(--light2)]">
      <div className="container overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10 py-10">
          <CartImages images={state?.product?.images} />
          <CartContent content={state.product} />
        </div>
        <div className=" tabs w-full border-b border-[var(--blue-700)] flex gap-2 clear-startbg-white mt-6">
          <button
            className={`outline-none ${
              activeTab === 1
                ? "bg-[var(--blue-700)] text-white"
                : "bg-transparent"
            } py-2 px-8 transition-all-150 border border-b-0 rounded-tl-md rounded-tr-md`}
            onClick={() => setActiveTab(1)}
          >
            Description
          </button>
          <button
            className={`outline-none ${
              activeTab === 2
                ? "bg-[var(--blue-700)] text-white"
                : "bg-transparent"
            } py-2 px-8 transition-all-150 border border-b-0 rounded-tl-md rounded-tr-md`}
            onClick={() => setActiveTab(2)}
          >
            Reviews
          </button>
        </div>
        {activeTab === 1 && <Description />}
        {activeTab === 2 && <Reviews />}
      </div>
      <div className="w-full py-16 bg-[var(--light)]">
        <div className="container">
          <RelatedProducts category={state?.product?.category} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
