function oddEvenCounter(arrayOfNumbers) {
	let evenCount = 0;
	let oddCount = 0;
	for(let number of arrayOfNumbers) {
		number % 2 == 0 ? evenCount++ : oddCount++;
	}
	let result = [evenCount, oddCount]
	return result;
}

let givenArray = [2, 1, 5, 7, 8];

console.log(oddEvenCounter(givenArray));