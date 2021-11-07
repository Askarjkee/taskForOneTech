import styled from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
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

export const ExpressCalcWrapper = styled.section`
	padding-top: 65px;
	input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none; 
    }
`

export const Title = styled.div`
	font-weight: 500;
	font-size: 24px;
	color: #1E2A41;
	text-align: center;
`

export const Calc = styled.div`
	margin: 0 auto;
	margin-top: 25px;
	padding: 40px 80px;
	background: #F2F2F2;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	max-width: 800px;
`

export const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`

export const CalcTitle = styled.div<PropTypes>`
	margin-top: ${props => props.margin ? props.margin : 0};
	font-weight: 400;
	font-size: 16px;
	color: #303030;
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
	}
`

export const MuiAdornment = styled(InputAdornment)`
	&& {
		font-weight: 400;
		font-size: 100px;
		text-align: right;
		color: #303030;
	}
`

export const Slider = styled(CalcInput)`
	&& {
		margin-right: 0;
		.MuiSlider-thumb {
    		border: 8px solid #fff;
		}
	}
`

export const Description = styled.span`
	margin-top: 18px;
	font-weight: 400;
	font-size: 12px;
	color: #737373;
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
`

export const Line = styled.span`
	margin-top: 40px;
	border: 1px solid #E0E0E0;
`
export const ResultWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 30px;
`

export const SwitchWrapper = styled.div`
	padding: 16px 15px;
	background: rgba(224, 224, 224, 0.6);
	border-radius: 4px;
	display: flex;
`

export const Switch = styled(CalcSwitch)`

`

export const SwitchText = styled.span`
	font-weight: 400;
	font-size: 16px;
	color: #303030;
	width: 190px;
	margin-left: 16px;
`

export const ResultTitle = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: #303030;
	margin-top: 24px;
`

export const ResultValue = styled.span`
	font-weight: 500;
	font-size: 24px;
	color: #1E2A41;
	margin-top: 16px;
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
`

export const FormInput = styled(OutlinedInput)<PropTypesInput>`
	width: ${props => props.width ? props.width : null};
	height: ${props => props.height ? props.height : null};
	input {
		font-weight: 400;
		font-size: 16px;
	}
`


export const MuiFormControl = styled(FormControl)<PropTypesForm>`
	&& {
		margin-top: ${props => props.margintop ? props.margintop : null};
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





