import CountryListItem from 'components/molecules/CountryListItem/CountryListItem';
import { countryType } from 'lib/types/country';
import { FC } from 'react';
import { Wrapper } from './CountryList.styles';

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

export default CountryList;
