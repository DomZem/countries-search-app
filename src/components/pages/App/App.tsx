import FilterableTableCountry from 'components/organisms/FilterableTableCountry/FilterableTableCountry';
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
				<FilterableTableCountry />
			</Main>
		</ThemeProvider>
	);
};

const Main = styled.main`
	width: 100%;
	min-height: 100vh;
	padding-top: 72px; // The same size as height of header component
`;

export default App;
