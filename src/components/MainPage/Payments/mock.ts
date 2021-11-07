import transfers from '../../../assets/img/payments/transfers.png';
import payments from '../../../assets/img/payments/payments.png';

type Content = Array<{
    id: number,
    title: string, 
    subtitle?: string, 
    buttonDark: boolean, 
    buttonText: string, 
    margin: string, 
    img: string, 
    altImg:string }>

export const content: Content = [
    {
        id: 1,
        title: 'Перевод с карты на любую карту мира',
        buttonDark: false, 
        buttonText: 'Подробнее', 
        margin: '24px', 
        img: transfers, 
        altImg: 'transfers'
    },
    {
        id: 2,
        title: 'Оплата платежей online', 
        subtitle: 'Оплата штрафов, коммунальных услуг, услуг сотовых операторов и многое другое', 
        buttonDark: true, 
        buttonText: 'Произвести платеж', 
        margin: '63px', 
        img: payments, 
        altImg: 'payments'
    }
]