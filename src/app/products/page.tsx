import { Title } from "@/components/element/title/Title";
import { ProductList } from "@/components/element/productList/ProductList";

export default function Page() {
    return (
        <div>
            <Title text="Products" color="#8efe3f" />
            <div>
                <ProductList />
            </div>
        </div>
    );
}
