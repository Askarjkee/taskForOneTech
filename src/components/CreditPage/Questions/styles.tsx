import styled from 'styled-components';

export const QuestionWrapper = styled.section`
	padding-top: 64px;
	@media(max-width: 575px) {
		padding: 0;
    }
`

export const Info = styled.div`
	margin-top: 32px;
	font-weight: 400;
	font-size: 12px;
	color: #999999;
	@media(max-width: 575px) {
		line-height: 15px;
    }
`

export const Link = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	text-decoration-line: underline;
	color: #0E2B91;
`