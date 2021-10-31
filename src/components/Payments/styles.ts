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
`

export const PaymentCardWrapper = styled(FlexContainer)`
    padding: 32px 0 0 32px;
    width: 600px;
    height: 278px;
    background: #F2F2F2;
    border-radius: 4px;
`

export const Content = styled.div`
    margin-bottom: 32px;
`

export const ContentImg = styled.div<PropTypes>`
    margin-right: ${props => props.marginRight || '0'}
`

export const Title = styled.div`
    max-width: 240px;
    font-weight: 500;
    font-size: 24px;
    color: #1E2A41;
    white-space: pre-line;
`

export const Subtitle = styled(Title)`
    max-width: 280px;
    margin-top: 16px;
    font-weight: 400;
    font-size: 16px;
    color: #303030;
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
`

export const DarkButton = styled(Button)`
    margin-top: 40px;
    width: 224px;
    background: #1E2A41;
    color: #FFFFFF;
`