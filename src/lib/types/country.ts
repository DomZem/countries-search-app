export type countryType = {
	borders: string[];
	capital: string;
	currencies: [
		{
			name: string;
		}
	];
	languages: [
		{
			name: string;
			nativeName: string;
		}
	];
	flags: {
		svg: string;
		png: string;
	};
	name: string;
	population: number;
	region: string;
	subregion: string;
};
