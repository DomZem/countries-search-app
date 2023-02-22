import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled(ViewWrapper)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (min-width: 1024px) {
		transition: box-shadow 0.2s linear;
		cursor: pointer;

		&:hover {
			box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
		}
	}
`;

export const StyledImage = styled.img`
	width: 100%;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	aspect-ratio: 160/98;
	object-fit: cover;
`;

export const StyledContent = styled.div`
	padding: 2.5rem 2.5rem 4rem 2.5rem;
`;

export const StyledTitle = styled.h3`
	margin-bottom: 1rem;
`;
