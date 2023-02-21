import { Wrapper } from 'components/organisms/FilterableTableCountry/FilterableTableCountry.styles';
import { countryDetailsType } from 'lib/types/countryDetails';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const CountryDetails = () => {
	const [country, setCountry] = useState<countryDetailsType>();
	const { name } = useParams();

	useEffect(() => {
		fetch(`https://restcountries.com/v2/name/${name}`)
			.then((response) => response.json())
			.then(([data]) => setCountry(data))
			.catch((err) => console.log(err));
	}, [name]);

	return (
		<Wrapper>
			<Link to='/'>Back</Link>
			<Container>
				<img src={country?.flag} alt={`Flag of ${country?.name}`} />
				<Content>
					<h3>{country?.name}</h3>
					<div>
						<ul>
							<li>
								Native name: <span>{country?.nativeName}</span>
							</li>
							<li>
								Population: <span>{country?.population}</span>
							</li>
							<li>
								Region: <span>{country?.region}</span>
							</li>
							<li>
								Sub Region: <span>{country?.subregion}</span>
							</li>
							<li>
								Capital: <span>{country?.capital}</span>
							</li>
						</ul>
						<ul>
							<li>
								Top Level Domain: <span>{country?.nativeName}</span>
							</li>
							<li>
								Currencies: <span>Euro</span>
							</li>
							<li>
								Languages: <span>{country?.region}</span>
							</li>
						</ul>
					</div>
					<div>
						<p>Border Countries</p>
						{/* <ul>
							{country?.borders.map((border) => (
								<li>{border}</li>
							))}
						</ul> */}
					</div>
				</Content>
			</Container>
		</Wrapper>
	);
};

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 4.5rem;
`;

export const Content = styled.div`
	div {
		display: flex;
		gap: 2rem;
		justify-content: space-between;
		align-items: center;
	}
`;

export default CountryDetails;
