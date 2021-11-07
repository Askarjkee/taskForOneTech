import styled from "styled-components";

type PropTypes = {
    active?: boolean | null
}

export const ExchangeWrapper = styled.section`
    padding-top: 169px;
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none; 
    }
    @media(max-width: 575px) {
        padding-top: 75px;
    }

`

export const Title = styled.div`
    font-weight: 700;
    font-size: 30px;
    color: #1E2A41;
    @media(max-width: 575px) {
        font-size: 24px;
    }
`

export const Subtitle = styled.div`
    margin-top: 24px;
    font-weight: 400;
    font-size: 16px;
    color: #303030;
`

export const TableWrapper = styled.table`
    tr:nth-child(even) {
        background: #F2F2F2;
    }
`

export const TableItemName = styled.td`
    display: flex;
    align-items: center;
    height: 52px;
    padding: 0 206px 0 24px;
    font-weight: 500;
    font-size: 20px;
    color: #303030;
    svg {
        width: 24px;
        margin-right: 24px;
    }
    @media(max-width: 575px) {
        padding: 0 20px 0 10px;
        
        svg {
            margin-right: 10px;
        }
    }
`

export const FlexContainer = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 575px) {
        flex-direction: column;
    }
`

export const Table = styled.tr`
    
`

export const TableItemTitle = styled.td`
    font-weight: 400;
    font-size: 12px;
    color: #303030;
`

export const TableItemBuy = styled.td`
    padding-right: 63px;
    @media(max-width: 575px) {
        padding-right: 27px;
    }
`

export const TableItemSell = styled(TableItemBuy)`
    padding-right: 37px;
`

export const ExchangeCalc = styled.div`
    background-color: #F5F5F5;
    padding: 24px 64px 32px 64px;
    border-radius: 4px;
    @media(max-width: 575px) {
        padding: 24px 16px 28px 47px;
    }
`

export const ExchangeCalcTitle = styled(Title)`
    font-size: 24px;
    @media(max-width: 575px) {
        font-size: 18px;
    }
`

export const ExchangeCalcItems = styled.div`
    position: relative;
    margin-top: 24px;
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid #737373;
    input {
        min-height: 28px;
        outline: none;
        border: none;
        background-color: #F5F5F5;
        font-weight: 400;
        font-size: 24px;
        color: #303030;
    }
    
    button {
        cursor: pointer;
        border: none;
        margin-right: 16px;
    }
    button:nth-child(6) {
        margin-right: 0;
    }
    @media(max-width: 575px) {
        display: block;
        border-bottom: none;
        input {
            border-bottom: 1px solid #737373;
            width: 100%;
            font-size: 18px;
        }
    }
`


export const Btn = styled.button<PropTypes>`
    @media(max-width: 575px) {
        margin-top: 10px;
        img {
            width: 24px;
        }
    }
    img {
        border-bottom: ${props => props.active ? '3px solid #9D2550' : 'none'}
    }
`

export const BtnSubmit = styled(Btn)`
    position: absolute;
    width: 61px;
    height: 61px;
    border-radius: 50%;
    left: -95px;
    top: 25%;
    transform: translateY(-90%);
    img {
        :hover {
            transform: rotate(90deg);
        }
    }
    @media(max-width: 575px) {
        margin-top: 0;
        width: 48px;
        height: 48px;
        top: 0;
        left: -57px;
        img {
            width: 30px;
        }
    }
`

export const EurSvg = () => (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 19.4845C15.5699 20.4417 13.8501 21 12 21C8.87957 21 6.13006 19.412 4.51554 17C3.55826 15.5699 2.99999 13.8501 2.99999 12C2.99999 10.1499 3.55826 8.4301 4.51554 7C6.13006 4.58803 8.87957 3 12 3C13.8501 3 15.5699 3.55827 17 4.51555M1.81114 10.5H11M1.10547 13.5H8.99999" stroke="#303030" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

)

export const UsdSvg = () => (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8.00008C16 6.00008 13.9999 5.00025 11.9999 5.00025M11.9999 5.00025C11.4999 5.00025 7.99997 5.0004 7.99997 8.00024C7.99997 11.0001 16 13 16 16.0001C16 19.0002 12.4999 19.0002 11.9999 19.0002M11.9999 5.00025L12 3.50014M11.9999 19.0002C9.99989 19.0002 7.99997 18.0002 7.99997 16.0002M11.9999 19.0002L12 20.5" stroke="#303030" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

)

export const RubSvg = () => (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 20.0002V12M9 12C14 12 17 12 17 8C17 4 14 4 9 4V12ZM7 16H15" stroke="#303030" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

)

export const GbpSvg = () => (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 7C16.5 5.5 15.5 4 13 4C10.5 4 10 6.66667 10 8C10 11.667 8.2 20 5 20H19V19M7 13.5H16" stroke="#303030" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

)

export const KztSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6H18M6 9H12M18 9H12M12 9V20" stroke="#303030" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
