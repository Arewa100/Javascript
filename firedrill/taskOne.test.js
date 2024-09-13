const {sumOfEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate, reverse, factorial, isPalindrome, isLeapYear, sumMultiplesOfThreeAndFive} = require('./functions');


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
	let given = 17;
	let result = isPrime(given);
	let expected = true;
	expect(result).toBe(expected);
})

test("testing if function can check if another number is prime", ()=> {
	let given = 9;
	let result = isPrime(given);
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

test("testing if function can reverse a given array", ()=> {
	let givenArray = [2, 3, 5, 7, 1, 4, 6];
	let result = reverse(givenArray);
	let expected = [6, 4, 1, 7, 5, 3, 2];
	expect(result).toEqual(expected);
})

test("testing if function can reverse another given array", ()=> {
	let givenArray = [1, 2, 3, 4, 5, 6, 7];
	let result = reverse(givenArray);
	let expected = [7, 6, 5, 4, 3, 2, 1];
	expect(result).toEqual(expected);
})

test("testing if function can return factorial of a given number e.g 5", ()=> {
	let given = 5;
	let result = factorial(given);
	let expected = 120;
	expect(result).toBe(expected);
})

test("testing if function can return factorial of another given number e.g 6", ()=> {
	let given = 6;
	let result = factorial(given);
	let expected = 720;
	expect(result).toBe(expected);
})

test("testing if String is palindrom", ()=> {
	let given = "racecar"
	let result = isPalindrome(given);
	let expected = true;
	expect(result).toBe(expected);
})

test("testing if String is palindrom", ()=> {
	let given = "race"
	let result = isPalindrome(given);
	let expected = false;
	expect(result).toBe(expected);
})

test("testing to check if a year is a leap year", ()=> {
	let given = 2020;
	let result = isLeapYear(given);
	let expected = true;
	expect(result).toBe(expected);
})

test("testing to check if another given year is a leap year", ()=> {
	let given = 2023;
	let result = isLeapYear(given);
	let expected = false;
	expect(result).toBe(expected);
})

test("testing to check the sum of multiples of three and five below a given number", ()=> {
	let given = 25
	let result = sumMultiplesOfThreeAndFive(given);
	let expected = 15;
	expect(result).toBe(expected);
})





