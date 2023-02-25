import { COUNTRIES_API_URL, queryParams } from 'api';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import CountryList from 'components/organisms/CountryList/CountryList';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import { countryType } from 'lib/types/country';
import { useEffect, useState } from 'react';
import { Wrapper } from './FilterableTableCountry.styles';

const FilterableTableCountry = () => {
	const [countries, setCountries] = useState<countryType[]>([]);
	const [filteredCountries, setFilteredCountries] = useState<countryType[]>([]);
	const [filterByName, setFilterByName] = useState('');
	const [filterByRegion, setFilterByRegion] = useState('');

	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const data = await fetch(`${COUNTRIES_API_URL}/all?fields=${queryParams.basic}`);
				const jsonData = await data.json();
				setCountries(jsonData);
				setLoading(false);
			} catch (err) {
				setErrorMessage('Error fetching data.');
				setLoading(false);
			}
		})();
	}, []);

	useEffect(() => {
		const filtered = countries.filter((country) => {
			const countryName = country.name.toLowerCase();
			const countryRegion = country.region.toLowerCase();
			return countryName.includes(filterByName.toLowerCase()) && (filterByRegion === '' || countryRegion === filterByRegion);
		});
		setFilteredCountries(filtered);
	}, [countries, filterByName, filterByRegion]);

	const handleFilterName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterByName(e.target.value);
	};

	const handleFilterRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterByRegion(e.target.value);
	};

	return (
		<Wrapper>
			<SearchBar handleFilterRegion={handleFilterRegion} handleFilterName={handleFilterName} />
			{loading ? <Spinner /> : errorMessage ? <h2>{errorMessage}</h2> : filteredCountries.length === 0 ? <h2>No countries found.</h2> : <CountryList countries={filteredCountries} />}
		</Wrapper>
	);
};

export default FilterableTableCountry;
