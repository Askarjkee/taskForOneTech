import { Input, Button } from '@mui/material';
import styled from 'styled-components';
import warning from '../assets/img/warning-4-64.png';
import { useInput } from '../commons';
import { useState } from 'react';

export const PasswordForm = () => {

    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const password = useInput('');
    const confirmPassword = useInput('');

    const onSubmit = () => {
        if (password.value === confirmPassword.value && password.value !== "qwerty" && password.value !== 123) {
            console.log(password.value, confirmPassword.value)
        } else {
            setConfirmPasswordError("Пароли не совпадают или не соответствуют требованием безопасности")
        }
    }

    return (
        <StyledForm>
            {(password.isDirty && password.isError) && <ErrorMessage>Неправильный формат</ErrorMessage>}
            <StyledInput 
                styleError={password.isError}
                onChange={e => password.onChange(e)} 
                value={password.value} 
                onBlur={e => password.onBlur(e)} 
                name="password" 
                placeholder={"Придумайте пароль*"} 
                type={"password"}
                autoComplete="off" />
            {((password.isDirty && confirmPassword.isDirty) && <ErrorMessage>{confirmPasswordError}</ErrorMessage>)}
            <StyledInput 
                styleError={password.isError}
                onChange={e => confirmPassword.onChange(e)} 
                value={confirmPassword.value} 
                onBlur={e => confirmPassword.onBlur(e)} 
                name="confirmPassword" 
                placeholder={"Повторите пароль*"} 
                type={"password"}
                autoComplete="off" />
            <Require>Пароль должен содержать:</Require>
            <StyledList>
                <StyledItem>латинские буквы</StyledItem>
                <StyledItem>1 заглавную латинскую букву</StyledItem>
                <StyledItem>цифры от 0-9</StyledItem>
                <StyledItem>символы(#$^+=!*()@%&_?-.)</StyledItem>
                <StyledItem>запрет последовательности букв (qwerty), цифр(123456)</StyledItem>
            </StyledList>
            <Attention>
                <img src={warning} alt="warning" />
                <span>Введенный пароль будет являться паролем для <br/> 
                      выпущенной ЭЦП. <br/>
                      Запомните введенные данные!
                </span>
            </Attention>
            <StyledButton disabled={password.isError} onClick={onSubmit} variant="contained">Подтвердить</StyledButton>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 417px;
`

const StyledInput = styled(Input)`
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

const Require = styled.div`
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
`


const StyledList = styled.ul`
    padding-left: 35px;
    margin: 0;
    margin-bottom: 15px;
`

const StyledItem = styled.li`
    color: grey;
    font-size: 13px;
    margin-bottom: 2px;
`

const Attention = styled.div`
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

const StyledButton = styled(Button)`
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

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
`


