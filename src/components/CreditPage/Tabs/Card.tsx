import { CardWrapper, CardTitleWrapper, CardTitle, CardContent, CardSubtitle, CardDescr, CardsWrapper } from './styles';

type PropTypes = {
	content: {
		id: number;
		title: string;
		sumTitle: string;
		sumValue: string;
		percentTitle: string;
		percentValue: string;
		timeTitle: string;
		timeValue: string;
		commissionTitle: string;
		commissionValue: string;
	}[]
}

export const Card = ({ content }: PropTypes) => {
	return (
		<CardsWrapper>
			{
				content.map(tab => {
					return (
						<CardWrapper key={tab.id}>
							<CardTitleWrapper>
								<CardTitle>{tab.title}</CardTitle>
							</CardTitleWrapper>
							<CardContent>
								<CardSubtitle>{tab.sumTitle}</CardSubtitle>
								<CardDescr>{tab.sumValue}</CardDescr>
								<CardSubtitle>{tab.percentTitle}</CardSubtitle>
								<CardDescr>{tab.percentValue}</CardDescr>
								<CardSubtitle>{tab.timeTitle}</CardSubtitle>
								<CardDescr>{tab.timeValue}</CardDescr>
								<CardSubtitle>{tab.commissionTitle}</CardSubtitle>
								<CardDescr>{tab.commissionValue}</CardDescr>
								<CardSubtitle>Комиссия за выдачу наличных:</CardSubtitle>
								<CardDescr>По <a href="credit">тарифам</a> платежных карточек для физических лиц</CardDescr>
							</CardContent>
						</CardWrapper>
					)
				})
			}
		</CardsWrapper>
	)
}