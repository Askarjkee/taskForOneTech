import { Container } from '../../../styles/container';
import { PaymentsWrapper, FlexContainer } from './styles';
import { PaymentCard } from './PaymentCard';
import { content } from './mock';

export const Payments = () => {
    return (
        <PaymentsWrapper>
            <Container>
                <FlexContainer>
                    {
                        content.map(item => {
                            return <PaymentCard
                                        key={item.id}
                                        title={item.title}
                                        subtitle={item.subtitle ? item.subtitle : null}
                                        buttonDark={item.buttonDark}
                                        buttonText={item.buttonText}
                                        margin={item.margin}
                                        img={item.img}
                                        altImg={item.altImg}/>
                        })
                    }
                </FlexContainer>
            </Container>
        </PaymentsWrapper>
    )
}
