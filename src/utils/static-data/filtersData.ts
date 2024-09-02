export interface SubFiltersProps {
  id: number;
  title: string;
  total: number;
}

export interface FilterDataProps {
  id: number;
  category: string;
  title: string;
  filters: SubFiltersProps[];
  min?: number;
  max?: number;
}

export const allFilters = [
  {
    id: 1,
    category: "laptop",
    title: "category",
    filters: [
      { id: 1, title: "Used", total: 233 },
      { id: 2, title: "New", total: 124 },
      { id: 3, title: "Refurbished", total: 14 },
    ],
  },
  {
    id: 2,
    category: "laptop",
    title: "Brands",
    filters: [
      {
        id: 1,
        title: "Hp",
        total: 79,
      },
      {
        id: 2,
        title: "Dell",
        total: 43,
      },
      {
        id: 3,
        title: "Lenevo",
        total: 44,
      },
      {
        id: 4,
        title: "Asus",
        total: 10,
      },
      {
        id: 5,
        title: "Microsoft",
        total: 4,
      },
      {
        id: 6,
        title: "Deli",
        total: 1,
      },
      {
        id: 7,
        title: "Acer",
        total: 4,
      },
    ],
  },
  {
    id: 3,
    title: "Generation",
    category: "laptop",
    filters: [
      { id: 1, title: "5th Generation", total: 8 },
      { id: 2, title: "6th Generation", total: 12 },
      { id: 3, title: "7th Generation", total: 10 },
      { id: 4, title: "8th Generation", total: 15 },
      { id: 5, title: "9th Generation", total: 9 },
      { id: 6, title: "10th Generation", total: 14 },
      { id: 7, title: "11th Generation", total: 11 },
      { id: 8, title: "12th Generation", total: 13 },
      { id: 9, title: "13th Generation", total: 7 },
      { id: 10, title: "14th Generation", total: 5 },
    ],
  },
  {
    id: 4,
    category: "laptop",
    title: "Core & Processor",
    filters: [
      { id: 1, title: "Core 2 Duo", total: 5 },
      { id: 2, title: "Core i3", total: 15 },
      { id: 3, title: "Core i5", total: 25 },
      { id: 4, title: "Core i7", total: 20 },
      { id: 5, title: "Core i9", total: 10 },
      { id: 6, title: "AMD Ryzen 5", total: 5 },
      { id: 7, title: "AMD Ryzen 7", total: 15 },
      { id: 8, title: "AMD Ryzen 9", total: 25 },
      { id: 9, title: "Intel Core i3", total: 2 },
      { id: 10, title: "Intel Core i5", total: 7 },
      { id: 11, title: "Intel Core i7", total: 7 },
      { id: 12, title: "Intel Core i9", total: 7 },
      { id: 13, title: "Ultra Core 5", total: 0 },
      { id: 14, title: "Ultra Core 7", total: 7 },
      { id: 15, title: "Ultra Core 9", total: 0 },
    ],
  },
  {
    id: 5,
    category: "laptop",
    title: "SSD",
    filters: [
      { id: 4, title: "None", total: 20 },
      { id: 5, title: "256 GB SSD", total: 10 },
      { id: 5, title: "512 GB SSD", total: 10 },
      { id: 5, title: "1 TB SSD", total: 1 },
    ],
  },
  {
    id: 6,
    category: "laptop",
    title: "Price",
    filters: [
      {
        id: 1,
        title: "Rs. 30,000 - 50,000",
        min: 30000,
        max: 50000,
        total: 20,
      },
      {
        id: 2,
        title: "Rs. 50,000 - 100,000",
        min: 50000,
        max: 100000,
        total: 20,
      },
      {
        id: 3,
        title: "Rs. 100,000 - 150,000",
        min: 100000,
        max: 150000,
        total: 20,
      },
      {
        id: 4,
        title: "Rs. 150,000 - 200,000",
        min: 150000,
        max: 200000,
        total: 20,
      },
      {
        id: 5,
        title: "Rs. 200,000 - 250,000",
        min: 200000,
        max: 250000,
        total: 20,
      },
      { id: 5, title: "250,000 +", min: 250000, max: 10000000, total: 20 },
    ],
  },
  {
    id: 7,
    category: "laptop",
    title: "RAM",
    filters: [
      { id: 1, title: "4 GB", total: 2 },
      { id: 2, title: "8 GB", total: 2 },
      { id: 3, title: "12 GB", total: 2 },
      { id: 4, title: "16 GB", total: 2 },
      { id: 5, title: "24 GB", total: 2 },
      { id: 5, title: "32 GB", total: 2 },
      { id: 5, title: "32 GB +", total: 2 },
    ],
  },
  {
    id: 8,
    category: "laptop",
    title: "Screen Size",
    filters: [
      { id: 1, title: "7-inch", total: 2 },
      { id: 2, title: "8-inch", total: 2 },
      { id: 3, title: "13-inch", total: 2 },
      { id: 4, title: "14-inch", total: 2 },
      { id: 5, title: "16-inch", total: 2 },
    ],
  },
  {
    id: 9,
    category: "laptop",
    title: "Warranty",
    filters: [
      { id: 1, title: "International", total: 2 },
      { id: 2, title: "1 Year Local", total: 2 },
      { id: 3, title: "2 Year Local", total: 2 },
    ],
  },
  {
    id: 10,
    category: "laptop",
    title: "Location",
    filters: [
      { id: 1, title: "Islamabad", total: 25 },
      { id: 2, title: "Lahore", total: 12 },
      { id: 3, title: "Rawalpindi", total: 45 },
      { id: 4, title: "Karachi", total: 2 },
      { id: 5, title: "Peshawar", total: 28 },
    ],
  },
  {
    id: 11,
    category: "phone",
    title: "category",
    filters: [
      { id: 1, title: "Used", total: 233 },
      { id: 2, title: "New", total: 124 },
      { id: 3, title: "Refurbished", total: 14 },
    ],
  },
  {
    id: 12,
    category: "phone",
    title: "Brands",
    filters: [
      { id: 1, title: "Apple", total: 5578 },
      { id: 2, title: "Samsung Mobile", total: 1533 },
      { id: 3, title: "Infinix", total: 877 },
      { id: 4, title: "Vivo", total: 611 },
      { id: 5, title: "Xiaomi", total: 606 },
      { id: 6, title: "One Plus", total: 555 },
      { id: 7, title: "OPPO", total: 458 },
      { id: 8, title: "Tecno", total: 383 },
      { id: 9, title: "Google", total: 324 },
      { id: 10, title: "Other Mobiles", total: 282 },
      { id: 11, title: "Huawei", total: 242 },
      { id: 12, title: "Realme", total: 209 },
      { id: 13, title: "Nokia", total: 116 },
      { id: 14, title: "LG", total: 106 },
      { id: 15, title: "Sony", total: 91 },
      { id: 16, title: "Itel", total: 70 },
      { id: 17, title: "Motorola", total: 68 },
      { id: 18, title: "Honor", total: 29 },
      { id: 19, title: "QMobile", total: 20 },
      { id: 20, title: "Calme", total: 17 },
    ],
  },
  {
    id: 13,
    category: "phone",
    title: "Price",
    filters: [
      {
        id: 1,
        title: "Rs. 10,000 - 30,000",
        min: 10000,
        max: 30000,
        total: 20,
      },
      {
        id: 2,
        title: "Rs. 30,000 - 60,000",
        min: 30000,
        max: 60000,
        total: 20,
      },
      {
        id: 3,
        title: "Rs. 60,000 - 100,000",
        min: 60000,
        max: 100000,
        total: 20,
      },
      {
        id: 4,
        title: "Rs. 100,000 - 150,000",
        min: 100000,
        max: 150000,
        total: 20,
      },
      {
        id: 5,
        title: "Rs. 150,000 - 250,000",
        min: 150000,
        max: 250000,
        total: 20,
      },
      { id: 5, title: "250,000 +", min: 250000, max: 10000000, total: 20 },
    ],
  },
  {
    id: 14,
    category: "phone",
    title: "Location",
    filters: [
      { id: 1, title: "Islamabad", total: 25 },
      { id: 2, title: "Lahore", total: 12 },
      { id: 3, title: "Rawalpindi", total: 45 },
      { id: 4, title: "Karachi", total: 2 },
      { id: 5, title: "Peshawar", total: 28 },
    ],
  },
  {
    id: 15,
    category: "watch",
    title: "Brands",
    filters: [
      { id: 1, title: "Apple", total: 5578 },
      { id: 2, title: "Samsung Mobile", total: 1533 },
      { id: 3, title: "Infinix", total: 877 },
      { id: 4, title: "Vivo", total: 611 },
      { id: 5, title: "Xiaomi", total: 606 },
    ],
  },
  {
    id: 16,
    category: "watch",
    title: "Price",
    filters: [
      {
        id: 1,
        title: "Rs. 10,000 - 30,000",
        min: 10000,
        max: 30000,
        total: 20,
      },
      {
        id: 2,
        title: "Rs. 30,000 - 60,000",
        min: 30000,
        max: 60000,
        total: 20,
      },
      {
        id: 3,
        title: "Rs. 60,000 - 100,000",
        min: 60000,
        max: 100000,
        total: 20,
      },
      {
        id: 4,
        title: "Rs. 100,000 - 150,000",
        min: 100000,
        max: 150000,
        total: 20,
      },
      {
        id: 5,
        title: "Rs. 150,000 - 250,000",
        min: 150000,
        max: 250000,
        total: 20,
      },
      { id: 5, title: "250,000 +", min: 250000, max: 10000000, total: 20 },
    ],
  },
  {
    id: 17,
    category: "watch",
    title: "Location",
    filters: [
      { id: 1, title: "Islamabad", total: 25 },
      { id: 2, title: "Lahore", total: 12 },
      { id: 3, title: "Rawalpindi", total: 45 },
      { id: 4, title: "Karachi", total: 2 },
      { id: 5, title: "Peshawar", total: 28 },
    ],
  },
];
