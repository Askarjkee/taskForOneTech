import { Container } from '../../styles/container';
import { QuestionsWrapper, FlexContainer } from './styles';
import { QuestionCard } from './QuestionCard';
import { content } from './mock';

export const Question = () => {
    return (
        <QuestionsWrapper>
            <Container>
                <FlexContainer>
                    {
                        content.map(item => <QuestionCard key={item.id} logo={item.logo} title={item.title} subtitle={item.subtitle}/>)
                    }
                </FlexContainer>
            </Container>
        </QuestionsWrapper>
    )
}