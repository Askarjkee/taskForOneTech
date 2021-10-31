import {
    HeaderContent,
    NavItem,
    NavbarWrapper
} from './styles';
import { HiddenSubheader } from './Subheader';
import { MenuContentType } from './mock';

type PropTypes = {
    content: MenuContentType
}

export const Navbar = ({ content }: PropTypes) => {
    return (
        <NavbarWrapper>
            {
                content.map(item => {
                    return item.subheader ? 
                        <HeaderContent key={item.id}>
                            <NavItem href={item.link}>{item.name}</NavItem>
                            <HiddenSubheader content={item.subheader} />
                        </HeaderContent>
                        :
                        <HeaderContent key={item.id}>
                            <NavItem href={item.link}>{item.name}</NavItem>
                        </HeaderContent>
                })
            }
        </NavbarWrapper>
    )
}