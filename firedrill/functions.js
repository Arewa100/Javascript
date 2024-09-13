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

module.exports = {sumOfEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate};