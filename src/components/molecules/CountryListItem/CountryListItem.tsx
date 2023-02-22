import { DetailList } from 'components/atoms/DetailList/DetailList';
import { addComans } from 'lib/helpers/addComans';
import { countryType } from 'lib/types/country';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { StyledContent, StyledImage, StyledTitle, Wrapper } from './CountryListItem.styles';

type CountryListItemProps = {
	country: countryType;
};

const CountryListItem: FC<CountryListItemProps> = ({ country: { name, population, region, capital, flag } }) => (
	<Wrapper as='li'>
		<Link to={`country/${name.toLowerCase()}`}>
			<StyledImage src={flag} alt={`National flag of ${name}`} />
			<StyledContent>
				<StyledTitle>{name}</StyledTitle>
				<DetailList>
					<p>
						Population: <span>{addComans(population)}</span>
					</p>
					<p>
						Region: <span>{region}</span>
					</p>
					<p>
						Capital: <span>{capital}</span>
					</p>
				</DetailList>
			</StyledContent>
		</Link>
	</Wrapper>
);

export default CountryListItem;
