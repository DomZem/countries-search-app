import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1280px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 4.5rem;
	margin: 3rem auto;
	padding: 1.5rem;
`;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (min-width: 725px) {
		flex-direction: row;
		gap: 3rem;
	}
`;

export const StyledImage = styled.img`
	max-width: 100%;

	@media (min-width: 725px) {
		max-width: 50%;
	}
`;

export const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	flex: 1;
`;

export const StyledDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;

	@media (min-width: 725px) {
		flex-direction: row;
	}
`;

export const StyledBorderCountries = styled.div`
	display: flex;
	align-items: center;

	p {
		display: inline-block;
		line-height: 1.65;
		font-weight: 600;
	}
`;
