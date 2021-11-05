import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const AdvantageWrapper = styled.section`
	padding-top: 64px;
`

export const Title = styled.div`
	font-weight: 500;
	font-size: 24px;
	color: #1E2A41;
	text-align: center;
`

export const AccordionTittle = styled(Title)`
	text-align: left;
	margin: 64px 0 32px 0;

`
export const DescrItem = styled.span`
	display: flex;
	align-items: center;
	margin-right: 34px;
	font-weight: 400;
	font-size: 16px;
	color: #303030;
`

export const DescrBlock = styled.div`
	margin-top: 43px;
	display: flex;
	justify-content: center;
	${DescrItem}:nth-child(3) {
		margin-right: 0;
	}
`

export const DescrImg = styled.img`
	margin-right: 17px;
`

export const Info = styled.p`
	max-width: 385px;
	margin: 0 auto;
	line-height: 150%;
	margin-top: 35px;
	font-weight: 400;
	font-size: 14px;
	text-align: center;
	color: #737373;
`

export const MuiAccordion = styled(Accordion)`
	&& {
		box-shadow: none;
	}
`

export const MuiAccordionSummary = styled(AccordionSummary)`
	&& {
		padding-left: 24px;
		.MuiAccordionSummary-content {
			font-weight: 500;
			font-size: 16px;		
			color: #303030;
		}
	}
`

export const MuiAccordionDetails = styled(AccordionDetails)`
	&& {
		padding-left: 24px;
	}
`


