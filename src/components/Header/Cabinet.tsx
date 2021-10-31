import {
    CabinetWrapper,
    Contacts,
    Login,
    HeaderContent
} from './styles';
import { ContactsSvg, ProfileSvg } from './Icons';
import { CabinetContentType } from './mock';

type PropsTypes = {
    cabinet: CabinetContentType
}

export const Cabinet = ({cabinet}: PropsTypes) => {

    const {number, loginMessage} = cabinet;
    
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