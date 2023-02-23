import { COUNTRIES_API_URL, queryParams } from 'api';
import { DetailList } from 'components/atoms/DetailList/DetailList';
import HomeButton from 'components/atoms/HomeButton/HomeButton';
import Spinner from 'components/molecules/Spinner/Spinner';
import { addComans } from 'lib/helpers/addComans';
import { getCountryLanguages } from 'lib/helpers/getCountryLanguages';
import { countryDetailsType } from 'lib/types/country';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledContainer, StyledContent, StyledDetails, StyledImage, Wrapper } from './CountryDetails.styles';

const CountryDetails = () => {
	const [country, setCountry] = useState<countryDetailsType>();
	const { name } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const data = await fetch(`${COUNTRIES_API_URL}/name/${name}?fields=${queryParams.basic},${queryParams.extended}`);
				const [jsonData] = await data.json();
				setCountry(jsonData);
				setLoading(false);
			} catch (err) {
				setLoading(false);
			}
		})();
	}, [name]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<Wrapper>
			<HomeButton />
			{country ? (
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
				<h2>No country details found for {name}.</h2>
			)}
		</Wrapper>
	);
};

export default CountryDetails;
