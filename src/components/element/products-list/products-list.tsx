import { fetchProducts } from "@/libs/products";

import { ProductListClient } from "./products-list-client";

export const ProductList = async () => {
  const { contents } = await fetchProducts({});
  return <ProductListClient products={contents} />;
};
