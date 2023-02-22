import styled from 'styled-components';

export const ViewWrapper = styled.div`
	border-radius: 5px;
	background-color: ${({ theme }) => theme.element};
	color: ${({ theme }) => theme.text};
	box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;
