import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	max-width: 450px;
	display: flex;
	align-items: center;
	gap: 1.5rem;
	border-radius: 5px;
	padding: 1rem 2rem;
	background-color: ${({ theme }) => theme.element};
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.3);

	svg {
		width: 2rem;
		height: 2rem;
		fill: ${({ theme }) => theme.text};
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 0.5rem;
	outline: none;
	border: none;
	background-color: transparent;
	font-weight: 600;
	color: ${({ theme }) => theme.text};

	::placeholder {
		color: ${({ theme }) => theme.text};
	}
`;
