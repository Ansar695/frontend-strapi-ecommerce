import phone10 from "@/assets/images/phones/phone1.webp";
import phone11 from "@/assets/images/phones/phone2.webp";
import phone12 from "@/assets/images/phones/phone3.webp";
import phone13 from "@/assets/images/phones/phone4.webp";
import phone14 from "@/assets/images/phones/phone5.webp";
import phone15 from "@/assets/images/phones/phone6.webp";
import phone16 from "@/assets/images/phones/phone7.webp";
import phone17 from "@/assets/images/phones/phone8.webp";
import phone18 from "@/assets/images/phones/phone9.webp";
import phone19 from "@/assets/images/phones/phone10.webp";

import laptop1 from "@/assets/images/laptops/laptop1.jpg";
import laptop2 from "@/assets/images/laptops/laptop4.jpg";
import laptop3 from "@/assets/images/laptops/laptop5.jpg";
import laptop4 from "@/assets/images/laptops/laptop6.jpg";
import laptop5 from "@/assets/images/laptops/laptop7.jpg";
import laptop6 from "@/assets/images/laptops/laptop8.png";
import laptop7 from "@/assets/images/laptops/laptop9.png";
import laptop8 from "@/assets/images/laptops/laptop10.png";
import laptop9 from "@/assets/images/laptops/laptop11.webp";
import laptop10 from "@/assets/images/laptops/laptop17.jpg";
import laptop11 from "@/assets/images/laptops/laptop18.jpg";
import laptop12 from "@/assets/images/laptops/laptop19.jpg";

import watch1 from "@/assets/images/watches/watch1.png";
import watch2 from "@/assets/images/watches/watch2.png";
import watch3 from "@/assets/images/watches/watch3.png";
import watch4 from "@/assets/images/watches/watch4.jpg";
import watch5 from "@/assets/images/watches/watch5.jpg";
import watch6 from "@/assets/images/watches/watch6.jpg";
import watch7 from "@/assets/images/watches/watch7.jpg";
import watch8 from "@/assets/images/watches/watch8.jpg";
import watch9 from "@/assets/images/watches/watch9.webp";
import watch10 from "@/assets/images/watches/watch10.webp";
import watch11 from "@/assets/images/watches/watch11.webp";
import watch12 from "@/assets/images/watches/watch12.webp";
import watch13 from "@/assets/images/watches/watch13.webp";
import watch14 from "@/assets/images/watches/watch14.webp";
import watch15 from "@/assets/images/watches/watch15.jpg";

export interface ProductsProps {
  id: number | string;
  title: string;
  coverImg?: string;
  images?: string[];
  price: number;
  description: string;
  category: string;
  subCategory?: string;
  discount?: string;
}

export const products = [
  {
    id: 1,
    title: "Galaxy S21 Ultra - Black",
    coverImg: laptop10,
    images: [laptop10, laptop11, laptop12, laptop9],
    price: 1200,
    category: "laptop",
    subCategory: "dell",
    description:
      "The Samsung Galaxy S21 Ultra features a stunning 108MP camera, powerful performance, and an immersive display.",
  },
  {
    id: 2,
    title: "iPhone 13 Pro Max - Silver",
    discount: "20%",
    coverImg: laptop11,
    images: [laptop8, laptop9, laptop10, laptop12],
    price: 1300,
    category: "laptop",
    subCategory: "Hp",
    description:
      "Apple iPhone 13 Pro Max offers a beautiful Super Retina XDR display, A15 Bionic chip, and impressive camera system.",
  },
  {
    id: 3,
    title: "Pixel 6 Pro - Sorta Sunny",
    coverImg: laptop12,
    images: [laptop8, laptop7, laptop12, laptop5],
    price: 900,
    category: "laptop",
    subCategory: "lenevo",
    description:
      "Google Pixel 6 Pro delivers a smooth experience with its Tensor chip, stunning camera features, and Android 12.",
  },
  {
    id: 4,
    title: "Dell XPS 13 - 2021",
    coverImg: laptop1,
    images: [laptop2, laptop3, laptop4, laptop5],
    price: 1500,
    category: "laptop",
    subCategory: "dell",
    discount: "12%",
    description:
      "Dell XPS 13 offers a sleek design with a powerful Intel i7 processor, 16GB RAM, and a beautiful 4K display.",
  },
  {
    id: 5,
    title: "MacBook Air M2 - Space Gray",
    coverImg: laptop6,
    images: [laptop7, laptop8, laptop9, laptop1],
    price: 1300,
    category: "laptop",
    subCategory: "apple",
    description:
      "Apple MacBook Air with M2 chip combines performance with portability, featuring a high-resolution Retina display.",
  },
  {
    id: 6,
    title: "HP Spectre x360 - Nightfall Black",
    coverImg: laptop2,
    images: [laptop3, laptop4, laptop5, laptop6],
    price: 1400,
    discount: "10%",
    category: "laptop",
    subCategory: "hp",
    description:
      "HP Spectre x360 provides a flexible 2-in-1 design, Intel i7 processor, and a vivid 13.5-inch OLED touchscreen.",
  },
  {
    id: 7,
    title: "Lenovo ThinkPad X1 Carbon - Gen 9",
    coverImg: laptop3,
    images: [laptop4, laptop5, laptop6, laptop7],
    price: 1600,
    category: "laptop",
    subCategory: "lenovo",
    description:
      "Lenovo ThinkPad X1 Carbon offers durability, performance, and a high-resolution display, perfect for business use.",
  },
  {
    id: 8,
    title: "Asus ROG Zephyrus G14 - Eclipse Gray",
    coverImg: laptop4,
    images: [laptop5, laptop6, laptop7, laptop8],
    price: 1700,
    category: "laptop",
    subCategory: "asus",
    description:
      "Asus ROG Zephyrus G14 provides powerful gaming performance with an AMD Ryzen 9 processor and NVIDIA GeForce GPU.",
  },
  {
    id: 9,
    title: "Acer Swift 3 - Silver",
    coverImg: laptop5,
    images: [laptop6, laptop7, laptop8, laptop9],
    price: 800,
    category: "laptop",
    subCategory: "acer",
    description:
      "Acer Swift 3 is an affordable and lightweight laptop with a solid performance for everyday tasks and portability.",
  },
  {
    id: 10,
    title: "Phone Model 1",
    coverImg: phone10,
    images: [phone10, phone11, phone12, phone13],
    price: 699,
    category: "phone",
    subCategory: "apple",
    description: "The latest Phone Model 1 with top features and sleek design.",
  },
  {
    id: 11,
    title: "Phone Model 2",
    coverImg: phone11,
    images: [phone11, phone12, phone13, phone14],
    price: 799,
    category: "phone",
    subCategory: "apple",
    description:
      "Phone Model 2 offers an advanced camera system and high performance.",
  },
  {
    id: 12,
    title: "Phone Model 3",
    coverImg: phone12,
    images: [phone12, phone13, phone14, phone15],
    price: 899,
    category: "phone",
    subCategory: "apple",
    description: "Experience cutting-edge technology with Phone Model 3.",
  },
  {
    id: 13,
    title: "Phone Model 4",
    coverImg: phone13,
    images: [phone13, phone14, phone15, phone16],
    price: 999,
    category: "phone",
    subCategory: "model4",
    description:
      "Phone Model 4 combines style and functionality with excellent battery life.",
  },
  {
    id: 14,
    title: "Phone Model 5",
    coverImg: phone14,
    images: [phone14, phone15, phone16, phone17],
    price: 1099,
    category: "phone",
    subCategory: "samsung",
    description:
      "Phone Model 5 is designed for those who demand the best performance.",
  },
  {
    id: 15,
    title: "Phone Model 6",
    coverImg: phone15,
    images: [phone15, phone16, phone17, phone18],
    price: 1199,
    category: "phone",
    subCategory: "Infinix",
    description:
      "Discover the future with Phone Model 6's innovative features.",
  },
  {
    id: 16,
    title: "Phone Model 7",
    coverImg: phone16,
    images: [phone16, phone17, phone18, phone19],
    price: 1299,
    category: "phone",
    subCategory: "Infinix",
    description:
      "Phone Model 7 offers unparalleled performance and premium build quality.",
  },
  {
    id: 17,
    title: "Phone Model 8",
    coverImg: phone17,
    images: [phone17, phone18, phone19, phone10],
    price: 1399,
    category: "phone",
    subCategory: "Infinix",
    description:
      "Phone Model 8 combines elegance with cutting-edge technology.",
  },
  {
    id: 18,
    title: "Phone Model 9",
    coverImg: phone18,
    images: [phone18, phone19, phone10, phone11],
    price: 1499,
    category: "phone",
    subCategory: "Infinix",
    description: "Experience the ultimate performance with Phone Model 9.",
  },
  {
    id: 19,
    title: "Phone Model 10",
    coverImg: phone19,
    images: [phone19, phone10, phone11, phone12],
    price: 1599,
    category: "phone",
    subCategory: "Infinix",
    description:
      "Phone Model 10 offers a premium experience with the latest technology.",
  },
  {
    id: 20,
    title: "Classic Silver Watch",
    coverImg: watch1,
    images: [watch1, watch2, watch3, watch4],
    price: 299,
    category: "watch",
    subCategory: "classic",
    description:
      "A timeless silver watch with a sophisticated design, perfect for formal occasions.",
  },
  {
    id: 21,
    title: "Sporty Digital Watch",
    coverImg: watch5,
    images: [watch5, watch6, watch7, watch8],
    price: 129,
    category: "watch",
    subCategory: "sporty",
    description:
      "A durable digital watch with various sports modes and features to keep you on track.",
  },
  {
    id: 22,
    title: "Elegant Rose Gold Watch",
    coverImg: watch9,
    images: [watch9, watch10, watch11, watch12],
    price: 349,
    category: "watch",
    subCategory: "elegant",
    description:
      "An elegant rose gold watch with a sleek design, perfect for both day and night wear.",
  },
  {
    id: 23,
    title: "Modern Black Watch",
    coverImg: watch13,
    images: [watch13, watch14, watch15, watch1],
    price: 199,
    category: "watch",
    subCategory: "modern",
    description:
      "A modern black watch featuring a minimalist design and high-quality craftsmanship.",
  },
  {
    id: 24,
    title: "Vintage Leather Watch",
    coverImg: watch2,
    images: [watch2, watch3, watch4, watch5],
    price: 259,
    category: "watch",
    subCategory: "vintage",
    description:
      "A vintage-inspired watch with a genuine leather strap and classic dial design.",
  },
  {
    id: 25,
    title: "Smart Watch Pro",
    coverImg: watch6,
    images: [watch6, watch7, watch8, watch9],
    price: 399,
    category: "watch",
    subCategory: "smart",
    description:
      "A feature-packed smart watch with health tracking, notifications, and more.",
  },
  {
    id: 26,
    title: "Luxury Gold Watch",
    coverImg: watch10,
    images: [watch10, watch11, watch12, watch13],
    price: 599,
    category: "watch",
    subCategory: "luxury",
    description:
      "A luxurious gold watch with an intricate design and premium materials.",
  },
  {
    id: 27,
    title: "Diving Watch",
    coverImg: watch14,
    images: [watch14, watch15, watch1, watch2],
    price: 249,
    category: "watch",
    subCategory: "diving",
    description:
      "A robust diving watch with water resistance and a durable design for underwater adventures.",
  },
  {
    id: 28,
    title: "Minimalist White Watch",
    coverImg: watch3,
    images: [watch3, watch4, watch5, watch6],
    price: 179,
    category: "watch",
    subCategory: "minimalist",
    description:
      "A sleek white watch with a minimalist design, ideal for casual and formal wear.",
  },
  {
    id: 29,
    title: "Chronograph Watch",
    coverImg: watch7,
    images: [watch7, watch8, watch9, watch10],
    price: 329,
    category: "watch",
    subCategory: "chronograph",
    description:
      "A chronograph watch with multiple dials and precise timekeeping features.",
  },
  {
    id: 30,
    title: "Fashion Watch",
    coverImg: watch8,
    images: [watch8, watch9, watch10, watch11],
    price: 149,
    category: "watch",
    subCategory: "fashion",
    description:
      "A trendy fashion watch designed to complement your style and make a statement.",
  },
  {
    id: 31,
    title: "Retro Digital Watch",
    coverImg: watch11,
    images: [watch11, watch12, watch13, watch14],
    price: 99,
    category: "watch",
    subCategory: "retro",
    description:
      "A retro digital watch with a nostalgic design and modern features.",
  },
  {
    id: 32,
    title: "Elegant Bracelet Watch",
    coverImg: watch12,
    images: [watch12, watch13, watch14, watch15],
    price: 239,
    category: "watch",
    subCategory: "bracelet",
    description:
      "An elegant bracelet watch with a stylish design and fine detailing.",
  },
  {
    id: 33,
    title: "Adventure Watch",
    coverImg: watch15,
    images: [watch15, watch1, watch2, watch3],
    price: 279,
    category: "watch",
    subCategory: "adventure",
    description:
      "A rugged adventure watch designed for outdoor activities and extreme conditions.",
  },
  {
    id: 34,
    title: "Smart Fitness Watch",
    coverImg: watch4,
    images: [watch4, watch5, watch6, watch7],
    price: 149,
    category: "watch",
    subCategory: "fitness",
    description:
      "A smart fitness watch with health tracking, exercise modes, and connectivity features.",
  },
  {
    id: 35,
    title: "Luxury Silver Watch",
    coverImg: watch5,
    images: [watch5, watch6, watch7, watch8],
    price: 349,
    category: "watch",
    subCategory: "luxury",
    description:
      "A luxury silver watch with exquisite detailing and a sophisticated design.",
  },
];
