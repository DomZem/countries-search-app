export const addComans = (number: number): string => {
	const numberStr = number.toString();
	let result = '';
	let counter = 0;

	for (let i = numberStr.length - 1; i >= 0; i--) {
		result = numberStr[i] + result;
		counter++;

		if (counter === 3 && i !== 0) {
			result = ',' + result;
			counter = 0;
		}
	}

	return result;
};
