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
                slidesPerView={2}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    }
                }}
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
