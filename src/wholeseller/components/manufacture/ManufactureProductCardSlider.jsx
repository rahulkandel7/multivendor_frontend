import React from 'react';
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ManufactureProductCard from './ManufactureProductCard';


export default function ManufactureProductCardSlider() {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                modules={[Autoplay]}
            >

                <SwiperSlide>
                    <ManufactureProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <ManufactureProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <ManufactureProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <ManufactureProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <ManufactureProductCard />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
