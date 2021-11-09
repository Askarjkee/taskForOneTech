import { TitleContent, ContentWrapper } from './styles';
import { Card } from './Card';

type PropTypes = {
	title: string;
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

export const TabsContent = ({content, title}: PropTypes) => {
	return (
		<ContentWrapper>
			<TitleContent>{title}</TitleContent>
			<Card content={content} />
		</ContentWrapper>
	)
}