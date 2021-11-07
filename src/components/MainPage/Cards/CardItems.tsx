import { MyCard, CardTitle, CardSubtitle, CardDescr, AnotherInfo, MyButton, FlexWrapper } from './styles';

type PropTypes = {
    cards: {
        id: number;
        src: string;
        title: string;
        subtitle: string;
        descr: string;
        cashback: string;
        btn: string;
    }[]
}


export const CardItems = ({cards}: PropTypes) => {
    return (
        <FlexWrapper>
            {
                cards.map(item => {
                    return (
                        <MyCard key={item.id}>
                            <img src={item.src} alt="card" />
                            <CardTitle>{item.title}</CardTitle>
                            <CardSubtitle>{item.subtitle}</CardSubtitle>
                            <CardDescr>{item.descr}</CardDescr>
                            <AnotherInfo>{item.cashback}</AnotherInfo>
                            <MyButton>{item.btn}</MyButton>
                        </MyCard>
                    )
                })
            }
        </FlexWrapper>
    )
}