import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ProductsProps } from "../../utils/static-data/dummyProducts";
import { generateSlug } from "../../utils/generateSlug";

const ProductItem = ({ product }: { product: ProductsProps }) => {
  const navigate = useNavigate();
  console.log("product =>>> ", product);
  return (
    <div
      className="card max-w-full sm:max-w-[344px] h-auto overflow-hidden cursor-pointer hover:border hover:shadow-md transition-all-150 rounded-md hover:scale-105 hover:bg-white p-1 bg-white shadow"
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
      <div className="w-full max-h-[220px] aspect-square overflow-hidden rounded-md">
        <img
          src={product?.coverImg}
          className="w-full h-full object-cover hover:scale-110 transition-all-150"
          alt="products-img"
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
          <p className="text-[var(--black-600)] text-[14px]">4.8 (79)</p>{" "}
        </div>
        <div className="flex items-end gap-2 mt-2">
          <p className="text-[14px] font-[400] text-[var(--black-800)] stroke-current line-through">
            PKR 3999
          </p>
          <p className="font-[500] text-[var(--blue-700)]">PKR 2999</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
