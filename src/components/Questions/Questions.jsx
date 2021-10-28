import { Container } from '../../assets/globalStyles/styles';
import { QuestionsWrapper } from './styles';
import logo from '../../assets/img/questions/secret_q.svg';

export const Question = () => {
    return (
        <QuestionsWrapper>
            <Container>
                <div className="questions">
                    <div className="questions__card">
                        <img src={logo} alt="question" className="questions__logo" />
                        <div className="questions__title">
                            Как проверить, наложен ли на счет арест/ПТП?
                        </div>
                        <div className="questions__subtitle">
                            Информацию о том, наложен ли арест на ваш счёт вы можете узнать: - на сайте Министерства юстиции РК в реестре должников по исполнительным производствам; - в личном кабинете на портале электронного правительства e-gov.kz.
                        </div>
                    </div>
                    <div className="questions__card">
                        <img src={logo} alt="question" className="questions__logo" />
                        <div className="questions__title">
                            Где посмотреть выписку по карте?
                        </div>
                        <div className="questions__subtitle">
                            Выписку по карте вы сможете посмотреть в своем Мобильном приложении либо, обратившись в ближайшее отделение Банка.
                        </div>
                    </div>
                    <div className="questions__card">
                        <img src={logo} alt="question" className="questions__logo" />
                        <div className="questions__title">
                            Что такое CVC2/CVV2?
                        </div>
                        <div className="questions__subtitle">
                            CVC2/CVV2 — это трехзначный код, указанный на оборотной стороне карты, на панели для подписи.
                        </div>
                    </div>
                </div>
            </Container>
        </QuestionsWrapper>
    )
}