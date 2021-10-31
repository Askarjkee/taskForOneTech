import { content } from './mock';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { MySwiper, SliderWrapper } from './styles';
import { SliderItem } from './SliderItem';
import { SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Slider = () => {
    return (
        <SliderWrapper>
            <MySwiper cssMode={true} loop={true} navigation={true} pagination={{ "clickable": true }}>
                {
                    content.map(slide => {
                        return (
                            <SwiperSlide key={slide.id}>
                                <SliderItem
                                    imgUrl={slide.imgUrl ? slide.imgUrl : null}
                                    subtitle={slide.subtitle}
                                    description={slide.description}
                                    btnInfo={slide.btnInfo} />
                            </SwiperSlide>
                        )
                    })
                }
            </MySwiper>
        </SliderWrapper>
    )
}