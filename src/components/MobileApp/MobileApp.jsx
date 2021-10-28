import { Container } from '../../assets/globalStyles/styles';
import { MobileAppWrapper } from './styles';
import googleIcon from '../../assets/img/mobile-app/google.png';
import appleIcon from '../../assets/img/mobile-app/apple.png';
import iphoneImg from '../../assets/img/mobile-app/iphone.png';

export const MobileApp = () => {
    return (
        <MobileAppWrapper>
            <Container>
                <div className="mobile-app">
                    <div className="mobile-app__content">
                        <div className="mobile-app__title">
                            Попробуйте мобильное приложение Forte
                        </div>
                        <ul className="mobile-app__list">
                            <li>
                                Оплата платежей
                            </li>
                            <li>
                                Денежные переводы
                            </li>
                            <li>
                                Управление лимитами
                            </li>
                        </ul>
                        <div className="mobile-app__download">
                            <a href="1"><img src={appleIcon} alt="apple-store" /></a>
                            <a href="2"><img src={googleIcon} alt="google-store" /></a>
                        </div>
                    </div>
                    <img src={iphoneImg} alt="phone" className="mobile-app__image" />
                </div>
            </Container>
        </MobileAppWrapper>
    )
}