import { Slider } from '../MainPage/Slider';
import { Cards } from '../MainPage/Cards';
import { CalculatorPage } from '../MainPage/Calculator';
import { Payments } from '../MainPage/Payments';
import { Question } from '../MainPage/Questions';
import { MobileApp } from '../MainPage/MobileApp';
import { Exchange } from '../MainPage/Exchange';

export const MainPage = () => {
	return (
		<>
			<Slider />
			<Cards />
			<CalculatorPage />
			<Payments />
			<Question />
			<MobileApp />
			<Exchange />
		</>
	)
}