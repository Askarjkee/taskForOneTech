import { MyCard, CardTitle, CardSubtitle, CardDescr, AnotherInfo, MyButton, FlexWrapper } from './styles';
import classicCard from '../../assets/img/Cards/classic.png';
import goldCard from '../../assets/img/Cards/gold.png';
import platinumCard from '../../assets/img/Cards/platinum.png';

export const CardItems = () => {
    return (
        <FlexWrapper>
            <MyCard>
                <img src={classicCard} alt="card" />
                <CardTitle>Classic</CardTitle>
                <CardSubtitle>Выпуск карты бесплатно</CardSubtitle>
                <CardDescr>Снятие до 500 000 ₸ в месяц в банкоматах Казахстана бесплатно</CardDescr>
                <AnotherInfo>CashBack до 15%</AnotherInfo>
                <MyButton variant="contained">Заказать карту</MyButton>
            </MyCard>
            <MyCard>
                <img src={goldCard} alt="card" />
                <CardTitle>Gold</CardTitle>
                <CardSubtitle>Выпуск карты бесплатно</CardSubtitle>
                <CardDescr>Снятие до 500 000 ₸ в месяц в банкоматах Казахстана бесплатно</CardDescr>
                <AnotherInfo>CashBack до 15%</AnotherInfo>
                <MyButton variant="contained">Заказать карту</MyButton>
            </MyCard>
            <MyCard>
                <img src={platinumCard} alt="card" />
                <CardTitle>Platinum</CardTitle>
                <CardSubtitle>Выпуск карты бесплатно</CardSubtitle>
                <CardDescr>Снятие до 500 000 ₸ в месяц в банкоматах Казахстана бесплатно</CardDescr>
                <AnotherInfo>CashBack до 15%</AnotherInfo>
                <MyButton variant="contained">Заказать карту</MyButton>
            </MyCard>
        </FlexWrapper>
    )
}