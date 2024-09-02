import Heading24 from "@/components/common/Heading24";
import ProductsSlider from "@/components/home/ProductsSlider";

const LatestProducts = () => {
  return (
    <div className="w-full py-16 bg-[var(--light)]">
      <div className="container bg-white sm:rounded-md p-6">
        <div className="flex items-center justify-between border-b border-[var(--black-100)] pb-2">
          <Heading24 title="Latest Products" />
        </div>
        <ProductsSlider />
      </div>
    </div>
  );
};

export default LatestProducts;
