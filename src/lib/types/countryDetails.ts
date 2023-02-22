import { countryType } from './country';

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
