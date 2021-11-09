import { MobileAccordion } from './MobileAccordion';
import {
    FooterInnerWrapper,
    FlexColumn,
    Title,
    Link,
} from './styles';
import { FooterInnerContent, mobileContent } from './mock';


export const FooterInner = () => {

    return (
        <FooterInnerWrapper>
            {
                FooterInnerContent.map(item => {
                    return (
                        <FlexColumn key={item.id}>
                            <Title>{item.title}</Title>
                            {
                                item.items.map(i => <Link key={i.id}>{i.name}</Link>)
                            }
                            {item.email && <Link><span>{item.email}</span></Link>}
                        </FlexColumn>
                    )
                })
            }
            <MobileAccordion mobileContent={mobileContent} />
        </FooterInnerWrapper>
    )
}