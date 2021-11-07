import { Calculator } from './Calculator';
import { Container } from '../../../styles/container';
import { ExpressCalcWrapper, Title } from './styles';


export const ExpressCalc = () => {
	return (
		<ExpressCalcWrapper>
			<Container>
				<Title>
					Рассчитать Экспресс-кредит
				</Title>
				<Calculator/>
			</Container>
		</ExpressCalcWrapper>
	)
}