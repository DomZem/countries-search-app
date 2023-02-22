import { COUNTRIES_API_URL, queryParams } from 'api';
import { DetailList } from 'components/atoms/DetailList/DetailList';
import HomeButton from 'components/atoms/HomeButton/HomeButton';
import { addComans } from 'lib/helpers/addComans';
import { getCountryLanguages } from 'lib/helpers/getCountryLanguages';
import { countryDetailsType } from 'lib/types/countryDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledContainer, StyledContent, StyledDetails, StyledImage, Wrapper } from './CountryDetails.styles';

const CountryDetails = () => {
	const [country, setCountry] = useState<countryDetailsType>();
	const [error, setError] = useState(false);
	const { name } = useParams();

	useEffect(() => {
		fetch(`${COUNTRIES_API_URL}/name/${name}?fields=${queryParams.basic},${queryParams.extended}`)
			.then((response) => response.json())
			.then(([data]) => setCountry(data))
			.catch(() => setError(true));
	}, [error, name]);

	return (
		<Wrapper>
			<HomeButton />
			{country && !error ? (
				<StyledContainer>
					<StyledImage src={country.flag} alt={`Flag of ${country.name}`} />
					<StyledContent>
						<h1>{country.name}</h1>
						<StyledDetails>
							<DetailList>
								<p>
									Native name: <span>{country.nativeName}</span>
								</p>
								<p>
									Population: <span>{addComans(country.population)}</span>
								</p>
								<p>
									Region: <span>{country.region}</span>
								</p>
								<p>
									Sub Region: <span>{country.subregion}</span>
								</p>
								<p>
									Capital: <span>{country.capital}</span>
								</p>
							</DetailList>
							<DetailList>
								<p>
									Top Level Domain: <span>{country.nativeName}</span>
								</p>
								<p>
									Currencies: <span>Euro</span>
								</p>
								<p>
									Languages: <span>{getCountryLanguages(country.languages)}</span>
								</p>
							</DetailList>
						</StyledDetails>
					</StyledContent>
				</StyledContainer>
			) : (
				<h2>Country not found!</h2>
			)}
		</Wrapper>
	);
};

export default CountryDetails;
