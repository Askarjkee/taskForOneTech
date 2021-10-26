import {
    SubheaderItems,
    SubheaderItem,
    SubheaderWrapper,
    SubheaderLink,
    SubheaderContent
} from './styles.js';


export const HiddenSubheader = ({ content }) => {
    return (
        <SubheaderItems>
            <SubheaderWrapper>
                {
                    content.map(item => {
                        return (
                            <SubheaderLink key={item.id} href={item.link}>
                                <SubheaderItem >
                                    <img src={item.logo} alt="icon" />
                                    <SubheaderContent>
                                        {item.name}
                                    </SubheaderContent>
                                </SubheaderItem>
                            </SubheaderLink>
                        )
                    })
                }
            </SubheaderWrapper>
        </SubheaderItems>
    )
}