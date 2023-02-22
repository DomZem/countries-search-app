import Header from 'components/organisms/Header/Header';
import FilterableTableCountry from 'components/pages/FilterableTableCountry/FilterableTableCountry';
import { GlobalStyle } from 'lib/styles/GlobalStyle';
import { darkTheme, lightTheme } from 'lib/styles/theme';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CountryDetails from '../CountryDetails/CountryDetails';
import { Main } from './App.styles';

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

export default App;
