
import { Container } from '../../styles/container';
import { SectionWrapper, Title, Subtitle } from './styles';
import { Calculator } from './Calculator';


export const CalculatorPage = () => {

    return (
        <SectionWrapper>
            <Container>
                <Title>Кредиты на любые цели</Title>
                <Subtitle>Предварительный расчет не является публичной офертой</Subtitle>
                <Calculator/>
            </Container>
        </SectionWrapper>
    )
}