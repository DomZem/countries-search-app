export type countryType = {
	capital: string;
	flag: string;
	name: string;
	population: number;
	region: string;
};

export type countryDetailsType = countryType & {
	nativeName: string;
	subregion: string;
	currencies: {
		code: string;
		name: string;
		symbole: string;
	}[];
	languages: {
		name: string;
	}[];
	topLevelDomain: string[];
};
