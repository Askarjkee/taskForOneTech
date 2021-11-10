import styled from 'styled-components';
import { Title, Subtitle, Descr, SliderBtn } from '../../MainPage/Slider/styles';

export const CreditWrapper = styled.section`
	margin-top: 88px;
	background-color: #F2F2F2;
	@media(max-width: 575px) {
		margin: 0;
		padding-bottom: 100px;
		position: relative;
    }
`

export const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	@media(max-width: 575px) {
        display: flex;
		flex-direction: column;
    }
	
`

export const Content = styled.div`
	
`

export const CreditTitle = styled(Title)`
	color: #1E2A41;
`

export const CreditSubtitle = styled(Subtitle)`
	color: #1E2A41;
	margin-top: 32px;
	@media(max-width: 575px) {
        font-weight: 700;
		font-size: 24px;
		text-align: center;
    }
`
export const CreditDescr = styled(Descr)`
	color: #1E2A41;
	margin-top: 24px;
	@media(max-width: 575px) {
		margin-top: 13px;
        font-weight: 400;
		font-size: 16px;
		text-align: center;
    }
`

export const CreditBtn = styled(SliderBtn)`
	width: 201px;
	height: 52px;
	background: #9D2550;
	color: #fff;
	margin: 70px 0 86px 0;
	@media(max-width: 575px) {
		position: absolute;
		margin: 0;
		bottom: 35px;
		left: 50%;
    	transform: translateX(-50%);
    }
`

export const CreditImg = styled.img`
	@media(max-width: 575px) {
        width: 240px;
		height: 186px;
		
    }
`
