import { Settings } from './Settings';
import { Navbar } from './Navbar';
import { Cabinet } from './Cabinet';
import { HeaderWrapper, HeaderItems } from './styles';
import { Container } from '../../styles/container';
import { menuContent, cabinetContent, settingsContent } from './mock';


export const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderItems>
                    <Settings settings={settingsContent} />
                    <Navbar content={menuContent} />
                    <Cabinet cabinet={cabinetContent} />
                </HeaderItems>
            </Container>
        </HeaderWrapper >
    )
}

