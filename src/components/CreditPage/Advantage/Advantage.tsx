import { AdvantageWrapper } from './styles';
import { Container } from '../../../styles/container';
import { AdvantageTitle } from './AdvantageTitle';
import { Accordion } from './Accordion';
import { accordionContent } from './mock';


export const Advantage = () => {
	return (
		<AdvantageWrapper>
			<Container>
				<AdvantageTitle />
				<Accordion accordionContent={accordionContent}/>
			</Container>
		</AdvantageWrapper>
	)
}