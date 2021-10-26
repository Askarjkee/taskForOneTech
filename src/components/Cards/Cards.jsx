
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination } from 'swiper';
import { Container } from '../../assets/globalStyles/styles';
import { MySwiper, Title, CardWrapper } from './styles';
import { CardItems } from '../Cards/CardItems';

SwiperCore.use([Pagination]);

export const Cards = () => {
    return (
        <CardWrapper>
            <Container>
                <Title>Forte карты</Title>
                <MySwiper
                    cssMode={true}
                    loop={true}
                    pagination={{ "clickable": true }} >
                    <SwiperSlide>
                        <CardItems/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardItems/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardItems/>
                    </SwiperSlide>
                </MySwiper>
            </Container>
        </CardWrapper>
    )
}