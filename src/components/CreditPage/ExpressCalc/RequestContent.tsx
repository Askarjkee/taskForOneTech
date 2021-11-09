import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { RequestModalContent } from './styles';

type PropTypes = {
	value: number,
	iin: string,
	phone: string,
	income: string,
	setOpenModalForm: React.Dispatch<React.SetStateAction<boolean>>
}


export const RequestContent = ({value, iin, phone, income, setOpenModalForm}: PropTypes) => {
	return (
		<>
			<DialogTitle id="alert-dialog-title">
				Вы принимаете соглашение ?
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					<RequestModalContent>Сумма: {value}</RequestModalContent>
					<RequestModalContent>Ваш ИИН: {iin}</RequestModalContent>
					<RequestModalContent>Ваш телефон: {phone}</RequestModalContent>
					<RequestModalContent>Ваш доход: {income}</RequestModalContent>
	
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<button onClick={() => setOpenModalForm(false)}>Принимаю</button>
				<button onClick={() => setOpenModalForm(false)} autoFocus>
					Принимаю
				</button>
			</DialogActions>
		</>
	)
}