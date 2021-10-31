import styled from 'styled-components';
import { Input, Button } from '@mui/material';

type PropTypes = {
    styleError: boolean
}

export const Title = styled.h1`
    font-size: 14px;
    text-align: center;
    margin: 80px 0 35px 0;
    @media(max-width: 575px) {
      margin-top: 50px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 10px 0;
`

export const Description = styled.h3`
  color: grey;
  font-size: 15px;
  text-align: center;
  margin: 0 0 25px 0;
`

export const LinkToPrevious = styled.a`
  position: absolute;
  width: 25px;
  height: 25px;
  img {
      width: 100%;
  }
  @media(max-width: 575px) {
      width: 17px;
      height: 17px;
  }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 417px;
`

export const StyledInput = styled(Input) <PropTypes>`
    && {
        width: 100%;
        font-size: 14px;
        font-weight: 700;
        margin: 0 auto;
        border: ${props => props.styleError ? "2px solid red" : "1px solid grey"};
        border-radius: 5px;
        box-shadow: none;
        margin-bottom: 15px;
        padding-left: 10px;
        :before {
            content: none;
        }
        :after {
            border-bottom: none;
        }
    }
`;

export const Require = styled.div`
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
`


export const StyledList = styled.ul`
    padding-left: 35px;
    margin: 0;
    margin-bottom: 15px;
`

export const StyledItem = styled.li`
    color: grey;
    font-size: 13px;
    margin-bottom: 2px;
`

export const Attention = styled.div`
    width: 100%;
    height: 80px;
    border: 1px solid grey;
    border-radius: 8px;
    display: flex;
    margin-bottom: 40px;
    img {
        margin: 23px 6px 0 13px;
        width: 17px;
        height: 17px;
    }
    span {
        margin-top: 13px;
        font-size: 13px;
        color: grey;
    }

    @media(max-width: 575px) {
        span {
            font-size: 10px;
        }
    }
`

export const StyledButton = styled(Button)`
    && {
        display: block;
        margin: 0 auto;
        background-color: #EE1D75;
        width: 250px;
        text-transform: none;
        :hover {
            background-color: #EE1D75;
        }
    }
`

export const ErrorMessage = styled.div`
    color: red;
    text-align: center;
`

