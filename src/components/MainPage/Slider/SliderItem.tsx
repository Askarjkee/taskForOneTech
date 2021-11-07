import { Container } from '../../../styles/container';
import { FirstSlide, Title, Subtitle, Descr, SliderBtn, SlideWrapper, Information, Picture } from './styles';
import sliderImg from '../../../assets/img/slider/girl.png';

type PropTypes = {
    imgUrl: string | null,
    subtitle: string,
    description: string,
    btnInfo: string
}

export const SliderItem = ({ imgUrl, subtitle, description, btnInfo }: PropTypes) => {

    return (
            <FirstSlide imgUrl={imgUrl}>
                <Container>
                    <SlideWrapper>
                        <Information>
                            <Title>
                                <a href="1">Forte</a> - Банк
                            </Title>
                            <Subtitle>
                                {subtitle}
                            </Subtitle>
                            <Descr>
                                {description}
                            </Descr>
                            <SliderBtn>
                                {btnInfo}
                            </SliderBtn>
                        </Information>
                        
                        <Picture src={sliderImg} alt="slider" />
                        
                    </SlideWrapper>
                </Container>
            </FirstSlide>

    )
}