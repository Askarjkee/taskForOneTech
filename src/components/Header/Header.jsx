
import mainLogo from '../../assets/img/header/forte_logo.svg';
import {
    HeaderWrapper,
    Container,
    HeaderItems,
    Settings,
    StyledLink,
    ForteLogo,
    Language,
    HeaderContent,
    Location,
    NavItem,
    NavBar,
    Cabinet,
    Contacts,
    Login
} from './Styles.js';
import { LocationSvg, ArrowSvg, ContactsSvg, ProfileSvg } from './Icons';


export const Header = ({content}) => {
    const {language, city, menuItems, contacts, loginMessage} = content;

    return (
        <HeaderWrapper>
            <Container>
                <HeaderItems>
                    <Settings>
                        <StyledLink href="#">
                            <ForteLogo src={mainLogo} alt="logo" />
                        </StyledLink>
                        <Language>
                            <HeaderContent>
                                {language}
                            </HeaderContent>
                            <ArrowSvg />
                        </Language>
                        <Location>
                            <LocationSvg />
                            <HeaderContent>
                                {city}
                            </HeaderContent>
                        </Location>
                    </Settings>
                    <NavBar>
                        {
                            menuItems.map(item => {
                                return (
                                    <StyledLink key={item.id} href="#">
                                        <NavItem>{item.name}</NavItem>
                                    </StyledLink>
                                )
                            })
                        }
                    </NavBar>
                    <Cabinet>
                        <Contacts as="a" href="tel:7575">
                            <ContactsSvg />
                            <HeaderContent>
                                {contacts}
                            </HeaderContent>
                        </Contacts>
                        <Login href="#">
                            <ProfileSvg/>
                            <HeaderContent>
                                {loginMessage}
                            </HeaderContent>
                        </Login>
                    </Cabinet>
                </HeaderItems>
            </Container>
        </HeaderWrapper>
    )
}






