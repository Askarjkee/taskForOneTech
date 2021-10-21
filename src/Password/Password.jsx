import React from 'react';
import { PasswordForm } from './PasswordForm';
import styled from "styled-components";
import backIcon from '../assets/img/back.png';

export const Password = () => {

    return (
        <Container>
            <Title>Проверка пароля</Title>
            <LinkToPrevious href="#">
                <img src={backIcon} alt="back"></img>
            </LinkToPrevious>
            <Subtitle>Пароль</Subtitle>
            <Description>Придумайте новый пароль</Description>
            <PasswordForm />
        </Container>
    )
}

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    @media(max-width: 575px) {
        max-width: 275px;
    }
`

const Title = styled.h1`
  font-size: 14px;
  text-align: center;
  margin: 80px 0 35px 0;
  @media(max-width: 575px) {
        margin-top: 50px;
  }
`;

const Subtitle = styled.h2`
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 10px 0;
`

const Description = styled.h3`
    color: grey;
    font-size: 15px;
    text-align: center;
    margin: 0 0 25px 0;
`

const LinkToPrevious = styled.a`
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




