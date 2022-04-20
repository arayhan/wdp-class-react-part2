import { notify } from "react-notify-toast";

const disablePageScroll = (isDisable = true) => {
	const elHTML = document.querySelector("html");

	if (isDisable) elHTML.style.overflowY = "hidden";
	else elHTML.style.removeProperty("overflow-y");
};

const truncateText = (text, maxLength = 10) => {
	let result = text.substr(0, maxLength);
	if (text.length > maxLength) result += "...";
	return result;
};

const queryStringToObject = (queryString) => {
	const pairs = queryString.substring(1).split("&");

	const array = pairs.map((el) => {
		const parts = el.split("=");
		return parts;
	});

	return Object.fromEntries(array);
};

const numberFormat = (input) => {
	const number = input.toString();
	const split = number.split("").reverse();
	const addDot = split.map((digit, index) =>
		index % 3 === 0 && index !== 0 ? `${digit}.` : digit
	);
	const output = addDot.reverse().join("");

	return output;
};

const objectToQueryString = (obj) => {
	return Object.keys(obj).reduce((str, value, i) => {
		const key = encodeURIComponent(value);
		const val = encodeURIComponent(obj[key]);
		const delimiter = i === 0 ? "?" : "&";
		return [str, delimiter, key, "=", val].join("");
	}, "");
};

const showNotificationServiceError = (error) => {
	let notifyMessage = "Terjadi Kesalahan";
	let notifyType = "error";

	if (error) {
		if (error.status === 500 || error.status === 404) {
			notifyType = "error";
			notifyMessage = `${error.status} : ${error.statusText}`;
		} else if (error.data) {
			if (error.data.errors) {
				notifyType = "warning";
				notifyMessage = Object.values(error.data.errors).map((message) => (
					<div>{message}</div>
				));
			} else if (error.data.message) {
				notifyType = "warning";
				notifyMessage = error.data.message;
			} else notifyType = "error";
		}
	}

	return notify.createShowQueue()(notifyMessage, notifyType);
};

const removeDuplicateObjectFromArray = (array) => {
	const objects = array.map(JSON.stringify);
	const uniqueSet = new Set(objects);
	const result = Array.from(uniqueSet).map(JSON.parse);

	return result;
};

export {
	disablePageScroll,
	numberFormat,
	truncateText,
	queryStringToObject,
	objectToQueryString,
	showNotificationServiceError,
	removeDuplicateObjectFromArray,
};
