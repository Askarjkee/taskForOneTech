import { RequirementsWrapper, Title, CardWrapper, Card, CardTitle, CardSubtitle } from './styles';
import { Container } from '../../../styles/container';
import { content } from './mock';

export const Requirements = () => {
	return (
		<RequirementsWrapper>
			<Container>
				<Title>{content.title}</Title>
				<CardWrapper>
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
			</Container>
		</RequirementsWrapper>
	)
}