import ToggleThemeButton from 'components/atoms/ToggleThemeButton/ToggleThemeButton';
import { FC } from 'react';
import { StyledContainer, StyledTitle, Wrapper } from './Header.styles';

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

export default Header;
