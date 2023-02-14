import { addComans } from 'lib/helpers/addComans';
import { countryType } from 'lib/types/country';
import { FC } from 'react';
import { Content, FlagImage, Wrapper } from './CountryListItem.styles';

type CountryListItemProps = {
	country: countryType;
};

const CountryListItem: FC<CountryListItemProps> = ({ country: { name, population, region, capital, flags } }) => (
	<Wrapper>
		<FlagImage src={flags.svg} alt={`Flag of ${name}`} />
		<Content>
			<h3>{name}</h3>
			<p>
				Population: <span>{addComans(population)}</span>
			</p>
			<p>
				Region: <span>{region}</span>
			</p>
			<p>
				Capital: <span>{capital}</span>
			</p>
		</Content>
	</Wrapper>
);

export default CountryListItem;
