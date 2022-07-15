module.exports = function towelSort (matrix) {
	let result = [];
	let counter = 1;

	if (arguments.length === 0) {
		return [];
	} else {
		for (let elem of matrix) {
			if (counter % 2 !== 0) {
				result.push(...elem);
			} else if (counter % 2 === 0) {
				result.push(...elem.reverse());
			}
			counter++;
		}
		return result;
	}
}
