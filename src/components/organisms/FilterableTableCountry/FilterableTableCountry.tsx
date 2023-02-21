import CountryList from 'components/molecules/CountryList/CountryList';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import { countryType } from 'lib/types/country';
import { useEffect, useState } from 'react';
import { Wrapper } from './FilterableTableCountry.styles';

const FilterableTableCountry = () => {
	const [countries, setCountries] = useState<countryType[]>([]);
	const [filteredCountries, setFilteredCountries] = useState<countryType[]>([]);
	const [filterByName, setFilterByName] = useState('');
	const [filterByRegion, setFilterByRegion] = useState('');

	const api = async () => {
		const data = await fetch('https://restcountries.com/v2/all?fields=name,capital,population,region,flag');
		const jsonData = await data.json();
		setCountries(jsonData);
	};

	useEffect(() => {
		api();
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
			<CountryList countries={filteredCountries} />
		</Wrapper>
	);
};

export default FilterableTableCountry;
