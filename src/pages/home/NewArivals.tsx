import Heading24 from "../../components/common/Heading24";
import img from "../../assets/images/iphones.png";
import mouseImg from "../../assets/images/Mouse.png";
import LatestSideItem from "../../components/home/LatestSideItem";

export interface SideProductsImgProps {
  id: number;
  title: string;
  ratings: number;
  img: string;
  price: number;
}

const productsImgs = [
  {
    id: 1,
    title: "Head Phones",
    ratings: 5,
    img: mouseImg,
    price: 40,
  },
  {
    id: 2,
    title: "Head Phones",
    ratings: 5,
    img: mouseImg,
    price: 40,
  },
  {
    id: 3,
    title: "Head Phones",
    ratings: 5,
    img: mouseImg,
    price: 40,
  },
];

const NewArivals = () => {
  return (
    <div className="w-full py-16 bg-[var(--light)]">
      <div className="container">
        <Heading24 title="Newely Launched" />
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-[50%] bg-[var(--blue-50)] p-6 pb-0 rounded-md">
            <p className="text-[22px] text-[var(--black-600)] font-[500]">
              New I Phone 15 Pro Max
            </p>
            <button className="px-5 hover:bg-[var(--blue-800)] hover:scale-[1.01] h-[44px] bg-[var(--blue-700)] outline-none border-none rounded-md mt-4 text-white">
              Shop Now
            </button>
            <div className="w-full h-auto object-contain">
              <img
                src={img}
                className="w-full h-full aspect-[1.2] object-contain"
                alt="new-product-icon"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] md:px-6">
            {productsImgs?.map((product) => (
              <LatestSideItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArivals;
