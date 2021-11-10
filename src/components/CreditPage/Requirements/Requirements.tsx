import { RequirementsWrapper, Title, CardWrapper, Card, CardTitle, CardSubtitle, Swiper } from './styles';
import { Container } from '../../../styles/container';
import { useState } from 'react';
import { content } from './mock';
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

export const Requirements = () => {
	const [width] = useState(window.screen.width);

	return (
		<RequirementsWrapper>
			<Container>
				<Title>{content.title}</Title>
				{
					width > 575 ? <CardWrapper>
						{
							content.cards.map(card => {
								return (
									<Card key={card.id}>
										<CardTitle>{card.title}</CardTitle>
										<CardSubtitle>{card.subtitle}</CardSubtitle>
									</Card>
								)
							})
						}
					</CardWrapper>
						:
						<Swiper
							cssMode={true}
							loop={true}
							pagination={{ "clickable": true }}>
							{
								content.cards.map(card => {
									return (
										<SwiperSlide key={card.id}>
											<Card>
											<CardTitle>{card.title}</CardTitle>
											<CardSubtitle>{card.subtitle}</CardSubtitle>
											</Card>
										</SwiperSlide>
									)
								})
							}
						</Swiper>
				}
			</Container>
		</RequirementsWrapper>
	)
}