import { QuestionsCardWrapper, QuestionsIcon, QuestionsTitle, QuestionsSubtitle } from './styles';

type PropTypes = {
    logo: string,
    title: string,
    subtitle: string
}

export const QuestionCard = ({logo, title, subtitle}: PropTypes) => {
    return (
        <QuestionsCardWrapper>
            <QuestionsIcon src={logo} alt="question"/>
            <QuestionsTitle>
                {title}
            </QuestionsTitle>
            <QuestionsSubtitle>
                {subtitle}
            </QuestionsSubtitle>
        </QuestionsCardWrapper>
    )
}