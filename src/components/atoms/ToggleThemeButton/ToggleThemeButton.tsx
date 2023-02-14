import { ReactComponent as MoonIcon } from 'lib/icons/moon.svg';
import { FC } from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5em;
	padding: 0.5em 1em;
	border: none;
	background-color: transparent;
	font-weight: 600;

	@media (min-width: 1024px) {
		cursor: pointer;
	}
	svg {
		width: 2rem;
		height: 2rem;
		fill: ${({ theme }) => theme.text};
		transition: fill 0.2s ease-in-out;
	}
`;

export default ToggleThemeButton;
