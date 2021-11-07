import {useState, useEffect} from 'react'

import { SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination } from 'swiper';
import { Container } from '../../../styles/container';
import { MySwiper, Title, CardWrapper } from './styles';
import { CardItems } from './CardItems';
import { cardsContent, mobileContent } from './mock';

SwiperCore.use([Pagination]);

export const Cards = () => {
    const [cards, setCards] = useState(cardsContent);
    const width = window.screen.width;

    useEffect(() => {
        if (width < 575) {
            setCards(mobileContent)
        }
    }, [width])

    return (
        <CardWrapper>
            <Container>
                <Title>Forte карты</Title>
                <MySwiper
                    cssMode={true}
                    loop={true}
                    pagination={{ "clickable": true }} >
                    {
                        cards.map(card => {
                            return (
                                <SwiperSlide key={card.id}>
                                    <CardItems cards={card.items}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </MySwiper>
            </Container>
        </CardWrapper>
    )
}