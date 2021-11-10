import styled from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import requestImg from '../../../assets/img/calc/request.svg';
import { CalcInput, CalcSwitch } from '../../MainPage/Calculator/styles';

type PropTypes = {
	margin?: string;
}

type PropTypesBtn = {
	active?: boolean;
}

type PropTypesInput = {
	width?: string | null
	height?: string | null
}

type PropTypesForm = {
	margintop?: string | null
}

type PropTypesDescr = {
	$error: boolean
}

export const ExpressCalcWrapper = styled.section`
	padding-top: 65px;
	input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none; 
    }
	@media(max-width: 575px) {
        padding-top: 40px;
    }
`

export const Title = styled.div`
	font-weight: 500;
	font-size: 24px;
	color: #1E2A41;
	text-align: center;
	@media(max-width: 575px) {
        text-align: left;
		font-size: 27px;
    }
`

export const Calc = styled.form`
	margin: 0 auto;
	margin-top: 25px;
	padding: 40px 80px;
	background: #F2F2F2;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	max-width: 800px;
	@media(max-width: 575px) {
        padding: 26px 0;
    }
`

export const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	@media(max-width: 575px) {
        flex-direction: column;
    }
`

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media(max-width: 575px) {
		margin-top: 16px;
		flex-wrap: wrap;
		justify-content: flex-start;
		padding: 0 14px;
    }
`

export const DescrWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media(max-width: 575px) {
        padding: 0 77px;
		margin-bottom: 24px;
    }
`

export const CalcTitle = styled.div<PropTypes>`
	margin-top: ${props => props.margin ? props.margin : 0};
	font-weight: 400;
	font-size: 16px;
	color: #303030;
	@media(max-width: 575px) {
        margin-top: 0;
		font-weight: 700;
		font-size: 16px;
		text-align: center;
		color: #1E2A41;
    }
`

export const MuiInput = styled(OutlinedInput)`
	&& {
		width: 208px;
		height: 44px;
		background: #FFFFFF;
		input {
			font-weight: 400;
			font-size: 24px;
			text-align: right;
			color: #1E2A41;
		}
		@media(max-width: 575px) {
			width: 175px;
			height: 40px;
			margin-top: 16px;
			input {
				text-align: left;
			}
    	}
	}
`

export const MuiAdornment = styled(InputAdornment)`
	&& {
		font-weight: 400;
		font-size: 100px;
		text-align: right;
		color: #303030;
		@media(max-width: 575px) {
			display: none;
    	}
	}
`

export const Slider = styled(CalcInput)`
	&& {
		margin-right: 0;
		.MuiSlider-thumb {
    		border: 8px solid #fff;
		}
		@media(max-width: 575px) {
			display: none;
    	}
	}
`

export const Description = styled.span<PropTypesDescr>`
	margin-top: 18px;
	font-weight: 400;
	font-size: 12px;
	color: #737373;
	display: ${props => props.$error ? 'none' : 'block'};
	@media(max-width: 575px) {
        margin-top: 12px;
		text-align: center;
    }
`

export const Button = styled.button<PropTypesBtn>`
	width: 70px;
	height: 36px;
	background: #9D2550;
	border-radius: 4px;
	opacity: ${props => props.active ? 1 : 0.5};
	border: none;
	margin-top: 24px;
	cursor: pointer;
	font-weight: 400;
	font-size: 18px;
	color: #FFFFFF;
	@media(max-width: 575px) {
		margin-right: 6px;
		width: 59px;
		margin-top: 8px;
    }
`

export const Line = styled.span`
	margin-top: 40px;
	border: 1px solid #E0E0E0;
	@media(max-width: 575px) {
		margin: 0 14px;
		margin-top: 24px;
    }
`
export const ResultWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 30px;
	@media(max-width: 575px) {
		position: relative;
		flex-direction: column;
		padding-top: 24px;
    }
`

export const SwitchWrapper = styled.div`
	padding: 16px 15px;
	background: rgba(224, 224, 224, 0.6);
	border-radius: 4px;
	display: flex;
	@media(max-width: 575px) {
		margin-top: 55px;
    }
`

export const Switch = styled(CalcSwitch)`
	&& {
		@media(max-width: 575px) {
			.MuiSwitch-track {
				width: 29px;
			}
    	}
	}
`

export const SwitchText = styled.span`
	font-weight: 400;
	font-size: 16px;
	color: #303030;
	width: 190px;
	margin-left: 16px;
	@media(max-width: 575px) {
		font-size: 13px;
		color: #737373;
		margin-left: 0;
    }
`

export const ResultTitle = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: #303030;
	margin-top: 24px;
	@media(max-width: 575px) {
		text-align: center;
		color: #737373;
		margin-top: 51px;
    }
`

export const ResultValue = styled.span`
	font-weight: 500;
	font-size: 24px;
	color: #1E2A41;
	margin-top: 16px;
	@media(max-width: 575px) {
		font-weight: 700;
		text-align: center;
		position: absolute;
		top: 50px;
		left: 50%;
    	transform: translateX(-50%);
    }
`

export const ResultColumn = styled.div`
	display: flex;
	flex-direction: column;
	${ResultValue}:nth-child(1) {
		margin-top: 0;
	}
	${ResultTitle}:nth-child(1) {
		margin-top: 11px;
	}
	@media(max-width: 575px) {
		${ResultTitle}:nth-child(1) {
			margin-top: 0;
		}
		${ResultValue}:nth-child(2) {
			top: 100px;
		}
    }
	
`

export const FormInput = styled(OutlinedInput) <PropTypesInput>`
	&& {
		width: ${props => props.width ? props.width : null};
		height: ${props => props.height ? props.height : null};
		background: #fff;
		input {
			font-weight: 400;
			font-size: 16px;
		}
		@media(max-width: 575px) {
			padding: 0;
			width: 100%;
			
    	}
	}
`

export const MuiInputLabel = styled(InputLabel)`
	&& {
		@media(max-width: 575px) {
			font-size: 14px;
    	}
	}
`


export const MuiFormControl = styled(FormControl) <PropTypesForm>`
	&& {
		margin-top: ${props => props.margintop ? props.margintop : null};
		@media(max-width: 575px) {
			width: 260px;
			margin: 0 auto;
			margin-top: 24px;
    	}
	}
	
`

export const ErrorMessage = styled.span`
	display: block;
	position: absolute;
	font-weight: 400;
	font-size: 15px;
	color: #d32f2f;
	right: 0;
	top: -15px;
`

export const ErrorValueMessage = styled(ErrorMessage)`
	top: 80px;
	right: 15px;
`

export const ModalWrapper = styled.div`
	margin-top: 24px;
	
`

export const ModalWindow = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400;
	background-color: #fff;
	min-height: 200px;
	border: 2px solid #000;
	box-shadow: 24;
`

export const ModalContent = styled.div`
	font-weight: 400;
	font-size: 14px;
	@media(max-width: 575px) {
		padding: 0 14px;
    }
`

export const ModalButtonLink = styled.button`
	border: none;
	color: #0E2B91;
	text-decoration-line: underline;
	cursor: pointer;
	font-weight: 400;
	font-size: 14px;

`

export const Request = styled.span`
	margin-top: 24px;
	font-weight: 400;
	font-size: 14px;
	color: #737373;
	@media(max-width: 575px) {
		display: none;
	}
`

export const RequestButton = styled.button`
	margin-top: 24px;
	border: none;
	cursor: pointer;
	width: 206px;
	height: 44px;
	background: #9D2550;
	border-radius: 4px;

	font-weight: 500;
	font-size: 16px;
	color: #FFFFFF;
	@media(max-width: 575px) {
		margin: 0 auto;
		margin-top: 40px;
	}
`


export const MobileBtnPlus = styled.button`
	display: none;
	@media(max-width: 575px) {
		display: block;
		position: absolute;
		top: 35px;
		right: 12px;
		width: 40px;
		height: 40px;
		background: #9D2550;
		border-radius: 4px;
		color: #fff;
		font-size: 30px;
		border: none;
	}
`

export const MobileBtnMinus = styled(MobileBtnPlus)`
	@media(max-width: 575px) {
		left: 12px;
	}
`

export const MobileInfoTitle = styled.div`
	display: none;
	@media(max-width: 575px) {
		margin-top: 40px;
		display: block;
		font-weight: 500;
		font-size: 18px;
		text-align: center;
		color: #1E2A41;
	}
`

export const MobileInfoSubtitle = styled.div`
	display: none;
	@media(max-width: 575px) {
		display: block;
		font-weight: 400;
		font-size: 16px;
		text-align: center;
		color: #1E2A41;
		margin-top: 22px;
	}
`

export const RequestWrapper = styled.div`
	position: relative;
	padding-top: 75px;
	background: url(${requestImg}) center no-repeat;
`


export const RequestTitle = styled.div`
	font-weight: 500;
	font-size: 18px;
	text-align: center;
	color: #1E2A41;
`

export const RequestSubtitle = styled.div`
	margin-top: 16px;
	font-weight: 400;
	font-size: 15px;
	text-align: center;
	color: #303030;
`

export const RequestDescr = styled.div`
	margin-top: 20px;
	font-weight: 400;
	font-size: 14px;
	text-align: center;
	color: #737373;
`

export const RequestApps = styled.div`
	margin-top: 77px;
	display: flex;
	justify-content: center;
`

export const RequestSocial = styled(RequestApps)`
	margin-top: 16px;
	align-items: center;
`

export const RequestAppsImg = styled.img`
	width: 39px;
	height: 38px;
	margin: 0 12px;
`

export const RequestSocialImg = styled(RequestAppsImg)`
	width: 24px;
	height: 24px;
`

export const RequestBtnClose = styled.button`
	width: 132px;
	height: 44px;
	border: none;
	background: #1E2A41;
	border-radius: 4px;
	display: block;
	margin: 0 auto;
	margin-top: 50px;
	font-weight: 500;
	font-size: 16px;
	color: #FFFFFF;
`








