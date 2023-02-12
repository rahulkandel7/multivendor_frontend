import React from 'react';
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductViewCard from './ProductViewCard';


export default function ProductViewSlider() {
    return (
        <Swiper
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                }
            }}
        >

            {
                [...Array(10)].map((_) => {
                    return <SwiperSlide><ProductViewCard /></SwiperSlide>
                })
            }


        </Swiper>
    )
}
