import { fetchProducts } from "@/libs/products";

import { ProductsListClient } from "./products-list-client";

export const ProductsList = async () => {
  const { contents } = await fetchProducts({});
  return <ProductsListClient products={contents} />;
};
