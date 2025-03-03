"use client";
import { Product } from "../product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./ProductList.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { client } from "@/libs/client";
import { Description } from "@/types/products";

interface Eyecatch {
    url: string;
    width: number;
    height: number;
}
interface FillterdBlog {
    id: string;
    eyecatch: Eyecatch;
    title: string;
    tag: string;
    description: string;
}

export const ProductList = () => {
    const [blogs, setBlogs] = useState<Description[]>();
    useEffect(() => {
        const getPosts = async () => {
            const blog = await client.get({ endpoint: "blogs" });
            const filterdBlog: Description[] = blog.contents.map(
                ({ id, eyecatch, title, tag, description }: FillterdBlog) => ({
                    id,
                    imgUrl: eyecatch?.url,
                    title,
                    tag: tag?.[0],
                    explanation: description,
                })
            );
            setBlogs(filterdBlog);
        };
        getPosts();
    }, []);

    return blogs ? (
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
            {blogs &&
                blogs.map((element, index) => {
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
    ) : null;
};
