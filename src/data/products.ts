import type { ProductInfo } from "../model/product";

export const products: ProductInfo[] = [
  {
    id: 1,
    price: 2,
    sku: "grechka",
    productionDate: "01-01-2010",
    title: "Гречка",
    inStock: true,
  },

  {
    id: 2,
    price: 3,
    sku: "rice",
    productionDate: "01-01-2010",
    title: "Рис",
    inStock: true,
  },

  {
    id: 3,
    price: 4,
    sku: "pasta",
    productionDate: "01-01-2010",
    title: "Макароны",
    inStock: false,
  },
  {
    id: 4,
    price: 5,
    sku: "potato",
    productionDate: "01-01-2010",
    title: "Картошка",
    inStock: true,
  },
  {
    id: 5,
    price: 6,
    sku: "onion",
    productionDate: "01-01-2010",
    title: "Лук",
    inStock: true,
  },
];
