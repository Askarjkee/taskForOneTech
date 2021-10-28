import { Container } from '../../assets/globalStyles/styles.js';
import { FirstSlide, Title, Subtitle, Descr, SliderBtn, SlideWrapper, Information, Picture } from './styles';
import sliderImg from '../../assets/img/slider/girl.png';


export const SliderItem = ({ imgUrl, subtitle, description, btnInfo }) => {

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
                        <Picture>
                            <img src={sliderImg} alt="slider" />
                        </Picture>
                    </SlideWrapper>
                </Container>
            </FirstSlide>

    )
}