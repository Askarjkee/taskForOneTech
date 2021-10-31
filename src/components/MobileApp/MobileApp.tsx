import { Container } from '../../styles/container';
import { 
    MobileAppWrapper, 
    Mobile, 
    Content, 
    Title, 
    List, 
    ListItem, 
    Download, 
    ImgAbsolute } from './styles';

import { content } from './mock';

export const MobileApp = () => {
    return (
        <MobileAppWrapper>
            <Container>
                <Mobile>
                    <Content>
                        <Title>
                            {content.title}
                        </Title>
                        <List>
                            {
                                content.advantage.map((content, index) => {
                                    return <ListItem key={index}>{content}</ListItem>
                                })
                            }
                        </List>
                        <Download>
                            <a href="1"><img src={content.apple} alt="apple-store" /></a>
                            <a href="2"><img src={content.google} alt="google-store" /></a>
                        </Download>
                    </Content>
                    <ImgAbsolute src={content.phoneImg} alt="phone" className="mobile-app__image" />
                </Mobile>
            </Container>
        </MobileAppWrapper>
    )
}