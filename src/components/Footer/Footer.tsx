import { Container } from '../../styles/container';
import { FooterInner } from './FooterInner';
import { FooterEnd } from './FooterEnd';
import { FooterWrapper, Line } from "./styles";


export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterInner/>
                <Line/>
                <FooterEnd/>
            </Container>
        </FooterWrapper>
    )
}