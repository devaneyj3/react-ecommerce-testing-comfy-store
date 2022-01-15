export const formatPrice = (num) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(num / 100);
};

export const getUniqueValues = (data, type) => {
	let getUniqueValues = data.map((item) => item[type]);
	if (type === "colors") {
		getUniqueValues = getUniqueValues.flat();
	}
	return ["all", ...new Set(getUniqueValues)];
};
