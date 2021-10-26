
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { MySwiper, SliderWrapper } from './Styles.js';
import { SliderItem } from './SliderItem';
import { SwiperSlide } from "swiper/react";
import backgroundImage from '../../assets/img/Slider/background1.jpg';

const content = [
    { id: 1, imgUrl: backgroundImage, subtitle: 'До 3 000 000 ₸', description: 'Покупки без процентов', btnInfo: 'Подробнее' },
    { id: 2, subtitle: 'До 4 000 000 ₸', description: 'lorem ipsum', btnInfo: 'Подробнее' },
    { id: 3, imgUrl: backgroundImage, subtitle: 'До 5 000 000 ₸', description: 'lorem ipsum', btnInfo: 'Подробнее' },
    { id: 4, subtitle: 'До 6 000 000 ₸', description: 'lorem ipsum', btnInfo: 'Подробнее' }
]

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
                                    imgUrl={slide.imgUrl}
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