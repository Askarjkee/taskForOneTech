import styled from 'styled-components';
import { Swiper } from "swiper/react";
import backgroundDefault from '../../assets/img/slider/background2.jpg';

type PropTypes = {
    imgUrl?: string | null
}

export const SliderWrapper = styled.section`
    margin-top: 88px;
    height: 400px;
    @media(max-width: 575px) {
        margin-top: 0;
        height: 300px;
    }
`


export const MySwiper = styled(Swiper)`
    @media(max-width: 575px) {
            height: 300px;
        }
    .swiper-button-prev {
        width: 36px;
        height: 36px;
        background-color: #FFFFFF;
        border-radius: 50%;
        left: 278px;
        @media(max-width: 575px) {
            display: none;
        }
        :after {
            text-align: center;
            font-size: 16px;
            color: #9D2550;
        } 
    }
    .swiper-button-next {
        width: 36px;
        height: 36px;
        background-color: #FFFFFF;
        border-radius: 50%;
        right: 278px;
        @media(max-width: 575px) {
            display: none;
        }
        :after {
            text-align: center;
            font-size: 16px;
            color: #9D2550;
        } 
    }
    .swiper-pagination {
        display: flex;
        left: 348px;
        @media(max-width: 575px) {
            left: 55px;
            bottom: 0;
        }
        .swiper-pagination-bullet {
            margin: 0 12px 20px 0;
            width: 44px;
            height: 3px;
            background-color: #FFFFFF;
            border-radius: 4px;
            opacity: 1;
        }
        .swiper-pagination-bullet-active {
            background-color: #1E2A41;
        }
    }
    
`

export const FirstSlide = styled.div<PropTypes>`
    background: url(${ props => props.imgUrl ? props.imgUrl : backgroundDefault}) center; 
    height: 400px;
    @media(max-width: 575px) {
        height: 300px;
    }
    
`

export const Title = styled.h1`
    padding-top: 32px;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
    a {
        color: inherit;
        text-decoration: underline;
    }
    @media(max-width: 575px) {
            display: none;
    }
`

export const Subtitle = styled.h2`
    margin-top: 45px;
    font-weight: 500;
    font-size: 48px;
    color: #FFFFFF;
    @media(max-width: 575px) {
        font-size: 21px;
        margin-top: 32px;
    }
`

export const Descr = styled.h3`
    margin-top: 33px;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    @media(max-width: 575px) {
        font-size: 16px;
        margin-top: 30px;
    }
`

export const SliderBtn = styled.button`
    margin-top: 83px;
    width: 153px;
    height: 52px;
    background: #FFFFFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #9D2550;
    @media(max-width: 575px) {
        background-color: #9D2550;
        color: #FFFFFF;
        width: 156px;
        height: 44px;
    }
`

export const SlideWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 400px;
    @media(max-width: 575px) {
        height: 300px;
    }
`

export const Information = styled.div`
    display: flex;
    flex-direction: column;
`

export const Picture = styled.img`
    @media(max-width: 575px) {
        width: 158px;
        height: 122px;
        margin-top: 80px;
    }
`
