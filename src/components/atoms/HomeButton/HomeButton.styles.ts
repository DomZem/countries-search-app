import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper';

export const Button = styled(ViewWrapper)`
	display: flex;
	align-items: center;
	gap: 1rem;
	border: none;
	padding: 1.45rem 1.5rem;
	font-size: 1.4rem;
	font-weight: 600;

	@media (min-width: 1024px) {
		transition: box-shadow 0.2s linear;
		cursor: pointer;

		&:hover {
			box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
		}
	}
`;
