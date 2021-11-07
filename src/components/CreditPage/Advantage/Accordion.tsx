import { AccordionTittle, MuiAccordion, MuiAccordionSummary, MuiAccordionDetails } from './styles';
import { accordionContent } from './mock';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Accordion = () => {
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
								expandIcon={<ExpandMoreIcon />}
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