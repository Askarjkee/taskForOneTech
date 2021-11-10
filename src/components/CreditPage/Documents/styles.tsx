import styled from 'styled-components';

export const DocumentsWrapper = styled.section`
	padding-top: 64px;
	@media(max-width: 575px) {
        padding-top: 30px;
    }
`

export const Title = styled.div`
	margin-bottom: 30px;
	font-weight: 500;
	font-size: 24px;
	color: #1E2A41;
	@media(max-width: 575px) {
        margin-bottom: 0;
    }
`

export const SubtitleBlock = styled.div`
	display: flex;
	align-items: center;
	margin-top: 16px;
`

export const Subtitle = styled.span`
	font-weight: 400;
	font-size: 14px;
	color: #1E2A41;
`

export const Icon = styled.img`
	margin-right: 4px;
	width: 16px;
	height: 16px;
`

export const Questions = styled.div`
	margin-top: 27px;
	width: 328px;
	font-weight: 400;
	font-size: 12px;
	color: #737373;
	@media(max-width: 575px) {
        width: 100%;
		font-size: 12px;
		line-height: 15px;
    }
`

export const Link = styled.a`
	font-weight: 400;
	font-size: 12px;
	color: #0E2B91;
`