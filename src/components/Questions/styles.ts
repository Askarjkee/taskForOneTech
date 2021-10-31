import styled from "styled-components";


export const QuestionsWrapper = styled.section`
    padding-top: 69px;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const QuestionsCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 37px 32px 0 32px;
    background: #F2F2F2;
    border-radius: 4px;
    width: 392px;
    height: 350px;
`

export const QuestionsIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const QuestionsTitle = styled.div`
    margin-top: 24px;
    font-weight: 500;
    font-size: 18px;
    color: #303030;
`

export const QuestionsSubtitle = styled(QuestionsTitle)`
    margin-top: 16px;
    font-weight: 400;
    font-size: 16px;
`