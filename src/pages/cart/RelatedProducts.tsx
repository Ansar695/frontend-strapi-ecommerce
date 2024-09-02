import Heading24 from "../../components/common/Heading24";
import ProductItem from "../../components/home/ProductItem";
import { products, ProductsProps } from "../../utils/static-data/dummyProducts";
import { useEffect, useState } from "react";

const RelatedProducts = ({ category }: { category: string }) => {
  const [relatedProducts, setRelatedProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    const findProducts = products?.filter(
      (fil) => fil?.category?.toLowerCase() === category?.toLowerCase()
    );
    setRelatedProducts(findProducts ?? []);
  }, [category]);

  return (
    <div className="w-full">
      <Heading24 title="Related Products" />
      <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {relatedProducts?.slice(0, 4)?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
