"use client";
import { Product } from "../product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./ProductList.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import type { Description } from "@/types/products";

export const ProductListClient = ({ products }: { products: Description[] }) => {
    if (!products?.length) return null;

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                700: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            centeredSlides={true}
            modules={[Autoplay, Pagination]}
            className={`mySwiper ${styles.list}`}
        >
            {products.map((element, index) => (
                <SwiperSlide
                    key={index}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Product description={element} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
