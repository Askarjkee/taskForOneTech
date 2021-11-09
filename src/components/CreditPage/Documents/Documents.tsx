import { DocumentsWrapper, Title, SubtitleBlock, Subtitle, Icon, Questions, Link } from './styles';
import { Container } from '../../../styles/container';
import { content } from './mock';

export const Documents = () => {
	return (
		<DocumentsWrapper>
			<Container>
				<Title>
					{content.title}
				</Title>
				<SubtitleBlock>
					<Icon src={content.documentIcon} />
					<Subtitle>{content.subtitle}</Subtitle>
				</SubtitleBlock>
				<SubtitleBlock>
					<Icon src={content.paperIcon} />
					<Subtitle>{content.descr}</Subtitle>
				</SubtitleBlock>
				<Questions>
					Задать вопросы можете по номеру <Link href="#">7575</Link> или письмом на электронный адрес <Link href="#">callcenter@forte.bank</Link>
				</Questions>
			</Container>
		</DocumentsWrapper>
	)
}