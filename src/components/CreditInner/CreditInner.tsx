import { Container } from '../../styles/container';
import { CreditWrapper, CreditTitle, CreditSubtitle, FlexWrapper, Content, CreditDescr, CreditBtn, CreditImg } from './styles';
import { content } from './mock';

export const CreditInner = () => {
	return (
		<CreditWrapper>
			<Container>
				<FlexWrapper>
					<Content>
						<CreditTitle>
							{
								content.links.map(item => <span key={item.id}> <a href={item.href}>{item.title}</a> - </span>)
							}
							{content.title}
						</CreditTitle>
						<CreditSubtitle>
							{content.subtitle}
						</CreditSubtitle>
						<CreditDescr>
							{content.descr}
						</CreditDescr>
						<CreditBtn>
							{content.btn}
						</CreditBtn>
					</Content>
					<CreditImg src={content.image} alt="icon" />
				</FlexWrapper>
			</Container>
		</CreditWrapper>
	)
}