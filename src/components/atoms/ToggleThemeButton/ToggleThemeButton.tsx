import { ReactComponent as MoonIcon } from 'lib/icons/moon.svg';
import { FC } from 'react';
import { Button } from './ToggleThemeButton.styles';

type ToggleThemeButtonProps = {
	handleToggleTheme: () => void;
};

const ToggleThemeButton: FC<ToggleThemeButtonProps> = ({ handleToggleTheme }) => {
	return (
		<Button onClick={handleToggleTheme}>
			<MoonIcon />
			Dark Mode
		</Button>
	);
};

export default ToggleThemeButton;
