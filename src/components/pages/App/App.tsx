import Header from 'components/organisms/Header/Header';
import { GlobalStyle } from 'lib/styles/GlobalStyle';
import { darkTheme, lightTheme } from 'lib/styles/theme';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const App = () => {
	const [theme, setTheme] = useState('light');

	const handleToggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<Header handleToggleTheme={handleToggleTheme} />
			<Main>
				<p>Hello world!</p>
			</Main>
		</ThemeProvider>
	);
};

const Main = styled.main`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default App;
