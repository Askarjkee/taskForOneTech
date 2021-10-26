import { Settings } from './Settings.jsx';
import { Navbar } from './Navbar.jsx';
import { Cabinet } from './Cabinet.jsx';
import { HeaderWrapper, HeaderItems } from './styles.js';
import { Container } from '../../assets/globalStyles/styles.js';
import cardsIcon from '../../assets/img/header/by_card.svg';
import contactsIcon from '../../assets/img/header/contacts.svg';
import depositsIcon from '../../assets/img/header/deposit.svg';
import familyIcon from '../../assets/img/header/family.svg';
import insuranceIcon from '../../assets/img/header/insurance.svg';
import premierIcon from '../../assets/img/header/premier.svg';
import transfersIcon from '../../assets/img/header/transfers.svg';

const HeaderContent = {

    Navbar: [
        {
            id: 1,
            name: 'Банк',
            link: '#',
            subheader: [
                { id: 1, name: 'Карты', link: '#', logo: cardsIcon },
                { id: 2, name: 'Депозиты', link: '#', logo: depositsIcon },
                { id: 3, name: 'Переводы', link: '#', logo: transfersIcon },
                { id: 4, name: 'Insurance', link: '#', logo: insuranceIcon },
                { id: 5, name: 'Premier', link: '#', logo: premierIcon },
                { id: 6, name: 'ForteFamily', link: '#', logo: familyIcon },
                { id: 7, name: 'Контакты', link: '#', logo: contactsIcon }
            ]
        },
        { id: 2, name: 'Маркет', link: '#' },
        { id: 3, name: 'Mobile', link: '#' },
        { id: 4, name: 'Путешествия', link: '#' },
        { id: 5, name: 'Бизнес', link: '#' },
        { 
            id: 6, 
            name: 'Club', 
            link: '#', 
            subheader: [
                { id: 1, name: 'lorem ipsum', link: '#', logo: cardsIcon },
                { id: 2, name: 'lorem ipsum', link: '#', logo: depositsIcon },
                { id: 3, name: 'lorem ipsum', link: '#', logo: transfersIcon },
                { id: 4, name: 'lorem ipsum', link: '#', logo: insuranceIcon },
                { id: 5, name: 'lorem ipsum', link: '#', logo: premierIcon },
                { id: 6, name: 'lorem ipsum', link: '#', logo: familyIcon },
                { id: 7, name: 'lorem ipsum', link: '#', logo: contactsIcon }
            ]
        }
    ],

    cabinet: {
        number: '7575',
        loginMessage: 'Войти'
    },

    settings: {
        currentLang: 'Рус',
        secondLang: 'Каз',
        thirdLang: 'Eng',
        currentCity: 'Усть-Каменогорск',
        secondCity: 'Алматы',
        thirdCity: 'Астана'
    }

}

export const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderItems>
                    <Settings settings={HeaderContent.settings} />
                    <Navbar content={HeaderContent.Navbar} />
                    <Cabinet cabinet={HeaderContent.cabinet}/>
                </HeaderItems>
            </Container>
        </HeaderWrapper >
    )
}

