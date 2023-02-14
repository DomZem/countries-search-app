import styled from 'styled-components';

export const Wrapper = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	background-color: ${({ theme }) => theme.element};
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.3);
	z-index: 990;
`;

export const StyledContainer = styled.div`
	height: 72px;
	max-width: 1440px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

export const StyledTitle = styled.h1`
	padding: 1rem 1.5rem;
	font-size: 2.2rem;

	@media (min-width: 1024px) {
		font-size: 2.5rem;
	}
`;
