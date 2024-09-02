import Heading24 from "../../components/common/Heading24";

import ScrollContainer from "react-indiana-drag-scroll";

import img1 from "../../assets/categories/laptop.png";
import img2 from "../../assets/categories/phone.png";
import img3 from "../../assets/categories/watch.png";
import img4 from "../../assets/categories/camera.png";
import img5 from "../../assets/categories/headphones.png";
import img6 from "../../assets/categories/videogame.png";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Laptop",
    img: img1,
    link: "/products/laptops",
  },
  {
    id: 2,
    title: "Phone",
    img: img2,
    link: "/products/phones",
  },
  {
    id: 3,
    title: "Watch",
    img: img3,
    link: "/products/watches",
  },
  {
    id: 4,
    title: "Camera",
    img: img4,
    link: "/products/cameras",
  },
  {
    id: 5,
    title: "Head Phone",
    img: img5,
    link: "/products/head-phones",
  },
  {
    id: 6,
    title: "Game",
    img: img6,
    link: "/products/games",
  },
];

const TopCategories = () => {
  const navigate = useNavigate();
  return (
    <div className="py-16">
      <Heading24 title="Top Categories" />
      <ScrollContainer className="scroll-container">
        <div className="mt-4 flex items-center gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="min-w-[140px] w-[140px] h-[140px] p-3 cursor-pointer rounded-sm border border-[var(--black-100)] hover:shadow-md hover:border-2 hover:border-[var(--blue-700)] transition-all duration-150 ease-linear flex items-center justify-center gap-2 flex-col"
              onClick={() => {
                navigate(category.link, {
                  state: { category: category.title },
                });
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                src={category.img}
                className="w-full h-[80%] object-contain"
                alt=""
              />
              <p className="text-[var(--black-600)] font-bold">
                {category.title}
              </p>
            </div>
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default TopCategories;
