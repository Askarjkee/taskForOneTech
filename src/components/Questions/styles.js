import styled from "styled-components";


export const QuestionsWrapper = styled.section`
    padding-top: 69px;
    .questions {
        display: flex;
        justify-content: space-between;
        &__card {
            display: flex;
            flex-direction: column;
            padding: 37px 32px 0 32px;
            background: #F2F2F2;
            border-radius: 4px;
            width: 392px;
            height: 350px;
        }
        &__logo {
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
        &__title {
            margin-top: 24px;
            font-weight: 500;
            font-size: 18px;
            color: #303030;
        }
        &__subtitle {
            margin-top: 16px;
            font-weight: 400;
            font-size: 16px;
            color: #303030;
        }
    }
`