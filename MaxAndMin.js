function maxAndMinFinder(arrayOfNumbers) { 
	let temporaryNumber = 0;
	let output = []
	for(let index = 0; index < arrayOfNumbers.length; index++) {

		for(let count = index + 1; count < arrayOfNumbers.length; count++) {

			if(arrayOfNumbers[index] > arrayOfNumbers[count]) {
				temporaryNumber = arrayOfNumbers[index];
				arrayOfNumbers[index] = arrayOfNumbers[count];
				arrayOfNumbers[count] = temporaryNumber;
			}
		}
	}
	output[0] = arrayOfNumbers[0];
	output[1] = arrayOfNumbers[arrayOfNumbers.length - 1];
	return output;	
}

givenArray = [3,5,9,7,8]
givenArray1 = [4,5,1,7,8]
console.log(maxAndMinFinder(givenArray));
console.log(maxAndMinFinder(givenArray1));
