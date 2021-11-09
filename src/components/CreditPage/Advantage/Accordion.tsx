import { AccordionTittle, MuiAccordion, MuiAccordionSummary, MuiAccordionDetails, PlusSvgIcon } from './styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type PropTypes = {
	accordionContent: {
		title: string;
		list: {
			id: number;
			title: string;
			icon: boolean;
			content: string;
		}[];
	}
}

export const Accordion = ({accordionContent}: PropTypes) => {
	return (
		<>
			<AccordionTittle>
				{accordionContent.title}
			</AccordionTittle>
			{
				accordionContent.list.map(item => {
					return (
						<MuiAccordion key={item.id}>
							<MuiAccordionSummary
								expandIcon={item.icon ? <PlusSvgIcon/> : <ExpandMoreIcon />}
								aria-controls={`panel${item.id}a-content`}
								id={`panel${item.id}a-header`}>
								{item.title}
							</MuiAccordionSummary>
							<MuiAccordionDetails>
								{`${item.content}${item.id}`}
							</MuiAccordionDetails>
						</MuiAccordion>
					)
				})
			}
		</>
	)
}