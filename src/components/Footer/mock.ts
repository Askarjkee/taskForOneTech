type FooterInnerContentType = Array<{id: number, title: string, items: Array<{id: number, name: string}>, email?: string}>
type FooterEndContentType = {feedback: string, copyright: string, btnText: string}

export const FooterInnerContent: FooterInnerContentType = [
    {
    id: 1, 
    title: 'Банк', 
    items: [
        {id: 1, name: 'Кредиты'},
        {id: 2, name: 'Карты'},
        {id: 3, name: 'Депозиты'},
        {id: 4, name: 'Переводы'},
        {id: 5, name: 'Мобильное приложение'},
        {id: 6, name: 'Тарифы'},
        {id: 7, name: 'Сейфовые ячейки'}
    ]},
    {
        id: 2, 
        title: 'О нас', 
        items: [
            {id: 1, name: 'Информация'},
            {id: 2, name: 'Руководство'},
            {id: 3, name: 'Отчетность'},
            {id: 4, name: 'Документы'},
            {id: 5, name: 'Контакты'},
            {id: 6, name: 'Отделения и банкоматы'},
            {id: 7, name: 'Отделения в период карантина'},
            {id: 8, name: 'Вакансии'}
    ]},
    {
        id: 3, 
        title: 'Пресс-Центр', 
        items: [
            {id: 1, name: 'Новости'},
            {id: 2, name: 'Пресс-релизы'},
        ],
        email: 'press@forte.bank'
    },
    {
        id: 4, 
        title: 'Дополнительно', 
        items: [
            {id: 1, name: 'Premier'},
            {id: 2, name: 'International Relations'},
            {id: 3, name: 'Реализация имущества'},
            {id: 4, name: '175-летие Абая'},
            {id: 5, name: 'Apple Pay'},
            {id: 6, name: 'Samsung Pay'},
            {id: 7, name: 'ForteForex'},
            {id: 8, name: 'Специальные предложения'},
        ]
    },
]

export const FooterEndContent: FooterEndContentType = {
    feedback: 'Оставить обратную связь',
    copyright: 'Все права защищены © forte 2020',
    btnText: 'Версия для слабовидящих:'
}