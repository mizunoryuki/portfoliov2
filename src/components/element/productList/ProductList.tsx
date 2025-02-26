import { Product } from "../product/Product";
import styles from "./ProductList.module.scss";
import { ProductStack } from "@/const/productstack/ProductStack";
export const ProductList = () => {
    return (
        <div className={styles.list}>
            {ProductStack.map((element, index) => {
                return <Product key={index} description={element} />;
            })}
        </div>
    );
};
