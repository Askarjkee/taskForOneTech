import { Title, LinkToPrevious, Subtitle, Description } from './styles';
import { PasswordForm } from './PasswordForm';
import { Container } from '../../../styles/container';
import backIcon from '../../assets/img/password/back.png';

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





