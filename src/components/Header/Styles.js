import styled from 'styled-components';
import Link from '@mui/material/Link';

export const HeaderWrapper = styled.header`
    height: 50px;
    background-color: #F8F8F8;
`

export const Container = styled.div`
    max-width: 1224px;
    margin: 0 auto;
`

export const HeaderItems = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`

export const Settings = styled.div`
    display: flex;
    align-items: center;
    margin-right: 86px;
`

export const StyledLink = styled(Link)`
    && {
        text-decoration: none;
        cursor: pointer;
    }
`

export const ForteLogo = styled.img`
    width: 26px;
    height: 26px;
    margin-right: 34px;
`

export const Language = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #303030;
    transition: 2s all;
    cursor: pointer;
    margin-right: 40px;
    svg {
        margin-left: 12px;
    }   
    :hover {
        span {
            color: #9D2550;
        }
        svg {
            transform: rotate(180deg);
            stroke:#9D2550;
        }
    }
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 2s all;
    :hover {
        span {
            color: #9D2550;
        }
        svg {
            g {
                fill: #9D2550;
            }
        }
    }
`

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 174px;
`

export const NavItem = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: #303030;
    margin-right: 30px;
    transition: 0.2s all;
    :hover {
    color: #9D2550;
    padding-bottom: 14px;
    border-bottom: 2px solid #9D2550;
    }
`

export const Cabinet = styled.div`
    display: flex;
    align-items: center;
`

export const Contacts = styled(StyledLink)`
    display: flex;
    align-items: center;
    margin-right: 42px;
    transition: 2s all;
    svg {
        margin-right: 7px;
    }
    :hover {
        span {
            color: #9D2550;
        }
        svg {
            stroke: #9D2550;
            fill: #9D2550;
        }
    }
`

export const Login = styled(Contacts)`
    margin: 0;
`

export const HeaderContent = styled.span` 
    font-weight: 400;
    font-size: 14px;    
    color: #303030;
`