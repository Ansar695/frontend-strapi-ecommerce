// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Scrollbar } from "swiper/modules";

import img1 from "../../assets/images/laptops/laptop-home.png";
import img2 from "../../assets/images/phones/home-phone.png";
import img3 from "../../assets/images/headphone_31.png";
import img4 from "../../assets/images/watches/watch-home.png";

import bgimg from "../../assets/images/Home_Main.jpg";
import TopProductCommonBox from "../../components/home/TopProductCommonBox";
import { FaStar } from "react-icons/fa6";

export interface HomeProductProps {
  id: number;
  title: string;
  description: string;
  img: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const swiperImages = [
  {
    id: 1,
    title: "HP 14 HD Laptop | New Model Launched",
    description:
      "HP 14 inch Laptop, HD Display, 12th Generation Intel Core i3-1215U, 8 GB RAM, 256 GB SSD, Intel UHD Graphics, Windows 11 Home in S Mode, 14-dq5009nr (2024)",
    img: img1,
  },
  {
    id: 2,
    title: "Moto G Play 2023 3-Day Battery Unlocked",
    description:
      '6.5" HD plus display. Bring your favorite content to life on a stunning ultra-wide screen. Up to three-day battery. Leave your power worries behind thanks to a massive 5000mAh battery.',
    img: img2,
  },
  {
    id: 3,
    title: "Micropack MHP Headphone Black",
    description:
      '6.5" HD plus display. Bring your favorite content to life on a stunning ultra-wide screen. Up to three-day battery. Leave your power worries behind thanks to a massive 5000mAh battery.',
    img: img3,
  },
  {
    id: 4,
    title: "Mavado Men's Quarts Swiss Watch",
    description:
      "Movado mens Quartz Swiss Made Stainless Steel Black Dial 28mm Watch 0606505. Movado mens Quartz Swiss Made Stainless Steel Black Dial 28mm Watch 0606505",
    img: img4,
  },
];

const Hero = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        // modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
      >
        {swiperImages?.map((img) => (
          <SwiperSlide key={img.id}>
            <div
              className="w-full h-[calc(100vh_-_70px)] sm:h-[calc(100vh_-_80px)] max-h-[650px] relative"
              style={{
                background: `url(${bgimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 bottom-0 z-0"
                style={{ background: "rgba(0,0,0,0.01)" }}
              ></div>
              <div className="container h-full flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-8 sm:gap-4 py-6 sm:py-0">
                <TopProductCommonBox product={img} />
                <div className="w-full sm:w-[40%] flex items-center justify-center sm:gap-0 gap-1">
                  <div className="block sm:hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="min-w-6 w-6 min-h-6 h-6 bg-[var(--blue-700)] rounded-full flex items-center justify-center">
                        <FaStar className="text-[18px] text-white" />
                      </div>
                      <p className="text-[var(--blue-700)] text-start text-[12px] sm:text-[16px] font-bold">
                        Top products of the month
                      </p>
                    </div>
                    <h1 className="text-[20px] sm:text-[35px] md:text-[55px] leading-8 sm:leading-14 md:leading-[70px] font-[600] text-start text-[var(--black-800)] mt-2 mb-4">
                      {img?.title}
                    </h1>
                  </div>
                  <img
                    src={img.img}
                    className="aspect-auto w-[50%] sm:w-auto h-[200px] sm:h-[500px] object-contain"
                    alt="product-img"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
