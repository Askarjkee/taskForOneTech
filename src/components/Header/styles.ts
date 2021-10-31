import styled from 'styled-components';
import Link from '@mui/material/Link';
import { colors } from '../../styles/colors';

export const HeaderWrapper = styled.header`
    height: 50px;
    background-color: #F8F8F8;
`

export const HeaderItems = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`

export const SettingsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 86px;
`

export const StyledLink = styled(Link)`
    && {
        text-decoration: none;
    }
`

export const ForteLogoWrapper = styled(StyledLink)`
    svg {
        width: 26px;
        height: 26px;
        margin-right: 34px;
    }
`

export const Language = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: ${colors.mainColor};
    transition: 2s all;
    cursor: pointer;
    margin-right: 30px;
    svg {
        margin-left: 12px;
    }   
    :hover {
        span {
            color: ${colors.hoverColor};
        }
        svg {
            transform: rotate(180deg);
            stroke: ${colors.hoverColor};
        }
    }
`

export const HiddenLanguage = styled.div`
    width: 50px;
    background-color: white;
    display: none;
    position: absolute;
    a {
        text-decoration: none;
        display: block;
        font-weight: 400;
        font-size: 14px;
        color: ${colors.mainColor};
        padding-top: 3px;
        margin-top: 3px;
        :hover {
            color: ${colors.hoverColor};
        }
    }
    ${Language}:hover & {
        display: block;
    }
`

export const Location = styled.div`
    
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 2s all;
    svg {
        margin-right: 10px;
    }
    :hover {
        span {
            color: ${colors.hoverColor};
        }
        svg {
            g {
                fill: ${colors.hoverColor};
            }
        }
    }
`

export const HiddenLocation = styled(HiddenLanguage)`
    ${Location}:hover & {
        display: block;
    }
`

export const NavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 174px;
`

export const NavItem = styled(StyledLink)`
    && {
        font-weight: 500;
        font-size: 16px;
        color: ${colors.mainColor};
        margin-right: 30px;
        transition: 0.2s all;
        :hover {
            color: ${colors.hoverColor};
            padding-bottom: 14px;
            border-bottom: 2px solid ${colors.hoverColor};
        }
    }
`

export const CabinetWrapper = styled.div`
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
            color: ${colors.hoverColor};
        }
        svg {
            stroke: ${colors.hoverColor};
            fill: ${colors.hoverColor};
        }
    }
`

export const Login = styled(Contacts)`
    margin: 0;
`

export const HeaderContent = styled.span` 
    font-weight: 400;
    font-size: 14px;    
    color: ${colors.mainColor};
    :nth-child(6) {
        ${NavItem} {
            margin: 0;
        }
    }
`

export const SubheaderLink = styled(StyledLink)`
    && {
        text-decoration: none;
        :hover {
            span {
                color: ${colors.hoverColor};
            }
        }
    }
`

export const SubheaderItems = styled.div`
    height: 88px;
    display: none;
    position: absolute;
    left: 629px;
    top: 50px;
    ${HeaderContent}:hover & {
        display: block;
    }
    
`

export const SubheaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 19px;
`

export const SubheaderItem = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 56px;
    img {
        margin-bottom: 10px;
        width: 24px;
        height: 24px;
    }
`

export const SubheaderContent = styled(HeaderContent)`
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: ${colors.mainColor};
`


