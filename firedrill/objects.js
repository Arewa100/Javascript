const book = {
	title: "The Great Gatsby", 
	author: "F. Scott Fitzgerald", 
	yearPublished: 1925
	};

function print(book) {
	const{title, author} = book;
	return title + " " + author;
} 
console.log(print(book))


function objectLogger(collectionOfKeyValuePairs) {
	let result = "";
	for(key in collectionOfKeyValuePairs) {
		result = result + key + ":" + collectionOfKeyValuePairs[key] + " ";
	}
	return result;
}

const counter = {
	count: 0,
	step: 1,
	increment: function() {
		this.count = this.count + this.step;
			return this.count;
		}, 
	decrement: function() {
		this.count = this.count - this.step;
		}	
}

function fullName(personObject) {
	const{firstName, lastName} = personObject;
	return firstName + " " + lastName;
}



function stringFormater(personObject) {
	const{firstName, lastName, age} = personObject;
	return `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`
}



module.exports = {objectLogger, increment, fullName, stringFormater};

console.log(counter().count)
counter().increment()
console.log(counter().count)