import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

type PropTypes = {
	$active?: boolean
}

export const TabsWrapper = styled.section`
	padding-top: 62px;
`

export const MuiTabs = styled(Tabs)`
	&& {
		.MuiTabs-flexContainer {
			justify-content: center;
		}
		.MuiTabs-indicator {
			display: none;
		}
	}
`

export const MuiTab = styled(Tab)<PropTypes>`
	&& {
		&&.Mui-selected {
  			color: #fff;
		}
		width: 180px;
		height: 56px;
		background: ${props => props.$active ? '#1E2A41' : '#F2F2F2'};
		color: ${props => props.$active ? '#FFFFFF' : '#1E2A41'};
		margin-right: 4px;
		border-radius: 4px;
		font-weight: 400;
		font-size: 16px;
		font-family: "Rubik";
		text-transform: none;
	}
`

export const ContentWrapper = styled.div`
	margin-top: 48px;
`

export const TitleContent = styled.div`
	font-weight: 500;
	font-size: 30px;
	color: #1E2A41;
`
export const CardsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`
export const CardWrapper = styled.div`
	margin-top: 24px;
	width: 600px;
	height: 549px;
	background: #F2F2F2;
	border-radius: 4px;
`

export const CardTitleWrapper = styled.div`
	width: 100%;
	height: 90px;
	background: rgba(224, 224, 224, 0.6);
`

export const CardTitle = styled(TitleContent)`
	font-size: 24px;
	padding: 16px 177px 16px 32px;
`

export const CardContent = styled.div`
	padding: 24px 0 40px 32px;
`

export const CardSubtitle = styled.div`
	font-weight: 500;
	font-size: 18px;
	color: #1E2A41;
`

export const CardDescr = styled.div`
	margin-top: 8px;
	margin-bottom: 24px;
	font-weight: 400;
	font-size: 16px;
	color: #303030;
`

