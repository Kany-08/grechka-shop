import type { ProductInfo } from "../../model/product";
import { Product } from "../Product/Product";
import S from "./ProductList.module.css";

export function ProductList({ products }: { products: ProductInfo[] }) {
  return (
    <div className={S.container}>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
}
