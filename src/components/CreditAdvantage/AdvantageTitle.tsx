import { Title, DescrBlock, DescrItem, DescrImg, Info } from './styles';
import { advantageContent } from './mock';

export const AdvantageTitle = () => {
	return (
		<>
			<Title>
				{advantageContent.title}
			</Title>
			<DescrBlock>
				{
					advantageContent.icons.map(item => {
						return (
							<DescrItem key={item.id}>
								<DescrImg src={item.imgSrc} alt="icon" />
								{item.text}
							</DescrItem>
						)
					})
				}
			</DescrBlock>
			<Info>
				{advantageContent.info}
			</Info>
		</>
	)
}