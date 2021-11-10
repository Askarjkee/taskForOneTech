
import { Container } from '../../../styles/container';
import { Accordion } from '../Advantage/Accordion';
import { QuestionWrapper, Info, Link } from './styles';
import { accordionContent } from './mock';

export const Questions = () => {
	return (
		<QuestionWrapper>
			<Container>
				<Accordion accordionContent={accordionContent} />
				<Info>
				Если не нашли ответа на свой вопрос, позвоните на <Link href="tel:7575">7575</Link> или напишите на электронный адрес <Link href="mailto:callcenter@forte.bank">callcenter@forte.bank</Link>
				</Info>
			</Container>
		</QuestionWrapper>
	)
}