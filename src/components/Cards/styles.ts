import styled from 'styled-components';
import { Swiper } from "swiper/react";
import Card from '@mui/material/Card';

export const CardWrapper = styled.section`
    padding-top: 71px;
    @media(max-width: 575px) {
        padding-top: 40px;
    }
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 30px;
    color: #1E2A41;
`

export const MySwiper = styled(Swiper)`
   && {
        margin-top: 24px;
        min-height: 530px;
        @media(max-width: 575px) {
            min-height: 475px;
        }
        .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 8px;
            background-color: #303030;
        }
        
        
   }
`
export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


export const MyCard = styled(Card)`
    && {
        width: 288px;
        min-height: 455px;
        box-shadow: none;
        img {
            width: 100%;
            height: 179px;
        }
    }
`

export const CardTitle = styled.div`
    margin-top: 24px;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #303030;
`

export const CardSubtitle = styled(CardTitle)`
    margin-top: 16px;
    font-weight: 400;
    font-size: 16px;
`

export const CardDescr = styled(CardSubtitle)`
    
`

export const AnotherInfo = styled(CardDescr)`
    
`

export const MyButton = styled.button`
        cursor: pointer;
        display: block;
        margin: 0 auto;
        margin-top: 41px;
        width: 186px;
        height: 44px;
        border-radius: 4px;
        background-color: #1E2A41;
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;
        @media(max-width: 575px) {
            margin-top: 24px;
        }
`