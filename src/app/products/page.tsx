import { Title } from "@/components/element/title/Title";
import { ProductList } from "@/components/element/productList/ProductList";

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
