import { MuiAccordion, MuiAccordionSummary, MuiAccordionDetails } from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type PropTypes = {
	mobileContent: {
		id: number;
		title: string;
		items: Array<{
			id: number;
			name: string;
		}>;
		email?: string | undefined;
	}[]
}
export const MobileAccordion = ({mobileContent}: PropTypes) => {
	return (
		<>
		{
			mobileContent.map(item => {
				return (
					<MuiAccordion key={item.id}>
						<MuiAccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`panel${item.id}a-content`}
							id={`panel${item.id}a-header`}>
							{item.title}
						</MuiAccordionSummary>
						<MuiAccordionDetails>
							{
								item.items.map(content => <div key={content.id}>{content.name}</div>)
							}
						</MuiAccordionDetails>
					</MuiAccordion>
				)
			})
		}
		</>
	)
}