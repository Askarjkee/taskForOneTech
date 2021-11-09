import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { RequestContent } from './RequestContent';
import { prettify } from '../../../commons/prettify';
import { isValidNumber, isValidValue, isValidIin } from '../../../commons/validation';
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
	MuiFormControl,
	ModalWrapper,
	ModalContent,
	ModalButtonLink,
	Request,
	RequestButton

} from './styles';

import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';

import { btns, style, initialState } from './mock';

export const Calculator = () => {
	const [value, setValue] = useState(initialState.value);
	const [checked, setChecked] = useState(initialState.checked);
	const [percent, setPercent] = useState(initialState.percent);
	const [time, setTime] = useState(initialState.time);
	const [result, setResult] = useState(initialState.result);
	const [valueError, setValueError] = useState(initialState.valueError);

	const [iin, setIin] = useState(initialState.iin);
	const [iinError, setIinError] = useState(initialState.iinError);
	const [showIin, setShowIin] = useState(initialState.showIin);

	const [phone, setPhone] = useState(initialState.phone)
	const [phoneError, setPhoneError] = useState(initialState.phoneError);

	const [income, setIncome] = useState(initialState.income)
	const [incomeError, setIncomeError] = useState(initialState.incomeError)

	const [openModalLink, setOpenModalLink] = useState(initialState.openModalLink);
	const [openModalForm, setOpenModalForm] = useState(initialState.openModalForm);


	const handleSliderChange = (event: Event, newValue: number | number[]): void => {
		setValueError(false)
		setValue(+newValue);
	};

	const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setChecked(event.target.checked);
	};

	const handleValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setValueError(isValidValue(event.target.value))
		if (!isNaN(+event.target.value)) {
			setValue(+event.target.value)
		}
	}

	const handleIinChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setIin(event.target.value)
		setIinError(isValidIin(event.target.value))
	}

	const handleNumberChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setPhone(event.target.value)
		setPhoneError(isValidNumber(event.target.value))
	}

	const handleIncomeChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (isNaN(+event.target.value)) {
			setIncomeError(true)
		} else {
			setIncomeError(false)
			setIncome(event.target.value)
		}
	}

	const onSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (!valueError && !iinError && !phoneError && !incomeError) {
			setOpenModalForm(true)
		} else {
			alert('заполните обязательные поля')
		}
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
		<Calc onSubmit={onSubmitForm}>
			<FlexWrapper>
				<CalcTitle margin={'20px'}>Сумма кредита</CalcTitle>
				<MuiInput
					error={valueError}
					value={value}
					endAdornment={<MuiAdornment position="end">₸</MuiAdornment>}
					type=":tel"
					onChange={handleValueChange}
					inputProps={{
						'aria-label': '₸',
					}} />
				{valueError && <ErrorMessage>Невалидное число</ErrorMessage>}
			</FlexWrapper>
			<Slider
				value={value}
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
					btns.map(item => <Button type="button" active={item.value === time}
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
			<MuiFormControl error={iinError} required margintop="40px" variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">ИИН</InputLabel>
				<FormInput
					type={showIin ? 'text' : 'password'}
					value={iin}
					onChange={handleIinChange}
					label="ИИН"
					endAdornment={
						<MuiAdornment position="end">
							<IconButton type="button" onClick={() => setShowIin(!showIin)}>
								{showIin ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</MuiAdornment>
					} />
				{iinError && <ErrorMessage>Невалидный ИИН</ErrorMessage>}
			</MuiFormControl>
			<FlexWrapper>
				<MuiFormControl error={phoneError} required variant="outlined" margintop="24px">
					<InputLabel >Номер телефона</InputLabel>
					<FormInput
						label="Номер телефона"
						width="288px"
						height="56px"
						value={phone}
						onChange={handleNumberChange}
						type=":tel" />
					{phoneError && <ErrorMessage>неверный формат</ErrorMessage>}
				</MuiFormControl>
				<MuiFormControl error={incomeError} required variant="outlined" margintop="24px">
					<InputLabel>Основной ежемесяч. доход, ₸ </InputLabel>
					<FormInput
						label="Основной ежемесяч. доход, ₸ "
						width="288px"
						height="56px"
						value={income}
						onChange={handleIncomeChange}
					/>
					{incomeError && <ErrorMessage>только числа</ErrorMessage>}
				</MuiFormControl>
			</FlexWrapper>
			<ModalWrapper>
				<ModalContent>
					<> Продолжая я подтверждаю, что ознакомился с </>
					<>
						<ModalButtonLink 
							type="button" 
							onClick={() => setOpenModalLink(true)}> 

							условиями соглашения 

						</ModalButtonLink>
						<Modal
							open={openModalLink}
							onClose={() => setOpenModalLink(false)}>
							<Box sx={style}>
								условия СОГЛАШЕНИЯ
							</Box>
						</Modal>
					</> и даю согласие на обработку своих персональных данных
				</ModalContent>
			</ModalWrapper>
			<Request>
				Для точного расчета необходимо оставить заявку
			</Request>
			<RequestButton type="submit">
				Оформить кредит
				<Dialog
					open={openModalForm}
					onClose={() => setOpenModalForm(false)}
					
				>
				<RequestContent 
					value={value} 
					iin={iin} 
					phone={phone} 
					income={income} 
					setOpenModalForm={setOpenModalForm}/>
				</Dialog>
			</RequestButton>
		</Calc>
	)
}