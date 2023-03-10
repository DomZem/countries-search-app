import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 3rem;

	@media (min-width: 475px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;
