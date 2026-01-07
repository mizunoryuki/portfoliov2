"use client";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { type ProductInfo } from "@/types/products";

import { ProductCard } from "../product/Product";
import styles from "./ProductList.module.scss";

export const ProductListClient = ({
  products,
}: {
  products: ProductInfo[];
}) => {
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
          <ProductCard product={element} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
