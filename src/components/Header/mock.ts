import cardsIcon from '../../assets/img/header/by_card.svg';
import contactsIcon from '../../assets/img/header/contacts.svg';
import depositsIcon from '../../assets/img/header/deposit.svg';
import familyIcon from '../../assets/img/header/family.svg';
import insuranceIcon from '../../assets/img/header/insurance.svg';
import premierIcon from '../../assets/img/header/premier.svg';
import transfersIcon from '../../assets/img/header/transfers.svg';
import creditsIcon from '../../assets/img/header/credit.svg';



export type CabinetContentType = {
    number: string,
    loginMessage: string
}

export type SettingsContentType = {
    currentLang: string,
    secondLang: string,
    thirdLang: string,
    currentCity: string,
    secondCity: string,
    thirdCity: string
}

export type MenuContentType = Array<{
    id: number, 
    name: string, 
    link: string, 
    subheader?: Array<{id: number, name: string, link: string, logo: string}>
}>


export const menuContent: MenuContentType = [

    {
        id: 1,
        name: 'Банк',
        link: '#',
        subheader: [
            { id: 1, name: 'Кредиты', link: '/credit', logo: creditsIcon },
            { id: 2, name: 'Карты', link: '#', logo: cardsIcon },
            { id: 3, name: 'Депозиты', link: '#', logo: depositsIcon },
            { id: 4, name: 'Переводы', link: '#', logo: transfersIcon },
            { id: 5, name: 'Insurance', link: '#', logo: insuranceIcon },
            { id: 6, name: 'Premier', link: '#', logo: premierIcon },
            { id: 7, name: 'ForteFamily', link: '#', logo: familyIcon },
            { id: 8, name: 'Контакты', link: '#', logo: contactsIcon }
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
]

export const cabinetContent: CabinetContentType = {
    number: '7575',
    loginMessage: 'Войти'
}

export const settingsContent: SettingsContentType = {
    currentLang: 'Рус',
    secondLang: 'Каз',
    thirdLang: 'Eng',
    currentCity: 'Усть-Каменогорск',
    secondCity: 'Алматы',
    thirdCity: 'Астана'
}