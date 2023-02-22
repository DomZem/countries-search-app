import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Select = styled(ViewWrapper)`
	border: none;
	outline: none;
	padding: 1.4rem 3rem 1.4rem 1.4rem;
	font-weight: 600;

	@media (min-width: 1024px) {
		cursor: pointer;
		transition: box-shadow 0.2s linear;

		&:focus,
		&:hover {
			box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
		}
	}
`;
