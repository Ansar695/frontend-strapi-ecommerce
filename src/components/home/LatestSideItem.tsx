import { FaStar } from "react-icons/fa6";
import { SideProductsImgProps } from "../../pages/home/NewArivals";

interface LatestSideItemProps {
  product: SideProductsImgProps;
}

const LatestSideItem = (props: LatestSideItemProps) => {
  const { product } = props;
  return (
    <div className="group bg-white w-full border border-[var(--black-100)] rounded-md p-3 flex items-center gap-5 mb-5 cursor-pointer hover:shadow-md transition-all-150">
      <div className="w-[120px] h-[120px] bg-[var(--blue-50)] overflow-hidden">
        <img
          src={product.img}
          className="w-full h-full object-cover group-hover:scale-110 transition-all-150"
          alt="product-side-img"
        />
      </div>
      <div className="content">
        <p className="text-[var(--black-600)] group-hover:font-bold transition-all-150">
          {product.title}
        </p>
        <div className="flex items-center gap-1 mt-2">
          <FaStar className="text-[var(--orange-400)]" />
          <FaStar className="text-[var(--orange-400)]" />
          <FaStar className="text-[var(--orange-400)]" />
          <FaStar className="text-[var(--orange-400)]" />
          <FaStar className="text-[var(--orange-400)]" />
        </div>
        <p className="text-[18px] font-bold text-[var(--black-800)] mt-2">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default LatestSideItem;
