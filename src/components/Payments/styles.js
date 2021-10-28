import styled from 'styled-components';

export const PaymentsWrapper = styled.section`
    padding-top: 24px;
    
    .payments {
        display: flex;
        justify-content: space-between;
        &__card {
            padding: 32px 0 0 32px;
            width: 600px;
            height: 278px;
            background: #F2F2F2;
            display: flex;
            justify-content: space-between;
            border-radius: 4px;
            &__content {
                margin-bottom: 32px;
            }
            &__img {
                margin-right: 24px;
                &__right {
                    margin-right: 63px;
                }
            }
        }
    }
    .title {
        font-weight: 500;
        font-size: 24px;
        color: #1E2A41;
        white-space: pre-line;
    }
    .subtitle {
        margin-top: 16px;
        font-weight: 400;
        font-size: 16px;
        color: #303030;
    }
    .btn {
        cursor: pointer;
        border: none;
        margin-top: 112px;
        width: 153px;
        height: 44px;
        background: #FFFFFF;
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        color: #0E2B91;
        &__dark {
            margin-top: 40px;
            width: 224px;
            height: 44px;
            background: #1E2A41;
            color: #FFFFFF;
        }
    }

    
    
`