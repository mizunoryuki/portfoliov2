import { ProductList } from "@/components/element/productList/ProductList";
import { Title } from "@/components/element/title/Title";

export default function Page() {
  return (
    <div>
      <Title text="Products" color="var(--color-product-green)" />
      <div>
        <ProductList />
      </div>
    </div>
  );
}
