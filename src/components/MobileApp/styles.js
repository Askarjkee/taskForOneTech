import styled from 'styled-components';


export const MobileAppWrapper = styled.section`
    margin-top: 168px;
    padding-top: 48px;
    background: #F2F2F2;
    border-radius: 4px;
    min-height: 323px;
    .mobile-app {
        position: relative;
        &__title {
            font-weight: 500;
            font-size: 24px;
            color: #1E2A41;
        }
        &__list {
            margin-top: 24px;
            list-style-position: inside;
            font-weight: 400;
            font-size: 16px;
            li {
                margin-bottom: 16px;
            }
        }
        &__download {
            margin-top: 24px;
            img {
                margin-right: 16px;
            }
        }
        &__image {
            cursor: pointer;
            position: absolute;
            top: 60%;
            transform: translateY(-50%);
            right: 208px;
        }
    }
`