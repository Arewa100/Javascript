function sumOfEvenNumbers(arrayOfNumbers) {
	let total = 0;
	for(number of arrayOfNumbers) {
		number % 2 == 0 ? total = total + number : total = total;
	}
	return total;
}

function findMax(arrayOfNumbers) {
	let maxNumber = 0;
	for(number of arrayOfNumbers) {
		if(maxNumber < number) {
			maxNumber = number;
		}
	}
	return maxNumber;
}

function countOddNumbers(arrayOfNumbers) {
	let numberOfOddCount = 0
	for(number of arrayOfNumbers) {
		number % 2 != 0 ? numberOfOddCount++ : numberOfOddCount = numberOfOddCount;
	}
	return numberOfOddCount;
}

function isPrime(givenNumber) {
	let count = 1;
	let factor = 0;
	while(count <= givenNumber) {
		if(givenNumber % count == 0 && count != 1) {
			factor++;
		}
		count++;
	}
	return factor == 1 ? true : false;
	
}

function findFirstDuplicate(arrayOfNumbers) {

	for(let theIndex = 0; theIndex < arrayOfNumbers.length; theIndex++) {

		for(let index = theIndex + 1; index < arrayOfNumbers.length; index++) {
			if(arrayOfNumbers[theIndex] == arrayOfNumbers[index]) {
				return arrayOfNumbers[theIndex];
			}
		}
	}
	return -1;
}

function reverse(arrayOfNumbers) {
	let newArray = [];
	for(let index = arrayOfNumbers.length-1; index >= 0; index--) {
		newArray.push(arrayOfNumbers[index]);
	}
	return newArray;
}

const factorial = function(number) {
	let theFactorial = 1;
	while(number > 0) {
		theFactorial = theFactorial * number;
		number--;
	}
	return theFactorial;
}

const isPalindrome = function(stringInput) {
	newString = "";
	for(let index = stringInput.length - 1; index >= 0; index--) {
		newString = newString + stringInput[index];
	}
	return stringInput === newString ? true : false;
}

const isLeapYear = function(year) {
	return (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) ? true : false;
}

function sumMultiplesOfThreeAndFive(number) {
	let sum = 0;
	for(let index = 1; index < number; index++) {
		if(index % 5 == 0 && index % 3 == 0) {
			sum = sum + index;
		}
	}
	return sum;
}
module.exports = {sumOfEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate, reverse, factorial, isPalindrome, isLeapYear, sumMultiplesOfThreeAndFive};