const {sumOfEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate} = require('./functions');


test("testing if function can output sum of even numbers", ()=> {
	let givenArray = [2, 4, 5, 1, 7, 8, 10];
	let result = sumOfEvenNumbers(givenArray);
	let expected = 24;
	expect(result).toEqual(expected);

})

test("testing if function can output sum for another set of array inputs", ()=> {
	let givenArray = [1, 3, 5, 2, 6];
	let result = sumOfEvenNumbers(givenArray);
	let expected = 8;
	expect(result).toEqual(expected);
})

test("testing to see if function findMax can return the largest element in a given array", ()=> {
	let givenArray = [1, 3, 5, 2, 6];
	let result = findMax(givenArray);
	let expected = 6;
	expect(result).toEqual(expected);
})

test("testing if findMax function can return largest element of another given array", ()=> {
	let givenArray = [2, 4, 5, 1, 7, 8, 10];
	let result = findMax(givenArray);
	let expected = 10;
	expect(result).toEqual(expected);
}) 

test("testing if function countOddNumbers can count the number of Odd numbers in a given array", ()=> {
	let givenArray = [2, 4, 5, 1, 7, 8, 10];
	let result = countOddNumbers(givenArray);
	let expected = 3;
	expect(result).toEqual(expected);
})

test("testing if function countOddNumbers can count the number of Odd numbers in another given array", ()=> {
	let givenArray = [2, 3, 5, 1, 4, 11, 10];
	let result = countOddNumbers(givenArray);
	let expected = 4;
	expect(result).toEqual(expected);
})

test("testing if function can check if number is prime", ()=> {
	let givenArray = 17;
	let result = isPrime(givenArray);
	let expected = true;
	expect(result).toBe(expected);
})

test("testing if function can check if another number is prime", ()=> {
	let givenArray = 9;
	let result = isPrime(givenArray);
	let expected = false;
	expect(result).toBe(expected);
})

test("testing if function can find the first duplicate in a given array", ()=> {
	let givenArray = [2, 3, 5, 1, 1, 11, 10];
	let result = findFirstDuplicate(givenArray);
	let expected = 1;
	expect(result).toEqual(expected);
})

test("testing if function can find the first duplicate in another given array", ()=> {
	let givenArray = [2, 3, 5, 1, 1, 11, 2];
	let result = findFirstDuplicate(givenArray);
	let expected = 2;
	expect(result).toEqual(expected);
})

test("testing if function can output -1 when no duplicate is found", ()=> {
	let givenArray = [2, 3, 5, 7, 1, 4, 6];
	let result = findFirstDuplicate(givenArray);
	let expected = -1;
	expect(result).toEqual(expected);
})



