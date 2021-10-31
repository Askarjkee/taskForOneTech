import styled from 'styled-components';

export const MobileAppWrapper = styled.section`
    margin-top: 168px;
    padding-top: 48px;
    background: #F2F2F2;
    border-radius: 4px;
    min-height: 323px;
`

export const Mobile = styled.div`
    position: relative;
`

export const Content = styled.div`
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 24px;
    color: #1E2A41;
`

export const List = styled.ul`
    margin-top: 24px;
    list-style-position: inside;
    font-weight: 400;
    font-size: 16px;
`

export const ListItem = styled.li`
    margin-bottom: 16px;
`

export const Download = styled.div`
    margin-top: 24px;
    a {
        margin-right: 16px;
    }
`

export const ImgAbsolute = styled.img`
    cursor: pointer;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    right: 208px;
`