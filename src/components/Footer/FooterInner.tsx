import { useState, useEffect } from 'react';
import {
    FooterInnerWrapper,
    FlexColumn,
    Title,
    Link,
    MobileArrow
} from './styles';
import arrow from '../../assets/img/footer/shape.svg';
import { FooterInnerContent, mobileContent } from './mock';


export const FooterInner = () => {
    const [content, setContent] = useState(FooterInnerContent);
    const width = window.screen.width;

    useEffect(() => {
        if (width < 575) {
            setContent(mobileContent)
        }
    }, [width])

    return (
        <FooterInnerWrapper>
            {
                content.map(item => {
                    return (
                        <FlexColumn key={item.id}>
                            <Title>{item.title}</Title>
                            <MobileArrow src={arrow} alt="arrow"/>
                            {
                                item.items.map(i => <Link key={i.id}>{i.name}</Link>)
                            }
                            {item.email && <Link><span>{item.email}</span></Link>}
                        </FlexColumn>
                    )
                })
            }
        </FooterInnerWrapper>
    )
}