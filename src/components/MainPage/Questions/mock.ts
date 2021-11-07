import logo from '../../../assets/img/questions/secret_q.svg';

export type ContentType = Array<{
    id: number,
    logo: string,
    title: string,
    subtitle: string
}>

export const content: ContentType = [
    {id: 1,logo, title: 'Как проверить, наложен ли на счет арест/ПТП?', subtitle: 'Информацию о том, наложен ли арест на ваш счёт вы можете узнать: - на сайте Министерства юстиции РК в реестре должников по исполнительным производствам; - в личном кабинете на портале электронного правительства e-gov.kz.'},
    {id: 2,logo, title: 'Где посмотреть выписку по карте?', subtitle: 'Выписку по карте вы сможете посмотреть в своем Мобильном приложении либо, обратившись в ближайшее отделение Банка.'},
    {id: 3,logo, title: 'Что такое CVC2/CVV2?', subtitle: 'CVC2/CVV2 — это трехзначный код, указанный на оборотной стороне карты, на панели для подписи.'}
]