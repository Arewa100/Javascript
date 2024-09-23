function add(a, b) {
  return a + b; 
}

function subtract(numberOne, numberTwo) {
	return numberOne - numberTwo;
}

function evenNumber(arr) {
	let newArray = [];
	for(let number of arr) {
	if (number % 2 === 0) {
	 newArray.push(number)
	}
	}
	return newArray
}
module.exports = {add, subtract, evenNumber};  //this is called destructuring!!! 