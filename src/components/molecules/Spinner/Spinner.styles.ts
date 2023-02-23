import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 50px;
	height: 50px;
	transform: translate(-50%, -50%);
	border: 5px solid ${({ theme }) => theme.text};
	border-top: 5px solid ${({ theme }) => theme.background};
	border-radius: 50%;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
