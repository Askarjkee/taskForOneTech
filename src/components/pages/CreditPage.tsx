import { Inner } from '../CreditPage/Inner';
import { Advantage } from '../CreditPage/Advantage';
import { ExpressCalc } from '../CreditPage/ExpressCalc';
import { Tabs } from '../CreditPage/Tabs';
import { Documents } from '../CreditPage/Documents';
import { Requirements } from '../CreditPage/Requirements';
import { Questions } from '../CreditPage/Questions'

export const CreditPage = () => {
	return (
		<>
			<Inner />
			<Advantage />
			<ExpressCalc/>
			<Tabs/>
			<Documents/>
			<Requirements/>
			<Questions/>
		</>
	)
}