import styled from 'styled-components';

export const Wrapper = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.element};
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.3);

	@media (min-width: 1024px) {
		cursor: pointer;
	}
`;

export const FlagImage = styled.img`
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	width: 100%;
	aspect-ratio: 160/98;
	object-fit: cover;
`;

export const Content = styled.div`
	padding: 2.5rem 2.5rem 4rem 2.5rem;

	h3 {
		margin-bottom: 1rem;
	}

	p {
		line-height: 1.65;
		font-weight: 600;

		span {
			font-weight: 300;
		}
	}
`;
