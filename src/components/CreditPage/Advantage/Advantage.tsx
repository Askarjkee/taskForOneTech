import { AdvantageWrapper } from './styles';
import { Container } from '../../../styles/container';
import { AdvantageTitle } from './AdvantageTitle';
import { Accordion } from './Accordion';


export const Advantage = () => {
	return (
		<AdvantageWrapper>
			<Container>
				<AdvantageTitle />
				<Accordion/>
			</Container>
		</AdvantageWrapper>
	)
}