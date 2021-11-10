import styled from 'styled-components';
import { MySwiper } from '../../MainPage/Cards/styles';


export const RequirementsWrapper = styled.section`
	padding-top: 64px;
	@media(max-width: 575px) {
		padding-top: 30px;
    }
`

export const Title = styled.div`
	font-weight: 500;
	font-size: 30px;
	color: #1E2A41;
	@media(max-width: 575px) {
		font-size: 24px;
    }
`

export const CardWrapper = styled.div`
	margin-top: 24px;
	display: flex;
`

export const Card = styled.div`
	margin-right: 24px;
	padding: 24px 0 24px 24px;
	width: 288px;
	height: 120px;
	background: #F5F5F5;
	border-radius: 4px;
`

export const CardTitle = styled.div`
	font-weight: 500;
	font-size: 16px;
	color: #303030;
`

export const CardSubtitle = styled.div`
	margin-top: 24px;
	font-weight: 400;
	font-size: 16px;
	color: #737373;
`

export const Swiper = styled(MySwiper)`
	&& {
		@media(max-width: 575px) {
			min-height: 200px;
    	}
	}
`

