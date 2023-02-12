import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function SlideShow(props) {
    return (
        <>
            <Swiper
                spaceBetween={50}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="w-[75vw] h-full rounded-md shadow-md"
            >

                <SwiperSlide>
                    <div className=" h-full">
                        <img src="./ads.jpeg" alt="" className=" h-full w-full" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" h-full">
                        <img src="./ads1.jpeg" alt="" className=" h-full w-full" />
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}

export default SlideShow;