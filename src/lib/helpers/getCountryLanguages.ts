export const getCountryLanguages = (countryLanguages: { name: string }[]) => {
	const languages = countryLanguages.map((language) => language.name);
	const result = languages.join(', ');

	return result;
};
