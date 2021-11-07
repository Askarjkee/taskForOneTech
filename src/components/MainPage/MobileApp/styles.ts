import styled from 'styled-components';

export const MobileAppWrapper = styled.section`
    margin-top: 168px;
    padding-top: 48px;
    background: #F2F2F2;
    border-radius: 4px;
    min-height: 323px;
    @media(max-width: 575px) {
        margin-top: 0;
        padding-top: 0;
        background: #FFF;
    }
`

export const Mobile = styled.div`
    position: relative;
    @media(max-width: 575px) {
        margin-top: 0;
        background: #F2F2F2;
        border-radius: 4px;
        padding: 24px 12px 0 12px;
        min-height: 600px;
    }
`

export const Content = styled.div`
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 24px;
    color: #1E2A41;
    @media(max-width: 575px) {
        margin-left: 12px;
    }
`

export const List = styled.ul`
    margin-top: 24px;
    list-style-position: inside;
    font-weight: 400;
    font-size: 16px;
    @media(max-width: 575px) {
        margin-left: 12px;
    }
`

export const ListItem = styled.li`
    margin-bottom: 16px;
`

export const Download = styled.div`
    margin-top: 24px;
    a {
        margin-right: 16px;
    }
    @media(max-width: 575px) {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100px;
            height: 35px;
        }
    }
`

export const ImgAbsolute = styled.img`
    cursor: pointer;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    right: 208px;
    @media(max-width: 575px) {
        width: 176px;
        height: 350px;
        right: 60px;
        top: 80%;
    }
`