import { Slider } from '../Slider';
import { Cards } from '../Cards';
import { CalculatorPage } from '../Calculator';
import { Payments } from '../Payments';
import { Question } from '../Questions';
import { MobileApp } from '../MobileApp';
import { Exchange } from '../Exchange';

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