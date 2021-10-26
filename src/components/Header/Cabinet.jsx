import {
    CabinetWrapper,
    Contacts,
    Login,
    HeaderContent
} from './styles.js';
import { ContactsSvg, ProfileSvg } from './Icons';

export const Cabinet = ({cabinet}) => {
    const { number, loginMessage} = cabinet;
    
    return (
        <CabinetWrapper>
            <Contacts as="a" href="tel:7575">
                <ContactsSvg />
                <HeaderContent>
                    {number}
                </HeaderContent>
            </Contacts>
            <Login href="#">
                <ProfileSvg />
                <HeaderContent>
                    {loginMessage}
                </HeaderContent>
            </Login>
        </CabinetWrapper>
    )
}