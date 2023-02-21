import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	border: none;
	padding: 1rem 1.5rem;
	background-color: transparent;
	color: ${({ theme }) => theme.text};
	font-weight: 600;

	@media (min-width: 1024px) {
		cursor: pointer;
	}

	svg {
		width: 2rem;
		height: 2rem;
		fill: ${({ theme }) => theme.text};
	}
`;
