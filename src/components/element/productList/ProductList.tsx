"use client";
import { Product } from "../product/Product";
import { ProductStack } from "@/const/productstack/ProductStack";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./ProductList.module.scss";
import "swiper/css";
import "swiper/css/pagination";
export const ProductList = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            autoplay={{
                delay: 2500,
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
            {ProductStack.map((element, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Product description={element} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
