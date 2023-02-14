import styled from 'styled-components';

export const Select = styled.select`
	border: none;
	outline: none;
	border-radius: 5px;
	padding: 1.4rem 3rem 1.4rem 1.4rem;
	background-color: ${({ theme }) => theme.element};
	color: ${({ theme }) => theme.text};
	font-weight: 600;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.3);
`;
