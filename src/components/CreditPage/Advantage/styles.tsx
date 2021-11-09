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

export const PlusSvgIcon = () => (
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M6.26836 7.73064L0.724731 7.7238C0.324811 7.7234 0.000294449 7.39894 5.47996e-07 6.99917C-0.000486107 6.59957 0.323224 6.27591 0.722869 6.27641L6.28433 6.28327L6.27745 0.722825C6.27704 0.323144 6.60072 -0.000486049 7.00038 5.48003e-07C7.40012 0.000407502 7.72462 0.32486 7.72511 0.724622L7.73191 6.26913L13.2754 6.27593C13.6753 6.27642 13.9998 6.60087 14.0002 7.00055C14.0006 7.40016 13.677 7.72378 13.2772 7.72338L7.71595 7.7165L7.72281 13.2771C7.72331 13.6767 7.3996 14.0004 6.99994 13.9999C6.60012 13.9996 6.2756 13.6751 6.27521 13.2753L6.26836 7.73064Z" fill="#737373" />
	</svg>
)


