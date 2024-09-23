function calculator(numOne, numTwo) {
	function evaluate(secondNum) {
		return numOne * secondNum
	}
	return evaluate(numTwo)
}

console.log(calculator(2, 3))