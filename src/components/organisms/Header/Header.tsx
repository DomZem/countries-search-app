import ToggleThemeButton from 'components/atoms/ToggleThemeButton/ToggleThemeButton';
import { FC } from 'react';
import styled from 'styled-components';

type HeaderProps = {
	handleToggleTheme: () => void;
};

const Header: FC<HeaderProps> = ({ handleToggleTheme }) => (
	<Wrapper>
		<StyledContainer>
			<StyledTitle>Where in the world?</StyledTitle>
			<ToggleThemeButton handleToggleTheme={handleToggleTheme} />
		</StyledContainer>
	</Wrapper>
);

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	padding: 1.5rem;
	background-color: ${({ theme }) => theme.element};
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.3);
	z-index: 990;
`;

const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1440px;
	margin: 0 auto;
`;

const StyledTitle = styled.h1`
	font-size: 2.2rem;

	@media (min-width: 1024px) {
		font-size: 2.5rem;
	}
`;

export default Header;
