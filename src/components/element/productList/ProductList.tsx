import { fetchProducts } from "@/libs/products";
import { ProductListClient } from "./ProductListClient";

export const ProductList = async () => {
    const { contents } = await fetchProducts({});
    return <ProductListClient products={contents} />;
};
