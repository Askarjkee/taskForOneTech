import euro from '../../assets/img/exchange/euro.svg';
import rub from '../../assets/img/exchange/rub.svg';
import gbp from '../../assets/img/exchange/gbp.svg';
import kzt from '../../assets/img/exchange/kzt.svg';
import usd from '../../assets/img/exchange/usd.svg';


export const btns = [
    {id: 1, name: 'RUB', svg: rub},
    {id: 2, name: 'GBP', svg: gbp},
    {id: 3, name: 'EUR', svg: euro},
    {id: 4, name: 'USD', svg: usd},
    {id: 5, name: 'KZT', svg: kzt}
]

export const content = {
    title: 'Курсы безналичной конвертации валют',
    subtitle: 'Курс актуален на',
    calcTitle: 'Конвертация валюты'
}

export const initialValue = {
    exchange: {
        EUR: 0,
        GBP: 0,
        KZT: 0,
        RUB: 0,
        USD: 0
    },
    inputValue: 100,
    from: 'USD',
    to: 'KZT',
    result: 0,
}