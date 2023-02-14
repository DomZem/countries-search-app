import CountryList from 'components/molecules/CountryList/CountryList';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import styled from 'styled-components';

const FilterableTableCountry = () => {
	return (
		<Wrapper>
			<SearchBar />
			<CountryList />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	gap: 4.5rem;
	margin: 3rem auto;
	padding: 1.5rem;
`;

export default FilterableTableCountry;
