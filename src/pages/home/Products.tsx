import { NavLink } from "react-router-dom";
import Heading24 from "../../components/common/Heading24";
import ProductItem from "../../components/home/ProductItem";
import { products } from "../../utils/static-data/dummyProducts";

const Products = () => {
  return (
    <div className="w-full py-16">
      <div className="container">
        <div className="flex items-center justify-between">
          <Heading24 title="Top Products" />
          <NavLink
            to="#"
            className="text-[var(--blue-700)] font-[500] transition-all-150 link-blue-border-animation"
          >
            View All
          </NavLink>
        </div>
        <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.length > 0 &&
            products
              ?.slice(0, 8)
              .map((product) => (
                <ProductItem key={product?.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
