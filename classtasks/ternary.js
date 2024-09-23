function Calculator(firstNumber, secondNumber, operator) {
	return operator == "+" ? firstNumber + secondNumber : operator == "-" ? firstNumber - secondNumber : operator == "*" ? firstNumber * secondNumber : operator == "/" ? firstNumber / secondNumber : "invalid operator"
	
}


let firstNumber = Number("6")
let secondNumber = Number("2")
let operator = String('-')

let calculatedResult = Calculator(firstNumber, secondNumber, operator)
console.log(calculatedResult)