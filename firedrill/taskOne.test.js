const {sumOfEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate, reverse, factorial, isPalindrome, isLeapYear, sumMultiplesOfThreeAndFive} = require('./functions');

const {objectLogger, fullName, stringFormater} = require('./objects');
const {arrayManipulator} = require('./breakfast')
const {numberCounter, testScores, scoreIncrementer, squareOfScores, bookDistributor, timeIdentifer, expensesCalculator} = require('./Arrays/arrayfunctions')


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

test("testing that function objectLogger can loop through objects and display its key value pair in a tabular form", ()=> {
	const car = {
		make: 'Toyota', 
		model: 'camry', 
		year: 2021
	}

	let result = objectLogger(car);
	let expected = "make:Toyota model:camry year:2021 ";
	expect(result).toEqual(expected);
	
})


// test("testing that function can increment and decrement count", ()=> {
// 	//let step = 1;
// 	//let result = counter(step);
// 	let result = increment();
// 	let expected = 1;
// 	expect(result).toEqual(expected)
// })


test("testing that function can return full name", ()=> {
	const person = {
		firstName: "Olamide",
		lastName: "Williams"
	}

	let result = fullName(person);
	let expected = "Olamide Williams";
	expect(result).toBe(expected);
})

test("testing that the object person 2 can return strng format", ()=> {
	const person = {
		firstName: "Olamide",
		lastName: "Williams",
		age: 20
	}

	let result = stringFormater(person);
	let expected = "First Name: Olamide, Last Name: Williams, Age: 20";
	expect(result).toBe(expected);
})


test("test that the function array manipulator can sum preceeding values", ()=> {
	let given = [2, 3, 4, 5, 6, 7];
	let result = arrayManipulator(given)
	let expected = [5, 9, 13]
	expect(result).toEqual(expected);
})

test("testing that the funnction array manipulator can manipulate another array", ()=> {
	let given = [1, 3, 5, 1, 6, 3];
	let result = arrayManipulator(given)
	let expected = [4, 6, 9]
	expect(result).toEqual(expected);
})

test("testing if elements can be counted", ()=> {
	let givenArray = [1, 1, 2, 3, 2]
	let result = numberCounter(givenArray)
	let expected = {
		"1": 2,
		"2": 2,
		"3": 1
	}
	expect(result).toEqual(expected)
})

test("testing if the function can count another list ocurrence", ()=> {
	let givenArray = [5, 4, 5, 6, 7,7, 6]
	let result = numberCounter(givenArray)
	let expected = {
		"5": 2,
		"4": 1,
		"6": 2,
		"7": 2
	}
	expect(result).toEqual(expected)
})

test("testing to see if function testScore is returning the highest scores", ()=> {
	let givenScores = [70, 45, 34, 75, 73, 88, 90, 35, 72, 50]
	let result = testScores(givenScores)
	let expected = [70, 75, 73, 88, 90, 72]
	expect(result).toEqual(expected);
})

test("testing if tetScore function can return the highest scores for next scores", ()=> {
	let givenScores = [50, 45, 34, 75, 60, 88, 50, 35, 72, 50]
	let result = testScores(givenScores)
	let expected = [75, 88, 72]
	expect(result).toEqual(expected);
})

test("testing if score incrementer can increase score for teacher tom", ()=> {
	let givenScores = [85, 92, 78, 88, 95]
	let result = scoreIncrementer(givenScores)
	let expected = [90, 97, 83, 93, 100]
	expect(result).toEqual(expected);
})

test("testing if function can find the squares of each score for Jack", ()=> {
	let givenScores = [2, 4, 6, 8, 10]
	let result = squareOfScores(givenScores)
	let expected = [4, 16, 36, 64, 100]
	expect(result).toEqual(expected);
})

test("testing if books is distributed accordingly", ()=> {
	let givenListOfMembers = ["Emily", "Jack", "Sophia", "Daniel"]
	let result = bookDistributor(givenListOfMembers)
	let expected = {
		"Emily": "Obi goes to school",
		"Jack": "The burning Grass",
		"Sophia": "The Tempest",
		"Daniel": "Half of a Yellow sun"
	}
	expect(result).toEqual(expected)
})

test("testing if books is distributed accordingly", ()=> {
	let givenListOfMembers = ["Emily", "Mystery", "Bimbo", "Fabulous"]
	let result = bookDistributor(givenListOfMembers)
	let expected = {
		"Emily": "Obi goes to school",
		"Mystery": "The burning Grass",
		"Bimbo": "The Tempest",
		"Fabulous": "Half of a Yellow sun"
	}
	expect(result).toEqual(expected)
})

test("test that function can return classes offered in the afternoon", ()=> {
	let givenListOfMembers = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
	let result = timeIdentifer(givenListOfMembers)
	let expected = ["1:00 PM", "3:00 PM", "5:00 PM"]
	expect(result).toEqual(expected)
})

test("test function to return davids total amount spent", ()=> {

	let givenListOfMembers = {
		"groceries": 150,
		"dining out": 100,
		"transportation": 50,
		"entertainment": 80
	};
	let result = expensesCalculator(givenListOfMembers);
	let expected = 380;
	expect(result).toEqual(expected)
})


