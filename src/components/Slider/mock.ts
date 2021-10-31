import backgroundImage from '../../assets/img/slider/background1.jpg';

type Content = Array<{id: number, imgUrl?: string, subtitle: string, description: string, btnInfo: string}>

export const content: Content = [
    { id: 1, imgUrl: backgroundImage, subtitle: 'До 3 000 000 ₸', description: 'Покупки без процентов', btnInfo: 'Подробнее' },
    { id: 2, subtitle: 'До 4 000 000 ₸', description: 'lorem ipsum', btnInfo: 'Подробнее' },
    { id: 3, imgUrl: backgroundImage, subtitle: 'До 5 000 000 ₸', description: 'lorem ipsum', btnInfo: 'Подробнее' },
    { id: 4, subtitle: 'До 6 000 000 ₸', description: 'lorem ipsum', btnInfo: 'Подробнее' }
]