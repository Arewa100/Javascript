function AtmValidator(cardNumber) {
	return isValid(cardNumber) ? "card is valid..." : "invalid card...";
}


function isValid(cardNumber) {
	let condition = cardNumber.length == 19 && cardNumber.charAt(4) == "-" && cardNumber.charAt(9) == "-" && cardNumber.charAt(14) == "-" && cardNumber.charAt(0) == "4" || cardNumber.charAt(0) == "5" || cardNumber.charAt(0) == "6";
	return condition ? true : false;
}

let cardNumber = "4234-5678-9012-3456";
console.log(AtmValidator(cardNumber))

