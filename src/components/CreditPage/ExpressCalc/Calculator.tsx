import { useState, useEffect, ChangeEvent } from 'react';
import {
	Calc,
	FlexWrapper,
	CalcTitle,
	MuiInput,
	MuiAdornment,
	Slider,
	Description,
	Button,
	Line,
	ResultWrapper,
	Switch,
	SwitchWrapper,
	SwitchText,
	ResultColumn,
	ResultTitle,
	ResultValue,
	ErrorMessage,
	FormInput,
	MuiFormControl
} from './styles';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import { prettify } from '../../../commons/prettify';
import { btns } from './mock';

export const Calculator = () => {
	const [value, setValue] = useState(100000);
	const [checked, setChecked] = useState(false);
	const [percent, setPercent] = useState(17);
	const [time, setTime] = useState(24);
	const [result, setResult] = useState(1);
	const [error, setError] = useState(false);

	const [showIin, setShowIin] = useState(false);
	const [Iin, setIin] = useState(950813300285);

	const handleSliderChange = (event: Event, newValue: number | number[]): void => {
		setError(false)
		setValue(+newValue);
	};

	const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setChecked(event.target.checked);
	};

	const handleValueChange = (event: any): void => {
		if (isNaN(+event.target.value)) {
			setError(true)
		}
		else if (+event.target.value > 7000000 || +event.target.value < 0) {
			setError(true)
			setValue(+event.target.value)
		} else {
			setError(false)
			setValue(+event.target.value)
		}
	}

	const handleIinChange = (event: any): void => {
		setIin(event.target.value)
	}


	useEffect(() => {
		if (!checked) {
			setPercent(17)
		} else {
			setPercent(10)
		}
	}, [checked])

	useEffect(() => {
		const percentForCalc = (value * percent) / 100;
		const result = (value + percentForCalc) / time;
		setResult(Math.ceil(result));
	}, [value, time, percent])

	return (
		<Calc>
			<FlexWrapper>
				<CalcTitle margin={'20px'}>Сумма кредита</CalcTitle>
				<MuiInput
					error={error}
					value={value}
					endAdornment={<MuiAdornment position="end">₸</MuiAdornment>}
					type=":tel"
					onChange={(e) => handleValueChange(e)}
					inputProps={{
						'aria-label': '₸',
					}} />
				{error && <ErrorMessage>Невалидное число</ErrorMessage>}
			</FlexWrapper>
			<Slider value={value}
				onChange={handleSliderChange}
				min={100000}
				step={100000}
				max={7000000} />
			<FlexWrapper>
				<Description>100 000 ₸</Description>
				<Description>7 000 000 ₸</Description>
			</FlexWrapper>
			<CalcTitle margin="40px">Срок кредита</CalcTitle>
			<FlexWrapper>
				{
					btns.map(item => <Button active={item.value === time}
						key={item.id}
						onClick={() => setTime(item.value)}>

						{item.value}

					</Button>)
				}
			</FlexWrapper>
			<Description>Срок в месяцах</Description>
			<Line />
			<ResultWrapper>
				<ResultColumn>
					<ResultTitle>Ежемесячный платеж</ResultTitle>
					<ResultTitle>Ставка вознаграждения</ResultTitle>
				</ResultColumn>
				<ResultColumn>
					<ResultValue>{prettify(result)} ₸</ResultValue>
					<ResultValue>{percent} %</ResultValue>
				</ResultColumn>
				<SwitchWrapper>
					<Switch onChange={handleSwitchChange} />
					<SwitchText>
						Я получаю зарплату по карте ForteBank
					</SwitchText>
				</SwitchWrapper>
			</ResultWrapper>
			<MuiFormControl margintop="40px" variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">ИИН *</InputLabel>
				<FormInput
					type={showIin ? 'text' : 'password'}
					value={Iin}
					onChange={(e) => handleIinChange(e)}
					label="ИИН *"
					endAdornment={
						<MuiAdornment position="end">
							<IconButton onClick={() => setShowIin(!showIin)}>
								{showIin ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</MuiAdornment>
					}/>
			</MuiFormControl>
			<FlexWrapper>
				<MuiFormControl variant="outlined" margintop="24px">	
					<InputLabel >Номер телефона *</InputLabel>
					<FormInput 
					label="Номер телефона *" 
					width="288px" 
					height="56px"
					type=":tel" />
				</MuiFormControl>
				<MuiFormControl variant="outlined" margintop="24px">
					<InputLabel>Основной ежемесяч. доход, ₸ *</InputLabel>	
					<FormInput label="Основной ежемесяч. доход, ₸ *" width="288px" height="56px" />
				</MuiFormControl>
			</FlexWrapper>
		</Calc>
	)
}