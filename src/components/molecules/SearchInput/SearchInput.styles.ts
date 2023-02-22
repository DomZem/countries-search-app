import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled(ViewWrapper)`
	width: 100%;
	max-width: 450px;
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding: 1rem 2rem;

	@media (min-width: 1024px) {
		transition: box-shadow 0.2s linear;

		&:focus-within,
		&:hover {
			box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
		}
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 0.5rem;
	outline: none;
	border: none;
	background-color: transparent;
	color: ${({ theme }) => theme.text};
	font-weight: 600;

	::placeholder {
		color: ${({ theme }) => theme.text};
	}
`;
