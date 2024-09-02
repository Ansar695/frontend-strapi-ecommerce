import { useState } from "react";
import ThreeDPreview from "./ThreeDPreview";
import { TbView360Number } from "react-icons/tb";

const CartImages = ({ images }: { images: string[] }) => {
  const [activeImg, setActiveImg] = useState(1);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleActiveImg = (active: number) => {
    setActiveImg(active);
  };

  return (
    <>
      <ThreeDPreview
        open={open}
        handleOpen={handleOpen}
        activeImg={images[activeImg]}
      />
      <div className="w-full md:w-[50%] h-auto">
        <div className="w-full aspect-[1.2] bg-[var(--blue-50)] overflow-hidden relative">
          <div
            className="absolute bottom-0 right-0 w-16 h-9 rounded-tl-sm flex items-center justify-center cursor-pointer bg-black opacity-50 z-30"
            onClick={handleOpen}
          >
            <TbView360Number className="w-8 h-8 text-white" />
          </div>
          <img
            src={images[activeImg]}
            className="w-full h-full object-contain hover:scale-110 transition-all-150"
            alt="product-cart-img"
          />
        </div>
        <div className="w-full grid grid-cols-4 items-center gap-3 mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full aspect-[1.2] border border-[var(--black-100)] hover:shadow-md transition-all-150 overflow-hidden cursor-pointer"
              onClick={() => handleActiveImg(index)}
            >
              <img
                src={image}
                className="w-full aspect-[1.2] object-cover hover:scale110"
                alt="slide-img"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartImages;
