"use client";
import { Product } from "../product/Product";
import { ProductStack } from "@/const/productstack/ProductStack";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export const ProductList = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
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
            modules={[Pagination]}
            className="mySwiper"
        >
            {ProductStack.map((element, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Product description={element} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
