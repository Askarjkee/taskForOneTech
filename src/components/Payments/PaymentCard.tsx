import { 
    ContentImg, 
    Title, 
    Subtitle, 
    Button, 
    DarkButton, 
    PaymentCardWrapper, 
    Content } from './styles';
    
type PropTypes = {
    title: string, 
    subtitle: string | null,
    buttonDark: boolean,
    buttonText: string,
    margin: string,
    img: string,
    altImg: string
}

export const PaymentCard = ({ title, subtitle, buttonDark, buttonText, margin, img, altImg }: PropTypes) => {
    return (
        <PaymentCardWrapper>
            <Content>
                <Title>
                    {title}
                </Title>
                { subtitle && <Subtitle> {subtitle} </Subtitle>}
                {
                    !buttonDark ? <Button>{buttonText}</Button> : <DarkButton>{buttonText}</DarkButton>
                }
            </Content>
            <ContentImg marginRight={margin}>
                <img src={img} alt={altImg} />
            </ContentImg>
        </PaymentCardWrapper>
    )
}