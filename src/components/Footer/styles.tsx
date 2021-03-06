import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const FooterWrapper = styled.footer`
    margin-top: 64px;
    padding: 32px 0 32px 0;
    background-color: #F8F8F8;
    @media(max-width: 575px) {
        margin-top: 40px;
    }
`

export const MobileArrow = styled.img`
    display: none;
    @media(max-width: 575px) {
        display: block;
        width: 12px;
        height: 6px;
    }
`

export const FooterInnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 575px) {
        flex-direction: column;
    }
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 575px) {
        display: none;
    }
`

export const FooterEndCopyright = styled(FlexColumn)`
    @media(max-width: 575px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
    }
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 26px;
    cursor: pointer;
    :hover {
        color: #9D2550;
    }
`

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #303030;
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 14px;
    :hover {
        color: #9D2550;
    }
    span {
        color: #0E2B91;
        font-weight: 700;
        :hover {
            color: #0E2B91;
        }
    }
    @media(max-width: 575px) {
        display: none;
    }
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: grey;
    @media(max-width: 575px) {
        display: none;
    }
`

export const FooterEndWrapper = styled.div`
    display: flex;
    margin-top: 24px;
    @media(max-width: 575px) {
        flex-direction: column;
    }
`

export const Copyright = styled.a`
    font-weight: 400;
    font-size: 14px;
    color: #303030;
    cursor: pointer;
`

export const Feedback = styled.a`
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
    color: #0E2B91;
    cursor: pointer;
`

export const Icons = styled.div`
    margin-left: 105px;
    svg {
        width: 24px;
        height: 24px;
        margin-right: 24px;
        :hover {
            fill: #9D2550;
            stroke: #9D2550;
        }
    }
    @media(max-width: 575px) {
        margin-top: 28px;
        margin-left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Btn = styled.button`
    display: flex;
    margin-left: 382px;
    align-items: center;
    border: none;
    cursor: pointer;
    padding-left: 35px;
    border-radius: 4px;
    width: 312px;
    height: 50px;
    background-color: black;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    svg {
        margin-left: 15px;
    }
    @media(max-width: 575px) {
        margin-left: 0;
        width: 100%;
        margin-top: 44px;
        padding-left: 20px;
    }
`

export const MuiAccordion = styled(Accordion)`
    && {
        display: none;
        width: 100%;
        background-color: #F8F8F8;
        box-shadow: none;
        font-weight: 700;
        font-size: 14px;
        color: #303030;
        padding: 0;
        .MuiAccordionSummary-gutters {
            padding: 0;
            min-height: 0;
        }
        ::before {
            display: none;
        }
        @media(max-width: 575px) {
            display: block;
        }
    }
`

export const MuiAccordionSummary = styled(AccordionSummary)`
    padding: 0;
`

export const MuiAccordionDetails = styled(AccordionDetails)`
    && {
        padding: 0;
        div {
            font-weight: 500;
            margin-top: 10px;
        }
    }
`




export const InstagramSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4.75" stroke="#303030" strokeWidth="2.5" />
        <circle cx="12.0001" cy="11.9999" r="3.29545" stroke="#303030" strokeWidth="2.5" />
        <circle cx="17" cy="7" r="1.25" fill="#303030" />
    </svg>
)

export const FacebookSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.98651 12.874C8.94605 12.874 7.98266 12.874 7 12.874C7 11.668 7 10.5411 7 9.33503C7.96339 9.33503 8.90751 9.33503 9.90944 9.33503C9.92871 9.13732 9.94798 8.99892 9.94798 8.84075C9.94798 8.129 9.94798 7.41724 9.94798 6.70549C9.94798 6.01351 10.0443 5.32152 10.2755 4.64931C10.7765 3.24557 11.7977 2.41519 13.2042 2.11863C13.7245 2.01977 14.2832 2 14.8035 2C15.5164 2 16.2486 2.05931 17 2.09885C17 3.18626 17 4.21435 17 5.32152C16.4605 5.32152 15.9595 5.32152 15.4393 5.32152C15.1696 5.32152 14.9191 5.32152 14.6493 5.36106C14.0328 5.45992 13.6667 5.83557 13.5703 6.46824C13.5125 6.82412 13.5125 7.19976 13.5125 7.55564C13.5125 8.10923 13.5125 8.66282 13.5125 9.27571C14.6686 9.33503 15.7669 9.27571 16.9229 9.31526C16.8459 10.5015 16.6532 11.6482 16.5183 12.8543C15.5356 12.8543 14.5723 12.8543 13.5511 12.8543C13.5125 13.5265 13.5318 14.1196 13.5318 14.7127C13.5318 15.3059 13.5318 15.9188 13.5318 16.5119C13.5318 17.105 13.5318 17.7179 13.5318 18.311C13.5318 18.9042 13.5318 19.5171 13.5318 20.1102C13.5318 20.7033 13.5318 21.3162 13.5318 21.9687C12.3565 22.028 11.2004 21.9884 9.96725 21.9687C9.98651 18.9437 9.98651 15.9583 9.98651 12.874Z" fill="#9D2550" />
    </svg>
)

export const YoutubeSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6706 19.5147C9.46749 19.4492 7.28617 19.4056 5.08304 19.3402C4.5377 19.3183 3.97056 19.2529 3.42523 19.122C2.48726 18.9257 1.85468 18.3586 1.52748 17.4424C1.22209 16.5699 1.15665 15.6755 1.09121 14.7594C0.960335 12.7308 0.960336 10.7239 1.15665 8.6953C1.22209 7.99728 1.35297 7.32107 1.52748 6.64486C1.83286 5.5542 2.63995 4.8998 3.75243 4.76892C4.84309 4.63804 5.93375 4.5726 7.04623 4.55079C10.0783 4.50716 13.1103 4.50716 16.1423 4.52898C17.1458 4.52898 18.171 4.61623 19.1744 4.68167C19.5016 4.70348 19.8288 4.76892 20.156 4.85617C20.9194 5.09612 21.4866 5.59782 21.792 6.36129C22.1192 7.19019 22.2064 8.06272 22.2719 8.91344C22.4464 11.2256 22.4246 13.5597 22.1846 15.8719C22.141 16.3299 22.0319 16.7662 21.901 17.2025C21.5302 18.4458 20.6577 19.122 19.3925 19.2093C17.6911 19.3183 15.9896 19.3838 14.2664 19.4274C13.4157 19.4492 12.565 19.4274 11.7143 19.4274C11.6706 19.4928 11.6706 19.5147 11.6706 19.5147ZM15.0735 11.8582C13.1757 10.8766 11.3652 9.93866 9.51112 8.95706C9.51112 10.9639 9.51112 12.8834 9.51112 14.8903C11.3871 13.8869 13.1976 12.9271 15.0735 11.8582Z" fill="#303030" />
    </svg>

)

export const TikTokSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9903 7.00773C19.8193 7.00773 18.7388 6.62902 17.8712 5.99014C16.8761 5.25776 16.1611 4.18345 15.9086 2.94521C15.8461 2.63927 15.8124 2.32355 15.8092 2H12.464V10.9231L12.46 15.8108C12.46 17.1175 11.5883 18.2254 10.38 18.6151C10.0293 18.7282 9.65062 18.7818 9.25627 18.7606C8.75291 18.7336 8.2812 18.5854 7.87122 18.3459C6.99875 17.8365 6.40721 16.9125 6.39118 15.8554C6.36594 14.2032 7.73416 12.8562 9.42539 12.8562C9.75923 12.8562 10.0798 12.9094 10.38 13.006V10.5671V9.69038C10.0634 9.64461 9.7412 9.62074 9.41537 9.62074C7.56423 9.62074 5.83292 10.3719 4.59535 11.7252C3.65996 12.7478 3.09888 14.0526 3.01232 15.4207C2.8989 17.218 3.57259 18.9265 4.87909 20.187C5.07106 20.3721 5.27264 20.5438 5.48345 20.7023C6.60359 21.5438 7.97301 22 9.41537 22C9.7412 22 10.0634 21.9765 10.38 21.9308C11.7274 21.7359 12.9706 21.1338 13.9517 20.187C15.1572 19.0239 15.8232 17.4797 15.8305 15.8362L15.8132 8.53743C16.3883 8.97052 17.0171 9.32889 17.692 9.60705C18.7416 10.0394 19.8546 10.2584 21 10.2581V7.88682V7.00694C21.0008 7.00773 20.9911 7.00773 20.9903 7.00773Z" fill="#303030" />
    </svg>

)

export const EyeSvg = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.353794 7.35192C1.85119 4.61882 5.64463 0.333374 11.6611 0.333374C17.6777 0.333374 21.4711 4.61882 22.9685 7.35192C23.234 7.83653 23.2363 8.41799 22.9742 8.90443C21.5985 11.4571 17.9691 15.9215 11.6611 15.9215C5.35316 15.9215 1.72384 11.4571 0.348129 8.90443C0.0859714 8.418 0.0882875 7.83653 0.353794 7.35192ZM11.6609 12.0244C13.8131 12.0244 15.5579 10.2797 15.5579 8.12738C15.5579 5.9751 13.8131 4.23033 11.6609 4.23033C9.50858 4.23033 7.76381 5.9751 7.76381 8.12738C7.76381 10.2797 9.50858 12.0244 11.6609 12.0244Z" fill="white" />
    </svg>
)