import creditIcon from '../../../assets/img/CreditAdvantage/credit.svg';
import calendarIcon from '../../../assets/img/CreditAdvantage/delivery.svg';
import percentIcon from '../../../assets/img/CreditAdvantage/charity.svg'

export const advantageContent = {
	title: 'Получить кредит на выгодных условиях',
	icons: [{id: 1, imgSrc: creditIcon, text: 'До 7 000 000 ₸'}, {id: 2, imgSrc: calendarIcon, text: 'До 5 лет'}, {id: 3, imgSrc: percentIcon, text: 'От 7% годовых'}],
	info: 'Рассчитаем займ с минимальной ставкой в тот же день и сразу сообщим о решении'
}

export const accordionContent = {
	title: 'Преимущества экспресс-кредита ',
	list: [
		{id: 1, title: 'Без залога и на любые цели', icon: false, content: 'Мы не спрашиваем, на что вы хотите получить кредит, это ваши деньги — используйте их как хотите. И выдаём без залога.'},
		{id: 2, title: 'Доставка денег и документов домой', icon: false, content: 'test'},
		{id: 3, title: 'Погашение без походов в отделение', icon: false, content: 'test'}
	]
}