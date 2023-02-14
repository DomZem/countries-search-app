import CountryListItem from 'components/atoms/CountryListItem/CountryListItem';
import { countryType } from 'lib/types/country';
import { FC } from 'react';
import styled from 'styled-components';

type CountryListProps = {
	countries: countryType[];
};

const CountryList: FC<CountryListProps> = ({ countries }) => (
	<Wrapper>
		{countries.map((country, index) => (
			<CountryListItem country={country} key={index} />
		))}
	</Wrapper>
);

const Wrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 5rem;
`;

export default CountryList;
