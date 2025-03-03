"use client";
import { Product } from "../product/Product";
import { ProductStack } from "@/const/productstack/ProductStack";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./ProductList.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { client } from "@/libs/client";

interface Eyecatch {
    url: string;
    width: number;
    height: number;
}
interface FillterdBlog {
    eyecatch: Eyecatch;
    title: string;
    tag: string;
    description: string;
}
interface Blog {
    imgUrl: string;
    title: string;
    tag: "ハッカソン" | "個人開発" | "演習";
    explanation: string;
}
export const ProductList = () => {
    const [blogs, setBlogs] = useState<Blog[]>();
    useEffect(() => {
        const getPosts = async () => {
            const blog = await client.get({ endpoint: "blogs" });
            const filterdBlog: Blog[] = blog.contents.map(
                ({ eyecatch, title, tag, description }: FillterdBlog) => ({
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
