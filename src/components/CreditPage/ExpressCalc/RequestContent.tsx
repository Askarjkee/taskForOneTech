import { Header } from '../../Header';
import { Container } from '../../../styles/container';
import { RequestWrapper, RequestTitle, RequestSubtitle, RequestApps, RequestAppsImg, RequestDescr, RequestSocial, RequestSocialImg, RequestBtnClose } from './styles';
import googleIcon from '../../../assets/img/calc/google.svg';
import appleIcon from '../../../assets/img/calc/apple.svg';
import youtubeIcon from '../../../assets/img/calc/youtube.svg';
import tiktokIcon from '../../../assets/img/calc/tiktok.svg';
import facebookIcon from '../../../assets/img/calc/fb.svg';
import instagramIcon from '../../../assets/img/calc/instagram.svg';


type PropTypes = {
	value: number,
	iin: string,
	phone: string,
	income: string,
	setOpenModalForm: React.Dispatch<React.SetStateAction<boolean>>
}


export const RequestContent = ({ value, iin, phone, income, setOpenModalForm }: PropTypes) => {
	return (
		<>
			<Header />
			<RequestWrapper>
				<Container>
					<RequestTitle>Ваша заявка отправлена</RequestTitle>
					<RequestSubtitle>Спасибо, что вы с нами в Fortовые дни! Мы сейчас посмотрим вашу заявку и перезвоним.</RequestSubtitle>
					<RequestApps>
						<RequestAppsImg src={appleIcon} alt="apple"/>
						<RequestAppsImg src={googleIcon} alt="google"/>
					</RequestApps>
					<RequestDescr>Пока предлагаем скачать наше мобильное приложение или подписаться на соцсети.</RequestDescr>
					<RequestSocial>
						<RequestSocialImg src={instagramIcon} alt="instagram"/>
						<RequestSocialImg src={facebookIcon} alt="facebook"/>
						<RequestSocialImg src={youtubeIcon} alt="youtube"/>
						<RequestSocialImg src={tiktokIcon} alt="tiktok"/>
					</RequestSocial>
					<RequestBtnClose onClick={() => setOpenModalForm(false)}>Закрыть</RequestBtnClose>
				</Container>
			</RequestWrapper>
		</>
	)
}