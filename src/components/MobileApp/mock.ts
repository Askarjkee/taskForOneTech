import googleIcon from '../../assets/img/mobile-app/google.png';
import appleIcon from '../../assets/img/mobile-app/apple.png';
import iphoneImg from '../../assets/img/mobile-app/iphone.png';

type Content = {
    title: string,
    advantage: string[],
    google: string,
    apple: string,
    phoneImg: string
}


export const content: Content = {
    title: 'Попробуйте мобильное приложение Forte',
    advantage: ['Оплата платежей', 'Денежные переводы', 'Управление лимитами'],
    google: googleIcon,
    apple: appleIcon,
    phoneImg: iphoneImg
}