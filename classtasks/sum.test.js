const {add, subtract, evenNumber} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
})

test("substract two numbers", ()=> {
	let result = subtract(4, 2);
	let expected = 2;
	expect(result).toBe(expected);
})

test("return even numbers", ()=> {
	let givenArray = [2, 3, 1, 6, 9]
	let result = evenNumber(givenArray);
	let expected = [2, 6];
	expect(result).toEqual(expected);
})


