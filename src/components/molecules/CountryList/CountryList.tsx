import { countryType } from 'lib/types/country';
import { FC } from 'react';
import styled from 'styled-components';

type CountryListProps = {
	countries: countryType[];
};

const CountryList: FC<CountryListProps> = ({ countries }) => (
	<Wrapper>
		{countries.map((country) => (
			<li>{country.name}</li>
		))}
	</Wrapper>
);

const Wrapper = styled.ul``;

export default CountryList;
