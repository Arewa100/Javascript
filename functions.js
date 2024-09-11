//nested functions 

function stringReverser(stringInput) {

	newString ="";
	for(let index = stringInput.length; index >= 0; index--) {
		let character = stringInput.charAt(index);
		newString = newString + character;
	}
	return newString;
}

console.log(stringReverser("hola"));



//function in function

function exchange(firstLetter, secondLetter) {

	function swap(first, second) {
		return second + " " + first;
	}

	return swap(firstLetter, secondLetter);
}


console.log(exchange("e", "p"))


const square = function(x) {
	return x * x;
};

console.log(square(4));



const sum = (num1, num2) => num1 + num2;

console.log(sum(3, 3));


const calculator = {
	add: function(a, b) {
		return a + b
	},
	subtract: (a, b)=> a - b
}

console.log(calculator.subtract(3, 5))

