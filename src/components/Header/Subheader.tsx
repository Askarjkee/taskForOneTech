import {
    SubheaderItems,
    SubheaderItem,
    SubheaderWrapper,
    SubheaderLink,
    SubheaderContent
} from './styles';


type PropTypes = {
    content: Array<{id: number, name: string, link: string, logo: string }>
}


export const HiddenSubheader = ({ content }: PropTypes) => {
    return (
        <SubheaderItems>
            <SubheaderWrapper>
                {
                    content.map(item => {
                        return (
                            <SubheaderLink key={item.id} to={item.link}>
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