import { useInput } from '../../../commons';
import { useState } from 'react';
import { 
    StyledForm,
    StyledInput, 
    ErrorMessage, 
    Require, 
    StyledList, 
    StyledItem, 
    Attention, 
    StyledButton } from './styles';

import warning from '../../../assets/img/password/warning-4-64.png';

export const PasswordForm = () => {

    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const password = useInput('');
    const confirmPassword = useInput('');

    const onSubmit = () => {
        if (password.value === confirmPassword.value && password.value !== "qwerty" && password.value !== "123") {
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



