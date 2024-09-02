import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/common/BreddCrumb";
import { products, ProductsProps } from "../../utils/static-data/dummyProducts";
import ProductItem from "../../components/home/ProductItem";
// import useFetchProductsData from "@/hooks/useFetchData";
import ProductAccordion from "@/components/products/ProductAccordion";
import { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { MdSort } from "react-icons/md";
import Footer from "@/components/footer/Footer";

interface SelectedFilter {
  type: string;
  title: string;
}

const Products = () => {
  const location = useLocation();
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilter[]>([]);
  const [allProducts, setAllProducts] = useState<ProductsProps[]>([]);
  // const { data, loading, error } = useFetchProductsData(``);
  const state = location.state || {};
  console.log("state ", state);
  const handleCheckboxChange = (
    type: string,
    title: string,
    checked: boolean
  ) => {
    setSelectedFilters((prevSelectedFilters) =>
      checked
        ? [...prevSelectedFilters, { type, title }]
        : prevSelectedFilters.filter(
            (filter) => !(filter.type === type && filter.title === title)
          )
    );
  };

  useEffect(() => {
    const findProducts = products?.filter(
      (fil) => fil?.category?.toLowerCase() === state?.category?.toLowerCase()
    );
    setAllProducts(findProducts ?? []);
  }, [state.category]);
  return (
    <div className="w-full bg-[var(--light)]">
      <div className="container">
        <div className="px-4 lg:px-0">
          <Breadcrumb />
        </div>
        <div className="flex items-start gap-5 pb-16">
          <div
            className={`fixed lg:relative ${
              openFilter
                ? "top-0 left-0 right-0 bottom-0 w-full h-screen lg:h-full z-40 lg:z-10"
                : "top-0 left-[100%] lg:left-0 right-[-100%] lg:right-0 bottom-0"
            } overflow-auto lg:overflow-visible w-full lg:w-[25%] max-w-full lg:max-w-[250px] bg-white min-w-[250px] mt-3  rounded-md p-4 shadow-md transition-all-150`}
          >
            <div className="w-full overflow-hidden lg:hidden flex items-center justify-between gap-4 pb-4">
              <button
                className="outline-none border border-[var(--blue-700)] text-white font-[500] bg-[var(--blue-700)] hover:bg-[var(--blue-800)] py-2 px-4 rounded-md w-[50%] text-center flex items-center justify-center gap-2"
                onClick={() => setOpenFilter(false)}
              >
                Apply
              </button>
              <button
                className="outline-none border border-[var(--black-100)] text-[var(--black-600)] font-[500] bg-white py-2 px-4 rounded-md w-[50%] text-center flex items-center justify-center gap-2"
                onClick={() => setOpenFilter(false)}
              >
                Cancel
              </button>
            </div>
            <ProductAccordion
              handleCheckboxChange={handleCheckboxChange}
              selectedFilters={selectedFilters}
              filterType={state?.category}
            />
          </div>
          <div className="right w-full lg:w-[75%] mt-4">
            <div className="flex lg:hidden items-start justify-between sm:justify-end mb-6 sm:gap-6 gap-2">
              <button
                className="outline-none border border-[var(--black-100)] text-[var(--black-600)] font-[500] bg-white py-2 px-6 rounded-md w-[50%] max-w-[200px] text-center flex items-center justify-between gap-2"
                onClick={() => setOpenFilter(true)}
              >
                Filters
                <IoFilterSharp className="text-[var(--black-600)] text-[18px]" />
              </button>
              <button className="outline-none border border-[var(--black-100)] text-[var(--black-600)] font-[500] bg-white py-2 px-6 rounded-md w-[50%] max-w-[200px] text-center flex items-center justify-between gap-2">
                Sort:
                <MdSort className="text-[var(--black-600)] text-[18px]" />
              </button>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {allProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
