import styled from 'styled-components';

type PropTypes = {
    marginRight?: string | null
}

export const PaymentsWrapper = styled.section`
    padding-top: 24px;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 575px) {
        flex-direction: column;
    }
`

export const PaymentCardWrapper = styled(FlexContainer)`
    padding: 32px 0 0 32px;
    width: 600px;
    height: 278px;
    background: #F2F2F2;
    border-radius: 4px;
    @media(max-width: 575px) {
        width: 100%;
        display: block;
        margin-bottom: 24px;
        min-height: 500px;
        position: relative;
        overflow: hidden;
        padding: 24px 24px 0 24px;
    }
`

export const Content = styled.div`
    margin-bottom: 32px;
`

export const ContentImg = styled.div<PropTypes>`
    @media(max-width: 575px) {
        margin-right: 0;
        img {
            display: block;
            margin: 0 auto;
        }
    }
    margin-right: ${props => props.marginRight || '0'}
`

export const Title = styled.div`
    max-width: 240px;
    font-weight: 500;
    font-size: 24px;
    color: #1E2A41;
    white-space: pre-line;
    @media(max-width: 575px) {
        max-width: 206px;
    }
`

export const Subtitle = styled(Title)`
    max-width: 280px;
    margin-top: 16px;
    font-weight: 400;
    font-size: 16px;
    color: #303030;
    @media(max-width: 575px) {
        max-width: 240px;
    }
`

export const Button = styled.button`
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
    @media(max-width: 575px) {
        position: absolute;
        bottom: 20px;
        left: 65px;
        background: #1E2A41;
        color: #fff;
        margin-top: 0;
    }
`

export const DarkButton = styled(Button)`
    margin-top: 40px;
    width: 224px;
    background: #1E2A41;
    color: #FFFFFF;
    @media(max-width: 575px) {
        position: static;
    }
`