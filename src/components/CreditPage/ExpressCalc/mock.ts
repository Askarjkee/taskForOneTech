
export const btns = [
	{ id: 1, value: 6 },
	{ id: 2, value: 12 },
	{ id: 3, value: 18 },
	{ id: 4, value: 24 },
	{ id: 5, value: 36 },
	{ id: 6, value: 48 },
	{ id: 7, value: 60 }
]

export const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export const initialState = {
	value: 1500000,
	checked: false,
	percent: 17,
	time: 24,
	result: 1,
	valueError: false,
	iin: '',
	iinError: false,
	showIin: false,
	phone: '',
	phoneError: false,
	income: '',
	incomeError: false,
	openModalLink: false,
	openModalForm: false
}

