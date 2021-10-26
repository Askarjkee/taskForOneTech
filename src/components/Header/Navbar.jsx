import {
    HeaderContent,
    NavItem,
    NavbarWrapper
} from './styles.js';
import { HiddenSubheader } from './Subheader.jsx';

export const Navbar = ({ content }) => {
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