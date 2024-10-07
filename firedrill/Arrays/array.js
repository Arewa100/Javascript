// let array = [2, 4, 6, "from", true];
// console.log(array);

// let newArray = new Array(3);
// console.log(newArray.length);

// let result = Array.from("semicolon");
// // console.log(result);

//slice
// let arrayOfNumbers = [1, 3, 4, 5, 6, 7];
// let sliced = arrayOfNumbers.slice(-1)
// console.log(sliced);

let givenArray = [1, 3, 4, 6 , 7 ,8]
let answer = givenArray[0, 2]
let arr = [22, 44, 55]
console.log(answer)

// let answer = givenArray.splice(1, 0, 6, 9, ...arr)
// console.log(givenArray)
// console.log(answer)

//spread operator helps me to copy all the element of an array


// let arr = [3, 4, 5, 6, 7, 8]

// function callback(element) {
//    return element * 2;
// }

// function sum(num, callbackFunction) {
//     return callbackFunction(num) + 3
// }

// console.log(sum(3, callback))


// arr.forEach((element)=>{
//     let answer = element * 2;
//     console.log(answer)
// })


//forEach is a function that takes in a function



// let identification = {
//     firstName: "Ope",
//     surName: "Vivian",
//     age: 23
// }

// for(key in identification) {
//     console.log(key, identification.key)
// }


//filter can be used to filter even numbers and odd numbers

// let arr = [3, 4, 5, 6, 7, 8]
// let fruits = ["banana", "orange", "pear"]

// function evenNumbers(given) {
//    return  given.filter((number)=> number % 2 === 0)
// }

// console.log(evenNumbers(arr))

// let arr = [1, 4, 5, 6, 7, 8]

// function multiplyByTwo(array) {
//    let result = array.map((number)=> number * 2) //each number from the array is taken and multiplied by two
//    return result
// } 

// let arrayOfObjects = [{name: "john", age: 24}, {name: "jane", age: 24}];

// let getNames = function(array)  {
//     return array.map((obj)=> obj.name)
// }
// // we can also do it like this 
// // let getNames = (array)=> {
// //     return array.map({name})=> name)
// // }

// console.log(getNames(arrayOfObjects));

// arr = []
// // let map = new map();

// //map returns a value onlike forEach

// let inventory = [
//     {name: "apple"},
//     {name: "orange"},
//     {name: "mango"}
// ];


// function ischerry(fruit) {
//     return fruit.name === "mango";
// }

// console.log(inventory.find(ischerry));  // wow i love it

// let arr = [2, 3, 4, 5]
// let newArray = arr.filter((number)=> number % 2 == 0)
// console.log(newArray)



// //mapping through objects

// let givenObject = [{name: 'ope', age: 3}, {name: "kathrina", age: 50}]
// // let mappedResult = givenObject.map((obj)=> obj.name = "praise")
// // console.log(mappedResult)

// console.log(givenObject.find((nam)=> nam.name === "kathrina"))
