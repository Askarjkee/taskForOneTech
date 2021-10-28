import { Container } from "../../assets/globalStyles/styles";
import { FooterInner } from './FooterInner';
import { FooterEnd } from './FooterEnd';
import { FooterWrapper,   } from "./styles";


export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <div className="footer">
                    <FooterInner/>
                    <div className="footer__line"></div>
                    <FooterEnd/>
                </div>
            </Container>
        </FooterWrapper>
    )
}