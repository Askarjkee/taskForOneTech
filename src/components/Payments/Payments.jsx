import { Container } from '../../assets/globalStyles/styles.js';
import { PaymentsWrapper } from './styles';
import transfers from '../../assets/img/payments/transfers.png';
import payments from '../../assets/img/payments/payments.png';

export const Payments = () => {
    return (
        <PaymentsWrapper>
            <Container>
                <div className="payments">
                    <div className="payments__card">
                        <div className="payments__card__content">
                            <div className="title">
                                Перевод с карты на 
                                любую карту мира
                            </div>
                            <button className="btn">Подробнее</button>
                        </div>
                        <div className="payments__card__img">
                            <img src={transfers} alt="transfer" />
                        </div>
                    </div>
                    <div className="payments__card">
                        <div className="payments__card__content">
                            <div className="title">
                                Оплата платежей <br/>
                                online
                            </div>
                            <div className="subtitle">
                                Оплата штрафов, коммунальных <br />
                                услуг, услуг сотовых операторов <br />
                                и  многое другое
                            </div>
                            <button className="btn btn__dark">Подробнее</button>
                        </div>
                        <div className="payments__card__img payments__card__img__right">
                            <img src={payments} alt="payments" />
                        </div>
                    </div>
                </div>
            </Container>
        </PaymentsWrapper>
    )
}