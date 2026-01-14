import { ProductsList } from "@/components/element/products-list/products-list";
import { Title } from "@/components/element/title/title";

export default function Page() {
  return (
    <div>
      <Title text="Products" color="var(--color-product-green)" />
      <div>
        <ProductsList />
      </div>
    </div>
  );
}
