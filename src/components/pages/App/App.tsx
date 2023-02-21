import FilterableTableCountry from 'components/organisms/FilterableTableCountry/FilterableTableCountry';
import Header from 'components/organisms/Header/Header';
import { GlobalStyle } from 'lib/styles/GlobalStyle';
import { darkTheme, lightTheme } from 'lib/styles/theme';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import CountryDetails from '../CountryDetails/CountryDetails';

const App = () => {
	const [theme, setTheme] = useState('light');

	const handleToggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<GlobalStyle />
				<Header handleToggleTheme={handleToggleTheme} />
				<Main>
					<Routes>
						<Route path='/' element={<FilterableTableCountry />} />
						<Route path='country/:name' element={<CountryDetails />} />
					</Routes>
				</Main>
			</ThemeProvider>
		</BrowserRouter>
	);
};

const Main = styled.main`
	width: 100%;
	min-height: 100vh;
	padding-top: 72px; // The same size as height of header component
`;

export default App;
